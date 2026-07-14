'use client';

import { useEffect, useRef } from 'react';

interface Cluster {
  cx: number;
  cy: number;
  targetCx: number;
  targetCy: number;
  speedX: number;
  speedY: number;
}

interface Node {
  id: number;
  clusterIndex: number;
  angle: number;
  angleSpeed: number;
  radiusOffset: number;
  orbitRadius: number;
  depth: number; // 0.5 (bg), 1.0 (mid), 1.5 (fg) for parallax
  size: number;
  opacity: number;
  
  // Real-time coordinates
  x: number;
  y: number;
  magnetX: number;
  magnetY: number;
  
  // Flash animation trigger when pulse visits
  flashIntensity: number;
}

interface Pulse {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
  chainCount: number;
  history: number[];
  color: string;
}

export function AuroraBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let W = window.innerWidth;
    let H = window.innerHeight;
    let dpr = window.devicePixelRatio || 1;

    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.scale(dpr, dpr);

    let rafId: number;
    let rect = canvas.getBoundingClientRect();

    // Mouse coordinates
    let targetMouseX = -9999;
    let targetMouseY = -9999;
    let lerpedMouseX = -9999;
    let lerpedMouseY = -9999;
    let prevMouseX = -9999;
    let prevMouseY = -9999;
    let mouseActive = false;
    let lastBurstTime = 0;

    const handleResize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      dpr = window.devicePixelRatio || 1;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.scale(dpr, dpr);
      rect = canvas.getBoundingClientRect();
      initNetwork();
    };
    window.addEventListener('resize', handleResize, { passive: true });

    const handleScroll = () => {
      rect = canvas.getBoundingClientRect();
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const handleMouseMove = (e: MouseEvent) => {
      mouseActive = true;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (prevMouseX === -9999) {
        prevMouseX = x;
        prevMouseY = y;
      } else {
        prevMouseX = lerpedMouseX;
        prevMouseY = lerpedMouseY;
      }

      targetMouseX = x;
      targetMouseY = y;

      // Mouse speed tracking
      const dx = targetMouseX - prevMouseX;
      const dy = targetMouseY - prevMouseY;
      const speed = Math.sqrt(dx * dx + dy * dy);

      // Trigger elegant bursts of amber workflow pulses on fast movement
      const now = performance.now();
      if (speed > 12 && now - lastBurstTime > 300) {
        triggerWorkflowBurst();
        lastBurstTime = now;
      }
    };

    const handleMouseLeave = () => {
      mouseActive = false;
      targetMouseX = -9999;
      targetMouseY = -9999;
      prevMouseX = -9999;
      prevMouseY = -9999;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    // AI Automation Network Architecture
    let clusters: Cluster[] = [];
    let nodes: Node[] = [];
    let pulses: Pulse[] = [];
    const CLUSTER_COUNT = 4;
    const NODE_COUNT = Math.max(30, Math.min(55, Math.floor((W * H) / 25000)));
    const CONNECTION_DIST = 140;

    const initNetwork = () => {
      clusters = [];
      nodes = [];
      pulses = [];

      // 1. Initialize clusters that drift very slowly
      for (let i = 0; i < CLUSTER_COUNT; i++) {
        // Grid-based random centers
        const cx = W * (0.2 + (i % 2) * 0.5 + (Math.random() - 0.5) * 0.1);
        const cy = H * (0.2 + Math.floor(i / 2) * 0.45 + (Math.random() - 0.5) * 0.1);
        clusters.push({
          cx,
          cy,
          targetCx: cx,
          targetCy: cy,
          speedX: (Math.random() - 0.5) * 0.12,
          speedY: (Math.random() - 0.5) * 0.12,
        });
      }

      // 2. Initialize nodes with varying depth (Parallax) and orbital behaviors
      for (let i = 0; i < NODE_COUNT; i++) {
        const clusterIndex = i % CLUSTER_COUNT;
        const depthRandom = Math.random();
        
        let depth = 1.0;
        let size = 2.5 + Math.random() * 2.0;
        let opacity = 0.5 + Math.random() * 0.35;

        if (depthRandom < 0.3) {
          depth = 0.5; // background layer
          size = 1.2 + Math.random() * 0.8;
          opacity = 0.2 + Math.random() * 0.15;
        } else if (depthRandom > 0.8) {
          depth = 1.5; // foreground layer
          size = 4.5 + Math.random() * 1.5;
          opacity = 0.75 + Math.random() * 0.15;
        }

        nodes.push({
          id: i,
          clusterIndex,
          angle: Math.random() * Math.PI * 2,
          angleSpeed: (0.00015 + Math.random() * 0.0003) * (Math.random() > 0.5 ? 1 : -1),
          radiusOffset: Math.random() * Math.PI * 2,
          orbitRadius: 40 + Math.random() * 120,
          depth,
          size,
          opacity,
          x: 0,
          y: 0,
          magnetX: 0,
          magnetY: 0,
          flashIntensity: 0,
        });
      }

      // Evaluate initial coordinates
      updateNodePositions(0);
    };

    const updateNodePositions = (time: number) => {
      // 1. Update cluster positions
      clusters.forEach((c) => {
        c.cx += c.speedX;
        c.cy += c.speedY;

        // Bounce clusters off margins
        if (c.cx < W * 0.05 || c.cx > W * 0.95) c.speedX *= -1;
        if (c.cy < H * 0.05 || c.cy > H * 0.95) c.speedY *= -1;
      });

      // 2. Resolve orbital node positions based on depth
      nodes.forEach((node) => {
        const cluster = clusters[node.clusterIndex];
        node.angle += node.angleSpeed;

        const breatheRadius = node.orbitRadius + Math.sin(time * 0.0004 + node.radiusOffset) * 15;
        
        // Base coordinate relative to cluster
        const baseX = cluster.cx + Math.cos(node.angle) * breatheRadius;
        const baseY = cluster.cy + Math.sin(node.angle) * breatheRadius;

        node.x = baseX;
        node.y = baseY;
      });
    };

    // Radially propagate amber workflow pulses outwards from the cursor
    const triggerWorkflowBurst = () => {
      if (!mouseActive || nodes.length === 0) return;

      // Find closest node to cursor
      let closestNodeIdx = -1;
      let minDist = 99999;
      for (let i = 0; i < nodes.length; i++) {
        const dx = (nodes[i].x + nodes[i].magnetX) - targetMouseX;
        const dy = (nodes[i].y + nodes[i].magnetY) - targetMouseY;
        const d = dx * dx + dy * dy;
        if (d < minDist) {
          minDist = d;
          closestNodeIdx = i;
        }
      }

      if (closestNodeIdx !== -1 && minDist < 180 * 180) {
        const rootNode = nodes[closestNodeIdx];
        rootNode.flashIntensity = 1.0;

        // Radiate to nearby neighbors on similar depth layer
        let pulsesSpawned = 0;
        for (let j = 0; j < nodes.length; j++) {
          if (closestNodeIdx === j) continue;
          
          const n = nodes[j];
          if (Math.abs(rootNode.depth - n.depth) > 0.6) continue; // depth filtering for structure

          const dx = rootNode.x - n.x;
          const dy = rootNode.y - n.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DIST + 20) {
            pulses.push({
              fromNode: closestNodeIdx,
              toNode: j,
              progress: 0,
              speed: 0.03 + Math.random() * 0.015,
              chainCount: 2, // propagate outward
              history: [closestNodeIdx],
              color: '#FFB000', // website primary amber color
            });
            pulsesSpawned++;
            if (pulsesSpawned >= 4) break; // Limit branch overload
          }
        }
      }
    };

    // Periodically spawn automated orchestration/decision pipelines
    let lastSpawnTime = 0;
    const spawnAutomatedPulse = (now: number) => {
      if (now - lastSpawnTime > 900) {
        lastSpawnTime = now;
        if (nodes.length < 2) return;

        // Pick a random starting node
        const fromIdx = Math.floor(Math.random() * nodes.length);
        const startNode = nodes[fromIdx];
        const candidates: number[] = [];

        for (let i = 0; i < nodes.length; i++) {
          if (i === fromIdx) continue;
          const n = nodes[i];
          if (Math.abs(startNode.depth - n.depth) > 0.6) continue;

          const dx = startNode.x - n.x;
          const dy = startNode.y - n.y;
          const d = Math.sqrt(dx * dx + dy * dy);

          if (d < CONNECTION_DIST) {
            candidates.push(i);
          }
        }

        if (candidates.length > 0) {
          const toIdx = candidates[Math.floor(Math.random() * candidates.length)];
          pulses.push({
            fromNode: fromIdx,
            toNode: toIdx,
            progress: 0,
            speed: 0.012 + Math.random() * 0.018,
            chainCount: 3, // multiple cascading steps
            history: [fromIdx],
            color: '#FFB000',
          });
        }
      }
    };

    initNetwork();

    // Main animation loop
    const tick = () => {
      const time = performance.now();

      // Clear Canvas
      ctx.clearRect(0, 0, W, H);

      // Automated triggers
      spawnAutomatedPulse(time);

      // Smooth mouse lerping
      if (mouseActive) {
        if (lerpedMouseX === -9999) {
          lerpedMouseX = targetMouseX;
          lerpedMouseY = targetMouseY;
        } else {
          lerpedMouseX += (targetMouseX - lerpedMouseX) * 0.06;
          lerpedMouseY += (targetMouseY - lerpedMouseY) * 0.06;
        }
      } else {
        lerpedMouseX = -9999;
        lerpedMouseY = -9999;
      }

      // Update node baseline orbital paths
      updateNodePositions(time);

      // Compute magnetic attraction & decay
      nodes.forEach((node) => {
        if (mouseActive) {
          const dx = lerpedMouseX - node.x;
          const dy = lerpedMouseY - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 220) {
            // Magnetic force scales exponentially
            const pullFactor = Math.pow((220 - dist) / 220, 1.8) * 0.12 * node.depth;
            node.magnetX += (dx * pullFactor - node.magnetX) * 0.08;
            node.magnetY += (dy * pullFactor - node.magnetY) * 0.08;
          } else {
            node.magnetX *= 0.92;
            node.magnetY *= 0.92;
          }
        } else {
          node.magnetX *= 0.90;
          node.magnetY *= 0.90;
        }

        // Slowly decay flash highlights
        if (node.flashIntensity > 0) {
          node.flashIntensity -= 0.03;
        }
      });

      // 1. Draw Network Connections (Dim, glowing purple/indigo lines)
      ctx.lineWidth = 0.8;
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];
        const r1X = n1.x + n1.magnetX;
        const r1Y = n1.y + n1.magnetY;

        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          if (Math.abs(n1.depth - n2.depth) > 0.6) continue; // draw only within depth limits

          const r2X = n2.x + n2.magnetX;
          const r2Y = n2.y + n2.magnetY;

          const dx = r1X - r2X;
          const dy = r1Y - r2Y;
          const d = Math.sqrt(dx * dx + dy * dy);

          if (d < CONNECTION_DIST) {
            // opacity based on distance and layers
            const alpha = (1.0 - d / CONNECTION_DIST) * 0.11 * (n1.depth / 1.5);
            ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`; // dim glowing violet
            ctx.beginPath();
            ctx.moveTo(r1X, r1Y);
            ctx.lineTo(r2X, r2Y);
            ctx.stroke();
          }
        }
      }

      // 2. Draw Data Transmission Pulses (ONLY bright amber/yellow `#FFB000`)
      ctx.save();
      ctx.lineWidth = 2.0;
      ctx.strokeStyle = '#FFB000';
      ctx.shadowBlur = 8;
      ctx.shadowColor = '#FFB000';

      const nextPulses: Pulse[] = [];
      for (let i = 0; i < pulses.length; i++) {
        const p = pulses[i];
        p.progress += p.speed;

        const from = nodes[p.fromNode];
        const to = nodes[p.toNode];

        if (from && to) {
          const fromX = from.x + from.magnetX;
          const fromY = from.y + from.magnetY;
          const toX = to.x + to.magnetX;
          const toY = to.y + to.magnetY;

          const currX = fromX + (toX - fromX) * p.progress;
          const currY = fromY + (toY - fromY) * p.progress;

          const tailLength = 0.22;
          const startProgress = Math.max(0, p.progress - tailLength);
          const startX = fromX + (toX - fromX) * startProgress;
          const startY = fromY + (toY - fromY) * startProgress;

          ctx.beginPath();
          ctx.moveTo(startX, startY);
          ctx.lineTo(currX, currY);
          ctx.stroke();

          if (p.progress >= 1) {
            // Pulse arrived. Flash node.
            to.flashIntensity = 1.0;

            if (p.chainCount > 0) {
              const currentNeighbors: number[] = [];
              for (let j = 0; j < nodes.length; j++) {
                if (j === p.toNode || p.history.includes(j)) continue;
                
                const n = nodes[j];
                if (Math.abs(to.depth - n.depth) > 0.6) continue;

                const dx = (to.x + to.magnetX) - (n.x + n.magnetX);
                const dy = (to.y + to.magnetY) - (n.y + n.magnetY);
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < CONNECTION_DIST) {
                  currentNeighbors.push(j);
                }
              }

              if (currentNeighbors.length > 0) {
                // Determine whether to split (cascade workflow)
                const shouldSplit = Math.random() < 0.35 && currentNeighbors.length >= 2;
                
                if (shouldSplit) {
                  // Spawn 2 parallel pulses
                  const idx1 = Math.floor(Math.random() * currentNeighbors.length);
                  let idx2 = Math.floor(Math.random() * currentNeighbors.length);
                  if (idx1 === idx2) idx2 = (idx1 + 1) % currentNeighbors.length;

                  const target1 = currentNeighbors[idx1];
                  const target2 = currentNeighbors[idx2];

                  nextPulses.push({
                    fromNode: p.toNode,
                    toNode: target1,
                    progress: 0,
                    speed: p.speed,
                    chainCount: p.chainCount - 1,
                    history: [...p.history, p.toNode],
                    color: '#FFB000',
                  });

                  nextPulses.push({
                    fromNode: p.toNode,
                    toNode: target2,
                    progress: 0,
                    speed: p.speed,
                    chainCount: p.chainCount - 1,
                    history: [...p.history, p.toNode],
                    color: '#FFB000',
                  });
                } else {
                  // Single next step
                  const nextTarget = currentNeighbors[Math.floor(Math.random() * currentNeighbors.length)];
                  nextPulses.push({
                    fromNode: p.toNode,
                    toNode: nextTarget,
                    progress: 0,
                    speed: p.speed,
                    chainCount: p.chainCount - 1,
                    history: [...p.history, p.toNode],
                    color: '#FFB000',
                  });
                }
              }
            }
          } else {
            nextPulses.push(p);
          }
        }
      }
      pulses = nextPulses;
      ctx.restore();

      // 3. Draw Nodes (With soft glow overlays for premium bloom)
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        const rX = node.x + node.magnetX;
        const rY = node.y + node.magnetY;

        // Base glowing dot
        const baseAlpha = node.opacity * (1 - Math.abs(1.0 - node.depth) * 0.25);
        ctx.fillStyle = `rgba(167, 139, 250, ${baseAlpha})`; // soft violet/indigo
        
        ctx.beginPath();
        ctx.arc(rX, rY, node.size, 0, Math.PI * 2);
        ctx.fill();

        // Node under pulse flash animation
        if (node.flashIntensity > 0) {
          ctx.save();
          ctx.fillStyle = `rgba(255, 176, 0, ${node.flashIntensity})`; // Amber flash
          ctx.shadowBlur = 10 * node.flashIntensity;
          ctx.shadowColor = '#FFB000';
          ctx.beginPath();
          ctx.arc(rX, rY, node.size + 2.5 * node.flashIntensity, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }

        // Active mouse hover highlight
        if (mouseActive) {
          const dx = rX - targetMouseX;
          const dy = rY - targetMouseY;
          const d = dx * dx + dy * dy;
          if (d < 120 * 120) {
            const highlightAlpha = (1.0 - Math.sqrt(d) / 120) * 0.45;
            ctx.fillStyle = `rgba(255, 176, 0, ${highlightAlpha})`; // subtle amber glow proximity
            ctx.beginPath();
            ctx.arc(rX, rY, node.size + 1.2, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden z-0"
      style={{ backgroundColor: 'hsl(260, 87%, 3%)' }}
    >
      {/* ── Geometric Canvas Layer ── */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* Global atmospheric purple glow fallback */}
      <div 
        className="absolute inset-0 bg-transparent blur-[130px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at 50% 45%, rgba(139, 92, 246, 0.09) 0%, transparent 75%)'
        }}
      />

      {/* Center Blurred Overlay Shape (provides contrast for readability of hero copy) */}
      <div 
        className="absolute bg-gray-950 opacity-90 rounded-full pointer-events-none"
        style={{
          width: '984px',
          height: '527px',
          filter: 'blur(82px)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
        }}
      />

      {/* Bottom fade — seamless transition to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '25%',
          background: 'linear-gradient(to bottom, transparent 0%, var(--color-abyssal-blue) 100%)',
          zIndex: 5,
        }}
      />
    </div>
  );
}

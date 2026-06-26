import { Navbar }       from '@/components/layout/navbar';
import { HeroSection }  from '@/components/landing/hero';
import { MarqueeSection } from '@/components/landing/marquee';
import { AboutSection } from '@/components/landing/about';
import { MakeDifferenceSection }  from '@/components/landing/why/MakeDifferenceSection';
import { ServicesSection } from '@/components/landing/services';
import { MethodologySection } from '@/components/landing/methodology';
import { ProjectsSection } from '@/components/landing/projects';
import { StatsSection } from '@/components/landing/stats';
import { Footer } from '@/components/layout/footer';
import { ExperienceSection } from '@/components/landing/experience';
import { ClientsSection } from '@/components/landing/clients';
import { DynamicServicesPhysicsCloud as ServicesPhysicsCloud } from '@/components/wrappers/DynamicServicesPhysicsCloud';
import { DynamicContactSection as ContactSection } from '@/components/wrappers/DynamicContactSection';

interface GitHubRepoItem {
  name: string;
  type: string;
  download_url: string;
  [key: string]: unknown; // Allow other properties from GitHub API securely
}

export default async function Home() {
  let logos: string[] = [];
  try {
    const res = await fetch('https://api.github.com/repos/Indra-Agency/images-web/contents/LOGO', { 
      next: { revalidate: 3600 } // Cache for 1 hour to avoid rate limits while staying fresh
    });
    if (res.ok) {
      const data = await res.json();
      logos = data
        .filter((item: GitHubRepoItem) => item.type === 'file' && item.name.match(/\.(png|jpe?g|svg)$/i))
        .map((item: GitHubRepoItem) => item.download_url);
    }
  } catch (e) {
    console.error('Error fetching logos from GitHub:', e);
  }

  // Fallback if the repo is empty, rate limit was hit, or network failed
  if (!logos || logos.length === 0) {
    logos = [
      'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
      'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
      'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
      'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
    ];
  }

  return (
    <main className="min-h-screen" style={{ background: '#0A0A0A' }}>
      <Navbar />
      <HeroSection logos={logos} />
      <MarqueeSection />
      <AboutSection />
      <MakeDifferenceSection />
      <ServicesPhysicsCloud />
      <ServicesSection />
      <MethodologySection />
      <ProjectsSection />
      <StatsSection />
      <ExperienceSection />
      <ClientsSection logos={logos} />
      <ContactSection />
      <Footer />
    </main>
  );
}
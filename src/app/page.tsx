import dynamic from 'next/dynamic';
import { Navbar } from '@/components/layout/navbar';
import { HeroSection } from '@/components/landing/hero';
import { MarqueeSection } from '@/components/landing/marquee';

// Code-split below-the-fold sections for instant First Contentful Paint & zero TBT
const AboutSection = dynamic(() => import('@/components/landing/about').then(m => m.AboutSection));
const MakeDifferenceSection = dynamic(() => import('@/components/landing/why/MakeDifferenceSection').then(m => m.MakeDifferenceSection));
const ServicesPhysicsCloud = dynamic(() => import('@/components/wrappers/DynamicServicesPhysicsCloud').then(m => m.DynamicServicesPhysicsCloud));
const ServicesSection = dynamic(() => import('@/components/landing/services').then(m => m.ServicesSection));
const MethodologySection = dynamic(() => import('@/components/landing/methodology').then(m => m.MethodologySection));
const DiagramFlowSection = dynamic(() => import('@/components/landing/diagram-flow').then(m => m.DiagramFlowSection));
const ProjectsSection = dynamic(() => import('@/components/landing/projects').then(m => m.ProjectsSection));
const StatsSection = dynamic(() => import('@/components/landing/stats').then(m => m.StatsSection));
const ExperienceSection = dynamic(() => import('@/components/landing/experience').then(m => m.ExperienceSection));
const ClientsSection = dynamic(() => import('@/components/landing/clients').then(m => m.ClientsSection));
const ContactSection = dynamic(() => import('@/components/wrappers/DynamicContactSection').then(m => m.DynamicContactSection));
const Footer = dynamic(() => import('@/components/layout/footer').then(m => m.Footer));

const LOCAL_LOGOS = [
  "/images/logos/logo-11.webp",
  "/images/logos/logo-12.webp",
  "/images/logos/logo-13.webp",
  "/images/logos/logo-14.webp",
  "/images/logos/logo-15.webp",
  "/images/logos/logo-16.webp",
  "/images/logos/logo-17.webp",
  "/images/logos/logo-18.webp",
  "/images/logos/logo-19.webp",
  "/images/logos/logo-20.webp",
  "/images/logos/logo-21.webp",
  "/images/logos/logo-22.webp",
  "/images/logos/logo-23.webp",
  "/images/logos/logo-24.webp",
  "/images/logos/logo-25.webp",
];

export default async function Home() {
  const logos = LOCAL_LOGOS;

  return (
    <main className="min-h-screen" style={{ background: 'var(--color-abyssal-blue)' }}>
      <Navbar />
      <HeroSection logos={logos} />
      <MarqueeSection />
      <AboutSection />
      <MakeDifferenceSection />
      <ServicesPhysicsCloud />
      <ServicesSection />
      <MethodologySection />
      <DiagramFlowSection />
      <ProjectsSection />
      <StatsSection />
      <ExperienceSection />
      <ClientsSection logos={logos} />
      <ContactSection />
      <Footer />
    </main>
  );
}
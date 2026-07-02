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

const LOCAL_LOGOS = [
  "/images/logos/11.png",
  "/images/logos/12.png",
  "/images/logos/13.png",
  "/images/logos/14.png",
  "/images/logos/15.png",
  "/images/logos/16.png",
  "/images/logos/17.png",
  "/images/logos/18.png",
  "/images/logos/19.png",
  "/images/logos/20.png",
  "/images/logos/21.png",
  "/images/logos/22.png",
  "/images/logos/23.png",
  "/images/logos/24.png",
  "/images/logos/25.png"
];

export default async function Home() {
  const logos = LOCAL_LOGOS;

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
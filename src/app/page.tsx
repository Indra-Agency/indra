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

const REMOTE_LOGOS = [
  "https://raw.githubusercontent.com/Indra-Agency/images-web/main/LOGO/11.png",
  "https://raw.githubusercontent.com/Indra-Agency/images-web/main/LOGO/12.png",
  "https://raw.githubusercontent.com/Indra-Agency/images-web/main/LOGO/13.png",
  "https://raw.githubusercontent.com/Indra-Agency/images-web/main/LOGO/14.png",
  "https://raw.githubusercontent.com/Indra-Agency/images-web/main/LOGO/15.png",
  "https://raw.githubusercontent.com/Indra-Agency/images-web/main/LOGO/16.png",
  "https://raw.githubusercontent.com/Indra-Agency/images-web/main/LOGO/17.png",
  "https://raw.githubusercontent.com/Indra-Agency/images-web/main/LOGO/18.png",
  "https://raw.githubusercontent.com/Indra-Agency/images-web/main/LOGO/19.png",
  "https://raw.githubusercontent.com/Indra-Agency/images-web/main/LOGO/20.png",
  "https://raw.githubusercontent.com/Indra-Agency/images-web/main/LOGO/21.png",
  "https://raw.githubusercontent.com/Indra-Agency/images-web/main/LOGO/22.png",
  "https://raw.githubusercontent.com/Indra-Agency/images-web/main/LOGO/23.png",
  "https://raw.githubusercontent.com/Indra-Agency/images-web/main/LOGO/24.png",
  "https://raw.githubusercontent.com/Indra-Agency/images-web/main/LOGO/25.png"
];

export default async function Home() {
  const logos = REMOTE_LOGOS;

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
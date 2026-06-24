import { Navbar }       from '@/components/landing/navbar';
import { HeroSection }  from '@/components/landing/hero';
import { MarqueeSection } from '@/components/landing/marquee';
import { AboutSection } from '@/components/landing/about';
import { MakeDifferenceSection }  from '@/components/landing/why/MakeDifferenceSection';
import { ServicesPhysicsCloud }   from '@/components/landing/why/ServicesPhysicsCloud';
import { ServicesSection } from '@/components/landing/services';
import { MethodologySection } from '@/components/landing/methodology';
import { ProjectsSection } from '@/components/landing/projects';
import { StatsSection } from '@/components/landing/stats';
import { ContactSection } from '@/components/landing/contact';
import { Footer } from '@/components/landing/footer';
import { ExperienceSection } from '@/components/landing/experience';
import { ClientsSection } from '@/components/landing/clients';

export default async function Home() {
  let logos: string[] = [];
  try {
    const res = await fetch('https://api.github.com/repos/Indra-Agency/images-web/contents/LOGO', { 
      next: { revalidate: 3600 } // Cache for 1 hour to avoid rate limits while staying fresh
    });
    if (res.ok) {
      const data = await res.json();
      logos = data
        .filter((item: any) => item.type === 'file' && item.name.match(/\.(png|jpe?g|svg)$/i))
        .map((item: any) => item.download_url);
    }
  } catch (e) {
    console.error('Error fetching logos from GitHub:', e);
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
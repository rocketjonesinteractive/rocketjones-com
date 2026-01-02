import { Hero } from '@/components/ui/organisms/Hero/Hero';
import { About } from '@/components/ui/organisms/About/About';
import { Testimonials } from '@/components/ui/organisms/Testimonials/Testimonials.tsx';
import { Process } from '@/components/ui/organisms/Process/Process';
import { Stats } from '@/components/ui/organisms/Stats/Stats';
import { Technology } from '@/components/ui/organisms/Technology/Technology';
import { Contact } from '@/components/ui/organisms/Contact/Contact';
import { Footer } from '@/components/ui/organisms/Footer/Footer';
import { ScrollToTop } from '@/components/ui/molecules/ScrollToTop/ScrollToTop';
import { VideoOverlay } from '@/components/ui/organisms/VideoOverlay/VideoOverlay';
import { Promise } from '@/components/ui/organisms/Promise/Promise';
import { Blog } from '@/components/ui/organisms/Blog/Blog';
import { FreeConsultation } from '@/components/ui/organisms/FreeConsultation/FreeConsultation.tsx';
import { GuideCta } from '@/components/ui/organisms/GuideCta/GuideCta.tsx';

export default function Home() {
  return (
    <main id={'top'}>
      <Hero />
      <About />
      <Testimonials />
      <Process />
      <Promise />
      <Technology />
      <GuideCta />
      <Stats />
      <FreeConsultation />
      <Blog />
      <Contact />
      <Footer />
      <ScrollToTop />
      <VideoOverlay />
    </main>
  );
}

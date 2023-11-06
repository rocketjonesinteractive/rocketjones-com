import projectEntries from '@/data/ProjectData.ts';
import { slugify } from '@/utils/string.ts';
import { notFound } from 'next/navigation';
import User from '@/../public/img/icons/user.svg';
import Calendar from '@/../public/img/icons/calendar.svg';
import Archive from '@/../public/img/icons/archive.svg';
import { Footer } from '@/components/ui/organisms/Footer/Footer.tsx';
import { ScrollToTop } from '@/components/ui/molecules/ScrollToTop/ScrollToTop.tsx';
import { BgOverlay } from '@/components/ui/atoms/BgOverlay/BgOverlay.tsx';
import { Contact } from '@/components/ui/organisms/Contact/Contact.tsx';
import Image from 'next/image';
import Spotlight from '@/components/ui/organisms/Spotlight/Spotlight.tsx';
import { Button } from '@/components/ui/atoms/Button/Button.tsx';
import { SectionHeading } from '@/components/ui/molecules/SectionHeading/SectionHeading.tsx';
import { addDelay, animationVariants } from '@/utils/animations.ts';
import { scrollToElementId } from '@/utils/scroll.ts';
import { AnimateOnScrollDiv } from '@/components/ui/molecules/AnimateOnScrollDiv/AnimateOnScroll.tsx';
import Quote from '../../../../public/img/icons/quote.svg';
import Link from 'next/link';
import { Promise } from '@/components/ui/organisms/Promise/Promise.tsx';
import { ProjectHeader } from '@/components/ui/organisms/Header/ProjectHeader.tsx';

export default function Page({ params }: { params: { slug: string } }) {
  const data = projectEntries.find((x) => slugify(x.key) === params.slug);

  const otherProjects = projectEntries.filter(
    (x) => x.hasTestimonial && slugify(x.key) !== params.slug,
  );

  if (!data) return notFound();

  return (
    <>
      <ProjectHeader data={data} />
      <div id="top" className={'project-template mt-[var(--header-height)]'}>
        <div className={'relative grid grid-cols-6 overflow-hidden'}>
          <div
            className={
              'invert-selection col-span-6 flex min-h-[300px] items-center justify-center px-12 font-heading text-white md:col-span-3 lg:col-span-2 ' +
              data.bgGradient
            }
          >
            <Image
              src={data.logoUrl}
              alt={`${data.company} Logo`}
              width={data.logoWidth * 1.3}
              height={data.logoHeight * 1.3}
              style={{ width: data.logoWidth * 1.3, height: data.logoHeight * 1.3 }}
            />
          </div>
          <div
            className={`relative col-span-6 flex min-h-[300px] flex-col items-start justify-center bg-gradient-to-bl from-zinc-700 via-zinc-900 to-black bg-cover bg-center bg-no-repeat p-12 py-16 pb-12 sm:p-16 sm:pb-12 md:col-span-3 md:pb-16 lg:col-span-4 lg:p-24 lg:pb-24`}
          >
            <div className="text-md font-heading font-light uppercase text-red first-letter:ml-[-2px] sm:text-xl">
              Case Study
            </div>
            <div className="mr-12 mt-4 font-heading text-3xl font-bold text-white [text-wrap:balance] first-letter:ml-[-2px] sm:mr-12 sm:text-4xl lg:text-5xl">
              {data.title}
            </div>
            <div className="text-md mr-12 mt-4 font-light [text-wrap:balance] first-letter:ml-[-2px] sm:mr-12 sm:text-lg lg:text-xl">
              {data.title2}
            </div>
            <Button variant={'secondary'} className={'z-10 mt-8'}>
              Download Whitepaper
            </Button>
          </div>
        </div>
        <div className={'m-0 py-8'}>
          <div className="container mx-auto my-16 w-3/4 max-w-[700px] lg:w-1/2">
            <SectionHeading
              caption={'Case Study'}
              title={
                <>
                  Executive <span className={'font-semibold'}>Summary</span>
                </>
              }
            />
            <div className={'text-lg'}>{data.executiveSummary}</div>
          </div>
        </div>
        <div className={'relative grid grid-cols-6 overflow-hidden'}>
          <div
            className={`relative col-span-6 flex min-h-[250px] items-center justify-center bg-zinc-800 bg-cover bg-center bg-no-repeat sm:min-h-[350px] md:col-span-3 md:min-h-[500px] lg:col-span-2 bg-project${data.key}1`}
          >
            <Spotlight />
            <BgOverlay opacity={40} />
          </div>
          <div
            className={`relative col-span-6 flex min-h-[250px] items-center justify-center bg-zinc-800 bg-cover bg-center bg-no-repeat sm:min-h-[350px] md:col-span-3 md:min-h-[500px] lg:col-span-2 bg-project${data.key}2`}
          >
            <Spotlight />
            <BgOverlay opacity={40} />
          </div>
          <div
            className={`relative col-span-6 flex min-h-[250px] items-center justify-center bg-zinc-800 bg-cover bg-center bg-no-repeat sm:min-h-[350px] md:col-span-6 md:min-h-[500px] lg:col-span-2 bg-project${data.key}3`}
          >
            <Spotlight />
            <BgOverlay opacity={40} />
          </div>
          <div className="innerborder border-8-white absolute left-[20px] top-[20px] z-10 h-[calc(100%-40px)] w-[calc(100%-40px)] border-8 opacity-30"></div>
        </div>
        <div
          className="container mx-auto my-24 w-3/4 max-w-[700px] lg:w-1/2"
          dangerouslySetInnerHTML={{
            __html: data.body,
          }}
        />
        <div className={'col-span-6 p-12 uppercase md:col-span-6 lg:col-span-2 ' + data.bgGradient}>
          <AnimateOnScrollDiv
            variants={animationVariants.fadeIn}
            className={'mx-auto my-4 max-w-[700px] lg:my-16 lg:w-1/2'}
          >
            <Quote className={'mb-2 text-red'} />
            <div
              className={
                'font-heading text-xl font-medium leading-tight text-white md:text-2xl lg:text-3xl'
              }
            >
              {data.testimonialQuote}
            </div>
            <div className={'ml-[60px]'}>
              <div
                className={
                  'relative mt-4 font-heading font-bold leading-none ' +
                  "before:absolute before:left-[-35px] before:top-1/2 before:h-[2px] before:w-[20px] before:bg-red before:content-['']"
                }
              >
                <span className={'text-white opacity-60'}>{data.testimonialAuthorName}</span>
              </div>
              <div className={'font-heading text-sm font-medium text-white opacity-60'}>
                {data.testimonialAuthorTitle}, {data.company}
              </div>
            </div>
          </AnimateOnScrollDiv>
        </div>
        <div className={'container mx-auto my-24 w-3/4 max-w-[700px] lg:w-1/2 '}>
          <SectionHeading
            caption={'Case Study'}
            title={
              <>
                <span className={'font-semibold'}>Conclusion</span>
              </>
            }
          />
          <div className={'text-lg'}>{data.conclusion}</div>
          <AnimateOnScrollDiv
            variants={animationVariants.fadeInUp}
            className={'mt-8 w-full md:mt-24'}
          >
            <div className="flex flex-col items-center justify-center gap-4 border-2 border-tanDarker bg-tan p-4 sm:p-8 md:gap-8 lg:flex-row">
              <h3 className={'text-center font-heading text-3xl text-tanDarkest'}>
                Download the <span className={'font-black'}>Whitepaper</span>
              </h3>
              <Button variant={'tan'}>Download</Button>
            </div>
          </AnimateOnScrollDiv>
        </div>
        <Promise numColumns={2} />
        <div className="container mx-auto my-24 w-3/4 max-w-[700px] lg:w-1/2">
          <SectionHeading
            caption={'View More'}
            title={
              <>
                Case <span className={'font-semibold'}>Studies</span>
              </>
            }
          />
          <div className="mx-4 mt-0 grid grid-cols-1 gap-0 md:mx-8 md:mt-8 md:grid-cols-2 md:gap-4">
            {otherProjects.map((p) => (
              <ProjectLogo
                key={p.key}
                slug={p.key}
                title={p.company}
                src={p.logoUrl}
                width={p.logoWidth}
                height={p.logoHeight}
              />
            ))}
          </div>
        </div>
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}

const ProjectLogo = ({
  slug,
  title,
  src,
  animDelay,
  width,
  height,
}: {
  slug: string;
  title: string;
  src: string;
  width: number;
  height: number;
  animDelay?: number;
}) => {
  return (
    <Link
      href={`/projects/${slugify(slug)}`}
      className={'boxed group my-0 flex items-center justify-center'}
    >
      <AnimateOnScrollDiv variants={addDelay(animationVariants.platformLogo, animDelay ?? 0)}>
        <Image
          src={src}
          alt={title}
          width={width}
          height={height}
          className={
            'text-black opacity-50 brightness-0 saturate-0 transition-all group-hover:opacity-100 group-hover:saturate-100'
          }
        />
      </AnimateOnScrollDiv>
    </Link>
  );
};

export async function generateStaticParams() {
  return projectEntries.map((blog) => ({
    slug: slugify(blog.key),
  }));
}

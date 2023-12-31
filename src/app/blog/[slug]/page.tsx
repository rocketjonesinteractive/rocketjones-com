import blogEntries from '../../../data/BlogData.ts';
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
export default function Page({ params }: { params: { slug: string } }) {
  const data = blogEntries.find((x) => slugify(x.title) === params.slug);

  if (!data) return notFound();

  return (
    <div id="top" className={'blog-template mt-[var(--header-height)]'}>
      <div className={'invert-selection bg-red font-heading text-white'}>
        <div className="container relative flex flex-col justify-between overflow-hidden px-4 sm:flex-row sm:px-0">
          <div className={'relative z-[2] ml-8 w-auto py-20 sm:ml-12 sm:w-1/2'}>
            <div className="text-xl font-light text-black first-letter:ml-[-2px] sm:text-3xl">
              <span className={'font-black uppercase'}>Rocket</span> Blog
            </div>
            <div className="my-4 w-[60px] border-b-2 border-b-black"></div>
            <div className="relative mr-4 mt-4 text-3xl font-black [text-wrap:balance] first-letter:ml-[-2px] sm:text-5xl">
              {data.title}
            </div>
            <div className="mr-8 mt-4 text-lg [text-wrap:balance] first-letter:ml-[-2px] sm:mr-4 sm:text-xl">
              {data.caption}
            </div>
          </div>
          <div
            className="relative hidden h-auto w-full bg-cover bg-center bg-no-repeat sm:block sm:w-1/2"
            style={{ backgroundImage: `url('/img/blog/${data.image}')` }}
          >
            <BgOverlay opacity={40} />
          </div>
          <div className="innerborder border-8-white absolute left-[20px] top-[20px] z-[1] h-[calc(100%-40px)] w-[calc(100%-40px)] border-8 opacity-30 sm:left-0 sm:w-[calc(100%-20px)]"></div>
        </div>
      </div>
      <div className="bg-white px-4 py-4 drop-shadow-xl">
        <div className="container">
          <div className="flex flex-col items-center justify-center gap-2 text-sm sm:flex-row sm:gap-8">
            <div className="flex">
              <User className={'mr-2 text-black'} />
              {data.author}
            </div>
            <div className="flex">
              <Calendar className={'mr-2 text-black'} />
              {data.date.toLocaleDateString('en-us', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </div>
            <div className="flex">
              <Archive className={'mr-2 text-black'} />
              {data.categories.join(', ')}
            </div>
          </div>
        </div>
      </div>
      <div
        className="container mx-auto my-16 w-3/4 max-w-[700px] lg:w-1/2"
        dangerouslySetInnerHTML={{
          __html: data.body,
        }}
      />
      <div
        className={
          'container mx-auto my-16 w-3/4 max-w-[700px] border-2 border-zinc-200 p-8 text-lg lg:w-1/2'
        }
      >
        <div className="flex">
          <Image
            src={'/img/icons/rocket-colored.svg'}
            width={100}
            height={100}
            alt={'Rocket Jones'}
            className={'mr-8 hidden sm:block'}
          />
          <div>
            Custom web applications and mobile apps are more than just a piece of software. They are
            tools that can accelerate your business and help your team go to the next level. If you
            want to learn more or ask a few questions, we’d love to chat about what could work for
            you. Give us a call at (970) 482-5790.
          </div>
        </div>
      </div>
      {/* TODO: add persistent blog signoff/footer with cta to contact*/}
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export async function generateStaticParams() {
  return blogEntries.map((blog) => ({
    slug: slugify(blog.title),
  }));
}

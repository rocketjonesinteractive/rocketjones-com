import blogEntries from '../../../components/ui/organisms/Blog/BlogData.ts';
import { slugify } from '@/utils/string.ts';
import { notFound } from 'next/navigation';
import User from '@/../public/img/icons/user.svg';
import Calendar from '@/../public/img/icons/calendar.svg';
import Archive from '@/../public/img/icons/archive.svg';
import { Footer } from '@/components/ui/organisms/Footer/Footer.tsx';
import { ScrollToTop } from '@/components/ui/molecules/ScrollToTop/ScrollToTop.tsx';
import { BgOverlay } from '@/components/ui/atoms/BgOverlay/BgOverlay.tsx';
import { Contact } from '@/components/ui/organisms/Contact/Contact.tsx';

export default function Page({ params }: { params: { slug: string } }) {
  const blogEntry = blogEntries.find((x) => slugify(x.title) === params.slug);

  if (!blogEntry) return notFound();

  return (
    <div id="top" className={'blog-template mt-[var(--header-height)]'}>
      <div className={'invert-selection bg-red font-heading text-white'}>
        <div className="container relative flex justify-between">
          <div className={'ml-8 w-1/2 py-12'}>
            <div className="text-3xl font-light text-black first-letter:ml-[-2px]">Rocket Blog</div>
            <div className="my-4 w-[60px] border-b-2 border-b-black"></div>
            <div className="mt-4 text-5xl font-black uppercase [text-wrap:balance] first-letter:ml-[-2px]">
              {blogEntry.title}
            </div>
          </div>

          <div
            className="relative h-auto w-1/2 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('/img/blog/${blogEntry.image}')` }}
          >
            <BgOverlay opacity={40} />
          </div>

          <div className="innerborder border-8-white absolute left-[0px] top-[20px] z-[10] h-[calc(100%-40px)] w-[calc(100%-20px)] border-8 opacity-30"></div>
        </div>
      </div>
      <div className="bg-white py-4 drop-shadow-xl">
        <div className="container">
          <div className="flex items-center justify-center gap-8 text-sm">
            <div className="flex">
              <User className={'mr-2 text-black'} />
              {blogEntry.author}
            </div>
            <div className="flex">
              <Calendar className={'mr-2 text-black'} />
              {blogEntry.date.toLocaleDateString('en-us', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </div>
            <div className="flex">
              <Archive className={'mr-2 text-black'} />
              {blogEntry.categories.join(', ')}
            </div>
          </div>
        </div>
      </div>
      <div
        className="container mx-auto my-16 w-3/4 lg:w-1/2"
        dangerouslySetInnerHTML={{
          __html: blogEntry.body,
        }}
      />
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

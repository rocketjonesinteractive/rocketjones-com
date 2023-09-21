import { SectionHeading } from '@/components/ui/molecules/SectionHeading/SectionHeading';
import { Section } from '../../atoms/Section/Section';
import blogEntries, { BlogEntry } from './BlogData.ts';
import Spotlight from '@/components/ui/organisms/Spotlight/Spotlight.tsx';
import { BgOverlay } from '@/components/ui/atoms/BgOverlay/BgOverlay.tsx';
import { Button } from '@/components/ui/atoms/Button/Button.tsx';

export const Blog = () => {
  return (
    <Section id={'blog'} className={'px-4'}>
      <SectionHeading
        caption={'Rocket Blog'}
        title={
          <>
            Latest <strong>Articles</strong>
          </>
        }
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {blogEntries
          .filter((x) => x.id < 6)
          .map((data, i) => (
            <BlogEntry key={data.id} data={data} index={i} />
          ))}
      </div>
    </Section>
  );
};

const BlogEntry = ({ data, index }: { data: BlogEntry; index: number }) => {
  if (index === 0)
    return (
      <div
        className={`boxed-thickwhite group relative col-span-1 cursor-pointer bg-greyLight text-white md:col-span-2`}
      >
        <div
          className={`relative h-full bg-cover bg-center p-12`}
          style={{ backgroundImage: `url('/img/blog/${data.image}')` }}
        >
          <div className={'relative z-[2]'}>
            <h3
              className={
                'w-full font-heading text-[36px] font-black leading-tight [text-wrap:balance] md:w-1/2'
              }
            >
              {data.title}
            </h3>
            <div className="my-4 w-[60px] border-b-2 border-b-red"></div>
            <div className={'w-full [text-wrap:balance] md:w-1/2'}>{data.caption}</div>
            <Button variant={'quaternary'} className={'mt-8'}>
              Read More
            </Button>
          </div>
          <Spotlight />
          <div className={'opacity-50 transition-opacity group-hover:opacity-30'}>
            <BgOverlay opacity={100} />
          </div>
        </div>
      </div>
    );
  else
    return (
      <div
        className={
          `boxed-thickwhite group relative cursor-pointer text-white ` +
          `bg-gradient-to-br from-zinc-700 via-zinc-900 to-black`
        }
      >
        <div>
          <img src={`/img/blog/${data.image}`} />
        </div>
        <div className="relative z-[2] p-12 pt-10">
          <h3
            className={
              'mb-2 font-heading text-[20px] font-black leading-tight text-red [text-wrap:balance] group-hover:text-white'
            }
          >
            {data.title}
          </h3>
          <div className="my-4 w-[60px] border-b-2 border-b-red"></div>
          <div>{data.caption}</div>
        </div>
        <Spotlight />
        <div className={'opacity-50 transition-opacity group-hover:opacity-30'}>
          <BgOverlay opacity={100} />
        </div>
      </div>
    );
};

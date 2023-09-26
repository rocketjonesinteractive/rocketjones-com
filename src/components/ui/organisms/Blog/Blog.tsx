import { SectionHeading } from '@/components/ui/molecules/SectionHeading/SectionHeading';
import { Section } from '../../atoms/Section/Section';
import blogEntries from './BlogData.ts';
import { BlogTile } from './BlogTile.tsx';

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
            <BlogTile key={data.id} data={data} index={i} animDelay={i * 0.1} />
          ))}
      </div>
    </Section>
  );
};

'use client';

import { SectionHeading } from '@/components/ui/molecules/SectionHeading/SectionHeading';
import { Section } from '../../atoms/Section/Section';
import blogEntries from '../../../../data/BlogData.ts';
import { BlogTile } from './BlogTile.tsx';
import { Button } from '@/components/ui/atoms/Button/Button.tsx';
import { useState } from 'react';

export const Blog = () => {
  const items = blogEntries.sort((a, b) => b.date.getTime() - a.date.getTime());

  const [itemLimit, setItemLimit] = useState(5);

  const itemsPerPage = 6;

  const handleViewMore = () => {
    setItemLimit(itemLimit + itemsPerPage);
  };

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
        {items.slice(0, itemLimit).map((data, i) => (
          <BlogTile key={data.id} data={data} index={i} animDelay={i * 0.1} />
        ))}
      </div>
      {itemLimit < items.length && (
        <div className={'mt-16'}>
          <Button variant={'tertiary'} onClick={handleViewMore}>
            View More
          </Button>
        </div>
      )}
    </Section>
  );
};

'use client';

import { BgOverlay } from '@/components/ui/atoms/BgOverlay/BgOverlay.tsx';
import User from '../../../../public/img/icons/user.svg';
import Calendar from '../../../../public/img/icons/calendar.svg';
import Archive from '../../../../public/img/icons/archive.svg';
import { Footer } from '@/components/ui/organisms/Footer/Footer.tsx';
import { ScrollToTop } from '@/components/ui/molecules/ScrollToTop/ScrollToTop.tsx';
import { Button } from '@/components/ui/atoms/Button/Button.tsx';
import { TextInput } from '@/components/ui/atoms/TextInput/TextInput.tsx';
import { FormEvent, useState } from 'react';
import Image from 'next/image';

function DownloadForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submitting form', { name, email });
  };

  return (
    <form
      name="guideForm"
      method="post"
      onSubmit={handleSubmit}
      className={'mx-0 flex animate-fadeIn flex-col gap-4 bg-tan p-4 lg:mx-8 lg:p-12 xl:mx-16'}
    >
      <h4 className={'text-center font-bold uppercase'}>Download Our Free Guide</h4>
      <TextInput
        name={'name'}
        placeholder={'Your Name'}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextInput
        name={'email'}
        placeholder={'Your Email'}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button
        onClick={() => {
          window.location = '/files/rocketjones-guide-cracking-the-tech-stack-code.pdf';
        }}
      >
        Get My Problem-Solving Guide
      </Button>
    </form>
  );
}

export default function Page() {
  return (
    <div id="top" className={'guide-template mt-[var(--header-height)]'}>
      <div className={'invert-selection bg-red font-heading text-white'}>
        <div className="container relative flex flex-col justify-between overflow-hidden px-4 sm:flex-row sm:px-0">
          <div className={'relative z-[2] ml-8 w-auto py-20 sm:ml-12 sm:w-1/2'}>
            <div className="text-xl font-light text-black first-letter:ml-[-2px] sm:text-3xl">
              <span className={'font-black uppercase'}>Rocket</span> Guide
            </div>
            <div className="my-4 w-[60px] border-b-2 border-b-black"></div>
            <div className="relative mr-4 mt-4 text-3xl font-black [text-wrap:balance] first-letter:ml-[-2px] sm:text-5xl">
              Solve Your Tech Stack Dilemmas with Rocket Jones
            </div>
            <div className="mr-8 mt-4 text-lg [text-wrap:balance] first-letter:ml-[-2px] sm:mr-4 sm:text-xl">
              For over 20 years, we've been solving complex technology challenges for businesses
              like yours. Now, we're offering our problem-solving expertise to you.
            </div>
          </div>
          <div
            className="relative hidden h-auto w-full bg-cover bg-center bg-no-repeat sm:block sm:w-1/2"
            style={{ backgroundImage: `url('/img/guides/cracking-the-tech-stack-code-bg.jpg')` }}
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
              Rocket Jones
            </div>
            <div className="flex">
              <Calendar className={'mr-2 text-black'} />
              {new Date().toLocaleDateString('en-us', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </div>
            <div className="flex">
              <Archive className={'mr-2 text-black'} />
              {['Business Management'].join(', ')}
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-16 w-3/4 max-w-[800px] lg:w-1/2">
        <h2>Unlock Solutions to Your Tech Stack Challenges</h2>
        <p className={'text-center'}>
          Download our free guide: "5 Challenges When Selecting a Tech Stack, And Solutions for
          Each"
        </p>
        <div className="my-12 flex justify-center">
          <DownloadForm />
        </div>
        <div className="align-center my-12 flex justify-center">
          <div className={'flex flex-col'}>
            <p style={{ margin: 0, padding: 0 }}>What's inside:</p>
            <ol>
              <li>Balancing current needs with future scalability</li>
              <li>Addressing skill gaps in your development team</li>
              <li>Evaluating trendy technologies objectively</li>
              <li>Seamless integration with legacy systems</li>
              <li>Ensuring performance under high-load conditions</li>
            </ol>
          </div>
        </div>
        <p className={'text-center font-bold [text-wrap:balance]'}>
          At Rocket Jones, we don't just build software – we solve business problems with
          technology. Let us help you solve yours.
        </p>
      </div>
      <div
        className={
          'container mx-auto my-16 w-3/4 max-w-[800px] border-2 border-zinc-200 p-8 text-lg lg:w-1/2'
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
      <Footer />
      <ScrollToTop />
    </div>
  );
}
/* eslint-disable react/no-unescaped-entities */
'use client';

import { Footer } from '@/components/ui/organisms/Footer/Footer.tsx';
import { ScrollToTop } from '@/components/ui/molecules/ScrollToTop/ScrollToTop.tsx';
import { Button } from '@/components/ui/atoms/Button/Button.tsx';
import { TextInput } from '@/components/ui/atoms/TextInput/TextInput.tsx';
import { BgOverlay } from '@/components/ui/atoms/BgOverlay/BgOverlay.tsx';
import React, { FormEvent, forwardRef, useLayoutEffect, useRef, useState } from 'react';
import Image from 'next/image';

type FormData = {
  name: string;
  email: string;
};

type FormErrors = {
  name: string;
  email: string;
};

const defaultFormData = { name: '', email: '' };

// eslint-disable-next-line react/display-name
const DownloadForm = forwardRef<HTMLFormElement>((props, ref) => {
  const [formData, setFormData] = useState<FormData>(defaultFormData);
  const [fieldErrors, setFieldErrors] = useState<FormErrors>(defaultFormData);
  const [formError, setFormError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alreadySubscribed, setAlreadySubscribed] = useState(false);

  useLayoutEffect(() => {
    setAlreadySubscribed(localStorage.getItem('alreadySubscribed') === 'true');
  }, []);

  const resetForm = () => {
    Object.keys(defaultFormData).forEach((key) => {
      setFieldErrors((prev) => ({ ...prev, [key]: '' }));
    });
    setFormError('');
    setSubmitSuccess(false);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    resetForm();

    if (!alreadySubscribed) {
      let hasErrors = false;

      if (!formData.name) {
        setFieldErrors((prev) => ({ ...prev, name: 'Name is required.' }));
        hasErrors = true;
      }

      if (!formData.email) {
        setFieldErrors((prev) => ({ ...prev, email: 'Email is required.' }));
        hasErrors = true;
      }

      if (!validateEmail(formData.email)) {
        setFieldErrors((prev) => ({ ...prev, email: 'Invalid email address.' }));
        hasErrors = true;
      }

      if (hasErrors) return;

      setIsSubmitting(true);

      const formDataWithSourceAndPage = { ...formData, source: 'drive-software-success', page: 'drive-software-success' };

      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataWithSourceAndPage),
      });

      setIsSubmitting(false);

      if (!response.ok) {
        const { error } = await response.json();
        setFormError(error);
        return;
      }

      localStorage.setItem('alreadySubscribed', 'true');

      setSubmitSuccess(true);
    }

    window.location.href = '/files/rocketjones-article-CEOs-drive-success.pdf';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
    setFieldErrors((prev) => {
      return { ...prev, [e.target.name]: '' };
    });
  };

  const backToForm = () => {
    setAlreadySubscribed(false);
    resetForm();
    localStorage.setItem('alreadySubscribed', 'false');
  };

  return (
    <form
      name="guideForm"
      method="post"
      onSubmit={handleSubmit}
      ref={ref}
      className={'mx-0 flex flex-col gap-4 bg-tan p-4 lg:mx-8 lg:p-12 xl:mx-16'}
    >
      <h4 className={'text-center font-bold uppercase'}>Download Our Free Guide</h4>
      {!alreadySubscribed && (
        <>
          <p className={'!mt-[-10px] text-center !text-sm'}>
            By submitting this form, I agree to receive future communications and updates from
            Rocket Jones.
          </p>
          <TextInput
            name={'name'}
            placeholder={'Your Name'}
            value={formData.name}
            onChange={handleChange}
            error={fieldErrors.name}
          />
          <TextInput
            name={'email'}
            placeholder={'Your Email'}
            value={formData.email}
            onChange={handleChange}
            error={fieldErrors.email}
          />
          <Button type={'submit'} disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Get My Problem-Solving Guide'}
          </Button>
          {formError && <div className={'max-w-xs text-center text-red'}>{formError}</div>}
          {submitSuccess && (
            <div className={'text-success max-w-xs text-center'}>
              Success! Redirecting to download...
            </div>
          )}
        </>
      )}
      {alreadySubscribed && (
        <>
          <div className={'text-success text-center'}>You are already subscribed, thank you!</div>
          <Button variant="tertiary" onClick={backToForm}>
            Back to Form
          </Button>
          <Button type={'submit'}>Get My Problem-Solving Guide</Button>
        </>
      )}
    </form>
  );
});

export default function Page() {
  const formRef = useRef<HTMLFormElement>(null);

  const scrollToTopAndFlash = () => {
    window.scrollTo({ top: 0 });
    if (formRef.current) {
      formRef.current.classList.add('flash');
      setTimeout(() => {
        formRef.current?.classList.remove('flash');
      }, 800); // Duration of the flash animation
    }
  };

  return (
    <div id="top" className={'guide-template mt-[var(--header-height)]'}>
      <div className={'invert-selection bg-red font-heading text-white'}>
        <div className="container relative flex flex-col justify-between overflow-hidden px-4 md:flex-row md:px-0">
          <div className={'relative z-[2] ml-8 w-auto py-20 pb-10 md:ml-12 md:w-1/2 md:pb-20'}>
            <div className="text-xl font-light text-black first-letter:ml-[-2px] sm:text-3xl">
              <span className={'font-black uppercase'}>Rocket</span> Article
            </div>
            <div className="my-4 w-[60px] border-b-2 border-b-black"></div>
            <div className="relative mr-4 mt-4 text-3xl font-black [text-wrap:balance] first-letter:ml-[-2px] sm:text-5xl">
            Unlock Your Business Potential with Rocket Jones
            </div>
            <div className="mr-8 mt-4 text-lg [text-wrap:balance] first-letter:ml-[-2px] sm:mr-4 sm:text-xl">
            At Rocket Jones, we specialize in building software solutions that drive efficiency, scalability, and growth. For over two decades, we've helped businesses like yours navigate complex technology decisions with ease. Our team of experts is dedicated to crafting solutions that align perfectly with your business goals—whether you need a custom software application, a streamlined mobile experience, or a fully integrated enterprise system.
            </div>
          </div>
          <div
            className="relative hidden h-auto w-full bg-cover bg-center bg-no-repeat sm:block sm:w-1/2"
            style={{ backgroundImage: `url('/img/article/rocketjones-article-CEOs-drive-success.jpeg')` }}
          >
            <BgOverlay opacity={40} />
          </div>
          <div className="innerborder border-8-white absolute left-[20px] top-[20px] z-[1] h-[calc(100%-40px)] w-[calc(100%-40px)] border-8 opacity-30 sm:left-0 sm:w-[calc(100%-20px)]"></div>
        </div>
      </div>
      <div className="container mx-auto my-16 w-3/4 max-w-[900px] lg:w-3/4">
        <h2>Technology Decisions Simplified: The CEO's Roadmap</h2>
        <p className={'text-center'}>
        A straightforward guide that helps non-technical leaders make informed technology investments with confidence and clarity.
        </p>
        <div className="align-center my-12 flex justify-center">
          <div className={'flex flex-col'}>
            <p style={{ margin: 0, padding: 0 }}>What You'll Gain:</p>
            <ul>
              <li>Discover common pitfalls that lead to budget overruns, poor-quality software, and long-term technical debt.</li>
              <li>Identify the best approach for your company based on resources, scalability, and strategic goals.</li>
              <li>Weigh the benefits and risks of in-house teams, freelancers, and professional development partners.</li>
              <li>Gain the knowledge you need to assess technical partners, ensure quality, and align software with business goals.</li>
            </ul>
          </div>
        </div>
        
        <div className="my-12">
          <h2>Why CEOs Need This Guide</h2>
          <p>
          In today's business environment, technology decisions directly impact your bottom line, competitive advantage, and growth trajectory. Yet for many CEOs without technical backgrounds, these decisions can feel like navigating in the dark. Our guide bridges this gap, giving you the insights to lead with confidence.
          </p>
        </div>
        

        
        <p className={'text-center font-bold [text-wrap:balance]'}>
          At Rocket Jones, we don't just build software – we solve business problems with
          technology. Let us help you solve yours.
        </p>
        <div className={'mt-8 flex justify-center'}>
          <DownloadForm ref={formRef} />
        </div>
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
            want to learn more or ask a few questions, we'd love to chat about what could work for
            you. Give us a call at (970) 482-5790.
          </div>
        </div>
      </div>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
} 
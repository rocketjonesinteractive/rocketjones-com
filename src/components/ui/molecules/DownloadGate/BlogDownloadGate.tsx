'use client';

import React, { FormEvent, useEffect, useState } from 'react';
import { TextInput } from '@/components/ui/atoms/TextInput/TextInput.tsx';
import { Button } from '@/components/ui/atoms/Button/Button.tsx';

type FormData = {
  name: string;
  email: string;
};

const defaultFormData: FormData = { name: '', email: '' };

export function BlogDownloadGate() {
  const [isOpen, setIsOpen] = useState(false);
  const [targetHref, setTargetHref] = useState('');
  const [formData, setFormData] = useState<FormData>(defaultFormData);
  const [fieldErrors, setFieldErrors] = useState<{ name: string; email: string }>(defaultFormData);
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alreadySubscribed, setAlreadySubscribed] = useState(false);

  useEffect(() => {
    setAlreadySubscribed(localStorage.getItem('alreadySubscribed') === 'true');

    const handleClick = (e: MouseEvent) => {
      const path = e.composedPath ? e.composedPath() : [];
      const maybeAnchor = (path.find((n) => (n as HTMLElement)?.tagName === 'A') || e.target) as HTMLElement;
      const anchor = (maybeAnchor && (maybeAnchor.closest ? maybeAnchor.closest('a.btn-download') : null)) as HTMLAnchorElement | null;
      if (!anchor) return;

      if (localStorage.getItem('alreadySubscribed') === 'true') {
        return; // allow direct download
      }

      e.preventDefault();
      const href = anchor.getAttribute('href') || '';
      setTargetHref(href);
      setIsOpen(true);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isFormValid = () => {
    return formData.name.trim() !== '' && validateEmail(formData.email);
  };

  const resetForm = () => {
    setFieldErrors(defaultFormData);
    setFormError('');
  };

  const close = () => {
    setIsOpen(false);
    setTargetHref('');
    setFormData(defaultFormData);
    resetForm();
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    resetForm();

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
    const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, source: 'blog-download', page: 'blog' }),
    });
    setIsSubmitting(false);

    if (!response.ok) {
      const { error } = await response.json();
      setFormError(error || 'Something went wrong.');
      return;
    }

    localStorage.setItem('alreadySubscribed', 'true');
    if (targetHref) {
      window.location.href = targetHref;
    }
    close();
  };

  if (!isOpen) return null;

  return (
    <div className={'fixed left-0 top-0 z-[1000] flex h-full w-full items-center justify-center bg-black/50 p-4'}>
      <div className={'w-full max-w-md rounded bg-white p-6 shadow-xl'}>
        <div className={'mb-4 text-center font-heading text-xl font-bold'}>Get the PDF</div>
        {!alreadySubscribed && (
          <form onSubmit={handleSubmit} className={'flex flex-col gap-4'}>
            <p className={'!mt-[-4px] text-center !text-sm'}>
              By submitting this form, I agree to receive future communications and updates from Rocket Jones.
            </p>
            <TextInput
              name={'name'}
              placeholder={'Your Name'}
              value={formData.name}
              onChange={(e) => setFormData((prev) => ({ ...prev, name: (e.target as HTMLInputElement).value }))}
              error={fieldErrors.name}
            />
            <TextInput
              name={'email'}
              placeholder={'Your Email'}
              value={formData.email}
              onChange={(e) => setFormData((prev) => ({ ...prev, email: (e.target as HTMLInputElement).value }))}
              error={fieldErrors.email}
            />
            {formError && <div className={'text-center text-red'}>{formError}</div>}
            <div className={'mt-2 flex gap-3'}>
              <Button type={'submit'} disabled={isSubmitting || !isFormValid()}>
                {isSubmitting ? 'Submitting...' : 'Get the Download'}
              </Button>
              <Button variant="tertiary" onClick={close}>
                Cancel
              </Button>
            </div>
          </form>
        )}
        {alreadySubscribed && (
          <div className={'flex flex-col items-center gap-4'}>
            <div className={'text-success text-center'}>You are already subscribed, thank you!</div>
            <div className={'flex gap-3'}>
              <Button onClick={() => (window.location.href = targetHref)}>Download Now</Button>
              <Button variant="tertiary" onClick={close}>
                Close
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}



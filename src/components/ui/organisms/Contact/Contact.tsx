'use client';

import { BgOverlay } from '@/components/ui/atoms/BgOverlay/BgOverlay';
import { SectionHeading } from '@/components/ui/molecules/SectionHeading/SectionHeading';
import MarkerPin from '@/../public/img/icons/marker-pin.svg';
import Mail from '@/../public/img/icons/mail.svg';
import PhoneCall from '@/../public/img/icons/phone-call.svg';
import { ComponentType, ReactNode, useState } from 'react';
import { animationVariants } from '@/utils/animations';
import { AnimateOnScrollDiv } from '@/components/ui/molecules/AnimateOnScrollDiv/AnimateOnScroll';
import { TextInput } from '../../atoms/TextInput/TextInput';
import { TextArea } from '@/components/ui/atoms/TextArea/TextArea';
import { Button } from '@/components/ui/atoms/Button/Button';
import { Loading } from '@/components/ui/atoms/Loading/Loading';
import { fetchWithTimeout } from '@/utils/fetch';

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export const Contact = () => {
  return (
    <div className={'grid overflow-hidden md:grid-cols-2'}>
      <ContactDetails />
      <ContactForm />
    </div>
  );
};

export const ContactDetails = () => {
  return (
    <div className={'relative bg-map px-8 py-16 lg:px-16'}>
      <div className={'relative z-10'}>
        <SectionHeading
          caption={'Location'}
          title={
            <span className={'text-white'}>
              Contact <span className={'font-semibold'}>Details</span>
            </span>
          }
        />
        <AnimateOnScrollDiv variants={animationVariants.contactMethod}>
          <ContactMethod
            ContactIcon={MarkerPin}
            name={'Address'}
            value={
              <>
                Rocket Jones Interactive
                <br />
                PO Box 2091
                <br />
                Fort Collins, CO 80522
              </>
            }
          />
          <ContactMethod
            ContactIcon={Mail}
            name={'General Inquiries'}
            value={<>info@rocketjones.com</>}
            secondaryName={'Technical Support'}
            secondaryValue={<>support@rocketjones.com</>}
          />
          <ContactMethod
            ContactIcon={PhoneCall}
            name={'Office'}
            value={<>(970) 482-5790</>}
            secondaryName={'Emergency Support'}
            secondaryValue={<>(970) 305-5151</>}
            bottomBorder={false}
          />
        </AnimateOnScrollDiv>
      </div>
      <BgOverlay opacity={80} />
    </div>
  );
};

export const ContactForm = () => {
  const initialValues = {
    name: '',
    email: '',
    message: '',
  };
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialValues);
  const [showSubmitSuccess, setShowSubmitSuccess] = useState(false);
  const [showSubmitError, setShowSubmitError] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: any) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: '',
    });
  };

  const handleError = (error: any) => {
    setSubmitError(error);
    setShowSubmitError(true);
    setSubmitting(false);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const myForm = e.target;
    const formData: any = new FormData(myForm);

    if (Object.keys(validate()).length === 0) {
      setSubmitting(true);

      fetchWithTimeout('/favicon.ico', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      })
        .then(() => {
          setShowSubmitSuccess(true);
          setSubmitting(false);
          if (typeof window !== 'undefined' && window.dataLayer) {
            window.dataLayer.push({
              event: 'form_submission',
              form_name: 'contact_form'
            });
          }
        })
        .catch((error) => {
          if (error.name === 'AbortError') handleError('Request timed out. Please try again.');
          else if (error.message) handleError(error.message);
          else handleError(error);
        });
    }
  };

  const validate = () => {
    let errors: any = {};

    if (!values.name) {
      errors.name = 'Please enter your name.';
    }

    if (!values.email) {
      errors.email = 'Please enter an email address.';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'That email address is invalid.';
    }

    if (!values.message) {
      errors.message = 'Please enter a message.';
    }

    setErrors(errors);
    return errors;
  };

  const handleBackToForm = (clearForm = false) => {
    if (clearForm) {
      setValues(initialValues);
      setErrors(initialValues);
    }
    setShowSubmitError(false);
    setShowSubmitSuccess(false);
  };

  return (
    <div
      className={'px-8 py-16 lg:px-16 ' + 'bg-gradient-to-r from-gray-100 to-gray-300'}
      id={'contact'}
    >
      <SectionHeading
        caption={'Free Consultation'}
        title={
          <>
            Get <span className={'font-semibold'}>Started</span>
          </>
        }
      />
      <AnimateOnScrollDiv variants={animationVariants.contactFormInput}>
        <>
          {showSubmitSuccess && (
            <div className={'flex animate-fadeIn flex-col items-center justify-center'}>
              <div className={'font-heading text-xl font-bold uppercase text-black'}>Thank You</div>
              <p className={'text-center text-sm [text-wrap:balance]'}>
                Your message has been sent successfully.
              </p>
              <Button
                variant={'tertiary'}
                className={'mt-8'}
                onClick={() => handleBackToForm(true)}
              >
                Back to Form
              </Button>
            </div>
          )}
          {showSubmitError && (
            <div className={'flex flex-col items-center justify-center'}>
              <div className={'font-heading text-xl font-bold uppercase text-black'}>Error</div>
              <p className={'text-center text-sm [text-wrap:balance]'}>
                There was an error sending your message:
              </p>
              <p className={'mt-6 text-center text-sm text-red [text-wrap:balance]'}>
                {submitError}
              </p>
              <Button
                variant={'tertiary'}
                className={'mt-8'}
                onClick={() => handleBackToForm(false)}
              >
                Back to Form
              </Button>
            </div>
          )}
          {!showSubmitSuccess && !showSubmitError && (
            <form
              data-netlify="true"
              name="contactForm"
              method="post"
              onSubmit={handleSubmit}
              className={'mx-0 flex animate-fadeIn flex-col gap-4 lg:mx-8 xl:mx-16'}
            >
              <input type="hidden" name="form-name" value="contactForm" />
              <TextInput
                name={'name'}
                placeholder={'Your Name:'}
                value={values.name}
                error={errors.name}
                onChange={handleChange}
              />
              <TextInput
                name={'email'}
                placeholder={'Email:'}
                value={values.email}
                error={errors.email}
                onChange={handleChange}
              />
              <TextArea
                name={'message'}
                placeholder={'Message:'}
                value={values.message}
                error={errors.message}
                onChange={handleChange}
              />
              <div className={'mt-8 flex justify-center'}>
                <Button
                  variant={'tertiary'}
                  type={'submit'}
                  disabled={submitting}
                  className={'max-h-[42px]'}
                >
                  {!submitting && 'Send Message'}
                  {submitting && (
                    <div className={'flex items-center'}>
                      Sending <Loading />
                    </div>
                  )}
                </Button>
              </div>
            </form>
          )}
        </>
      </AnimateOnScrollDiv>
    </div>
  );
};

const ContactMethod = ({
  ContactIcon,
  name,
  value,
  secondaryName,
  secondaryValue,
  bottomBorder = true,
}: {
  ContactIcon: ComponentType<any>;
  name: string;
  value: ReactNode;
  secondaryName?: string;
  secondaryValue?: ReactNode;
  bottomBorder?: boolean;
}) => {
  return (
    <div
      className={`mt-8 flex items-start pb-0 ${
        bottomBorder ? 'border-b border-b-white/20 !pb-8' : ''
      }`}
    >
      <ContactIcon className={'text-white'} />
      <div className={'grid w-full grid-cols-1 lg:grid-cols-2'}>
        <div className={'ml-4 mt-1'}>
          <div className={'font-heading text-sm font-bold leading-relaxed text-white'}>{name}:</div>
          <div className="text-sm leading-relaxed">{value}</div>
        </div>
        {secondaryName && secondaryValue && (
          <div className={'ml-4 mt-1'}>
            <div className={'font-heading text-sm font-bold leading-relaxed text-white'}>
              {secondaryName}:
            </div>
            <div className="text-sm leading-relaxed">{secondaryValue}</div>
          </div>
        )}
      </div>
    </div>
  );
};

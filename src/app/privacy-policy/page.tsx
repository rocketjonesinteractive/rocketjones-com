/* eslint-disable react/no-unescaped-entities */
'use client';

import { Footer } from '@/components/ui/organisms/Footer/Footer.tsx';
import { ScrollToTop } from '@/components/ui/molecules/ScrollToTop/ScrollToTop.tsx';
import React from 'react';

export default function Page() {
  return (
    <div id="top" className={'legal-template mt-[var(--header-height)]'}>
      <div className={'invert-selection bg-red font-heading text-white'}>
        <div className="container relative flex flex-col justify-between overflow-hidden px-4 md:flex-row md:px-0">
          <div
            className={
              'relative z-[2] ml-8 w-auto w-full py-20 pb-10 text-center md:ml-12 md:pb-20'
            }
          >
            <div className="text-xl font-light text-black first-letter:ml-[-2px] sm:text-3xl">
              <span className={'font-black uppercase'}>Rocket</span>JONES
            </div>
            <div className="mx-auto my-4 w-[60px] border-b-2 border-b-black"></div>
            <div className="relative mr-4 mt-4 text-3xl font-black [text-wrap:balance] first-letter:ml-[-2px] sm:text-5xl">
              Privacy Policy
            </div>
          </div>
          <div className="innerborder border-8-white absolute left-[20px] top-[20px] z-[1] h-[calc(100%-40px)] w-[calc(100%-40px)] border-8 opacity-30 sm:left-[0px] sm:w-[calc(100%)]"></div>
        </div>
      </div>
      <div className="container mx-auto my-16 w-3/4 max-w-[900px] lg:w-3/4">
        <p>
          This is the privacy policy (“Privacy Policy”) for all websites owned and operated by
          Rocket Jones Interactive, LLC (“Rocket Jones”, “we” or “our”) including rocketjones.com
          (collectively, the “Service”). We respect your privacy and appreciate the confidence you
          have placed in the Service. We are committed to protecting your privacy and preserving
          your trust. Please carefully review this Privacy Policy to learn about how we collect,
          use, and protect any personal information you provide us and your choices for managing
          your personal information.
        </p>
        <p className={'font-bold'}>
          We want to communicate with you only if you want to hear from us. If you have questions or
          concerns regarding this Privacy Policy or wish to exclude your personal information from
          our direct marketing purposes, please feel free to contact us at:
        </p>
        <a href="mailto:info@rocketjones.com" className={'block text-2xl'}>
          info@rocketjones.com
        </a>
        <p>
          If you would like to update or delete your email address, mailing address or other
          personal information with us, please contact us the same way.
        </p>
        <h2>Information We Collect</h2>
        <p>
          We collect information from our users at several different points on the Service. For
          example, we may collect personally identifiable information from you such as your name,
          address, phone number, and email address when you register, subscribe to one of our
          services, enter sweepstakes, contests or other promotions offered by or through the
          Service, and at other times. In addition, we automatically collect non-personal
          information such as your browser type, operating system, IP address, and Service usage
          information, in order to, among other things, evaluate and improve the performance of the
          Service.
        </p>

        <p>
          We will not sell, share, or rent personal information to third parties, and we will not
          otherwise disclose personally identifiable information to third parties, without your
          explicit permission, except as disclosed in this Privacy Policy.
        </p>
        <h2>Why We Collect Your Information</h2>

        <p>We collect and use information for internal purposes, such as:</p>

        <ul>
          <li>enhancing your experience at the Service;</li>
          <li>performing administration and technical support for the Service;</li>
          <li>creating aggregate information about demographics and usage patterns;</li>
        </ul>
        <h2>When We Share Your Information</h2>

        <p>
          We may use aggregate information to measure general Service usage patterns and
          characteristics of our user base, and we may include such aggregate information about our
          audience in reports to our commercial vendors. We may also disclose aggregated user
          statistics (for example, a certain percentage of our users live in a certain area) without
          your permission in order to describe our audience to existing and prospective clients or
          other third parties. However, this aggregate information does not reference names, phone
          numbers, email addresses, or other personally identifiable information, and it is not
          traceable to a specific recipient or user email address.
        </p>

        <p>
          We also may share personal information with companies affiliated with Rocket Jones. In the
          event that Rocket Jones is merged, or in the event of a transfer of our assets, we may
          disclose or transfer your personal information in connection with such transaction. In the
          event of such a transfer, we will notify you of the change of control of your personal
          information. You should also be aware that courts of equity, such as U.S. Bankruptcy
          Courts, may have the authority under certain circumstances to permit your personal
          information to be shared or transferred to third parties without your permission.
        </p>

        <p>
          From time to time, we might establish a business relationship with other persons or
          entities whom we believe trustworthy and whom we have asked to confirm that their privacy
          practices are consistent with ours. For example, we may contract with service providers to
          provide certain services including credit card processing, data management, promotional
          services, etc. We provide our service providers with the information needed for them to
          perform these services. Each service provider must agree to implement and maintain
          reasonable security procedures and practices appropriate to the nature of your information
          in order to protect your personal information from unauthorized access, destruction, use,
          modification or disclosure.
        </p>

        <p>
          Although unlikely, in certain instances we may disclose your personal information when we
          have reason to believe that it is necessary to identify, contact or bring legal action
          against persons or entities who may be causing injury to you, to Rocket Jones or its
          affiliates, or to others. We may also disclose your personal information when we believe
          the law requires it.
        </p>

        <p>
          The decision to provide this information is optional; however, if you elect not to
          register or provide such information, you may not be able to access certain content or
          features or participate in various areas of the Service.
        </p>

        <h2>Security</h2>
        <p>
          We use encryption and authentication tools when appropriate to protect the security of
          personal information that you share with us. However, no data transmission over the
          Internet can be guaranteed to be 100% secure. As a result, while we strive to protect
          personal information, we cannot and do not guarantee or warrant the security of any
          information you transmit to or from the Service, and you do so at your own risk.
        </p>

        <p>
          We may place a text file called a “cookie” in the browser files of your computer or use
          other technology to improve your navigation of the Service. A cookie is a small amount of
          data that is sent to your Web browser from a Web server and stored on your computer’s hard
          drive. Generally, we use cookies to remind us of who you are, tailor our products and
          services to suit your personal interests, estimate our audience size, track your status in
          our sweepstakes, contests, and promotions and/or analyze your visiting patterns. The use
          of cookies is an industry standard; you will find them at most major Web sites. Cookies
          make Web-surfing easier for you by saving your preferences while you are using the
          Service. For this reason, we may save passwords, credit card or other personal information
          in cookies. You can generally set your Web browser not to accept cookies or to notify you
          when you are sent a cookie, giving you the chance to decide whether or not to accept it.
          If you set your Web browser not to accept cookies, it may affect your ability to utilize
          all features on the Service.
        </p>

        <p>
          The Service may contain links to websites operated and maintained by third parties, over
          which we have no control. Privacy policies on such linked websites may be different from
          our Privacy Policy. You access such linked websites at your own risk. You should always
          read the privacy policy of a linked website before disclosing any personal information on
          such site.
        </p>

        <h2>Children’s Privacy</h2>

        <p>
          We do not knowingly collect personally identifiable information from children under the
          age of 13. If we become aware that we have inadvertently received personally identifiable
          information from a user under the age of 13, we will delete such information from our
          records. Because we do not knowingly collect any personally identifiable information from
          children under the age of 13, we also do not knowingly distribute such information to
          third parties.
        </p>

        <p>
          If we decide to change our Privacy Policy, in whole or in part, we will inform you by
          posting the changed Privacy Policy here. Those changes will go into effect on the date
          posted in the notice. The new policy will apply to all current and past users of the
          Service and will replace any prior policies that are inconsistent.
        </p>

        <h2>Personalized Advertising and Opting-Out</h2>

        <p>
          Your online privacy is important, so we offer the following options for controlling the
          targeted ads you receive. Opting-out of this type of advertising through the below methods
          will not prevent you from seeing general web ads, however those ads will be less relevant
          because they will not be tailored to your interests.
        </p>

        <p>
          Web browser: You can opt-out of receiving personalized ads sent by us by clicking on the
          blue icon that typically appears in the corner of the ads you see and following the
          instructions provided or by clicking here.
        </p>

        <p>
          Please note that opting-out is browser-specific and relies on an “opt-out cookie”, if you
          delete your cookies after having opted out, you will need to opt-out again using the link
          above.
        </p>

        <p>
          <b>Cross Device Opt-Out:</b> In some cases we may link multiple browsers or devices to
          you. If you opt-out on a browser or device and we have more linked to you, your opt-out
          decision will be extended to your other linked browsers. There could be some cases where
          you are still being tracked in a different browser or device we have not linked, and where
          you are being treated as a different user.
        </p>

        <p>
          <b>Opt-out for mobile devices:</b> To opt-out of receiving targeted ads that are based on
          your behavior across different mobile applications follow the below instructions, for iOS
          and Android devices:
        </p>

        <p>
          <b>iOS 7 or Higher:</b> Go to your Settings &gt; Select Privacy &gt; Select Advertising
          &gt; Enable the “Limit Ad Tracking” setting.
        </p>

        <p>
          <b>
            For Android devices with OS 2.2 or higher and Google Play Services version 4.0 or
            higher:
          </b>{' '}
          Open your Google Settings app &gt; Select Ads &gt; Enable “Opt out of interest-based
          advertising”.
        </p>

        <p>
          You can also request that we stop email marketing to you. You can use the unsubscribe link
          in our marketing emails or contact{' '}
          <a href={'mailto:info@rocketjones.com'}>info@rocketjones.com</a>.
        </p>
      </div>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

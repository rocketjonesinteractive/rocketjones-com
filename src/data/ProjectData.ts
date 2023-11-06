export interface ProjectEntry {
  id: number;
  key: string;
  company: string;
  title: string;
  title2: string;
  caption: string;
  testimonialAuthorName: string;
  testimonialAuthorTitle: string;
  testimonialQuote: string;
  testimonialQuoteFontSize: number;
  logoUrl: string;
  logoWidth: number;
  logoHeight: number;
  body: string;
  executiveSummary: string;
  conclusion: string;
  bgGradient: string;
  hasTestimonial: boolean;
}

const data: ProjectEntry[] = [
  {
    id: 1,
    key: 'Prosci',
    company: 'Prosci',
    title: 'Empowering Change Management Excellence',
    title2: 'A Decade of Partnership between Prosci and Rocket Jones',
    caption:
      'Prosci needed a way to consolidate vast amounts of data and manage access and membership payments.',
    testimonialAuthorName: 'Tim Creasey',
    testimonialAuthorTitle: 'Chief Development Officer',
    testimonialQuote:
      'Of all their great qualities, collaboration is probably the top one for Rocket Jones. They know how to juggle business needs, user experience, and our vision. Plus, they are incredibly adept at understanding the impact of one on the other.',
    testimonialQuoteFontSize: 21,
    logoUrl: '/img/client-logos/prosci.svg',
    logoWidth: 197,
    logoHeight: 57,
    bgGradient: 'bg-gradient-to-tr from-blue-700 to-[#312f82]',
    body: ` \
      <h2>Introduction</h2> \
      <p>Prosci stands as a beacon of excellence in the realm of change management. Their impressive client portfolio speaks volumes about their expertise: Edward Jones, Microsoft, Unilever, to name a few. Prosci’s mission is to provide guidance for organizations navigating the turbulent waters of change. They quickly became a recognized expert, but over time their business systems and platforms struggled to keep up with their growth. Needing a major technology solution, they sought a strategic ally and found one in Rocket Jones.</p> \
      <h2>The Original Problem</h2> \
      <p>A decade ago, Prosci faced two major challenges:</p> \
      <ol> \
      <li><strong>Document Disarray:</strong> Prosci primarily relied on traditional tools like Word documents and Excel spreadsheets to convey their insights and procedures to clients. While effective in conveying knowledge, these methods lacked a centralized management system, leading to myriad problems, including inability to track which revision of a document a customer possessed, lack of control over changes to document content, and inconsistent updates. Poised for growth as the leading expert in the field of change management, the Prosci team knew they needed the processes in place commensurate with their expertise to build credibility with clients.</li> \
      <li><strong>Need for a Hub:</strong> Prosci realized the necessity for a professional, centralized platform, a single landing place that would facilitate client access to the tools and documents that they needed.</li> \
      </ol> \
      <h2>The Original Solution</h2> \
      <p>Recognizing the gravity of these challenges, Prosci turned to Rocket Jones for assistance creating a digital portal that addressed these issues head-on. Rocket Jones built an array of tools that streamlined document management, provided real-time updates, and increased the overall level of professionalism in their interaction and management of clients.</p> \
      <h2>RJ and Prosci's Changing Business Needs</h2> \
      <p>Over the past decade, Rocket Jones has been a strategic partner deeply integrated into Prosci's operations. Here are some highlights of this journey:</p> \
      <ol> \
      <li><strong>Internal Development Team:</strong> Rocket Jones became Prosci's contract development team through a software support agreement.</li> \
      <li><strong>Adaptability:</strong> Rocket Jones demonstrated remarkable adaptability as Prosci's methodologies and models evolved. This involved reworking tools and phasing out tools as they reached the end of their lifecycle.</li> \
      <li><strong>Integration:</strong> Prosci's expanding toolkit included third-party support tools, and Rocket Jones worked alongside Prosci’s other vendors to help seamlessly integrate SalesForce and Auth0 in their existing system.</li> \
      <li><strong>Cross-functional Collaboration:</strong> As Prosci expanded its teams and competencies, Rocket Jones evolved in tandem, collaborating across departments and working closely with their internal product teams and other vendors.</li> \
      <li><strong>Real-time Communication:</strong> Collaboration tools like Asana enabled real-time communication between Rocket Jones and Prosci, fostering efficient teamwork.</li> \
      <li><strong>Sustainable Growth:</strong> Today, Prosci still relies on the portal and Rocket Jones's support, with the tool evolving in-step with their business.</li> \
      <li><strong>Internal Development Team Launch:</strong> Prosci is now poised to establish its own internal development team, a testament to their growth and maturity.</li> \
      <li><strong>Celebrating Success:</strong> Rocket Jones recognizes that there may come a day when clients like Prosci no longer require their services. This would mark the ultimate success of the partnership, indicating that they facilitated their client's growth and self-sufficiency.</li> \
      </ol> \
    `,
    executiveSummary: `In today's dynamic business landscape, the old adage holds true: change is the only constant. Companies must adapt swiftly to thrive, and wise business leaders turn to experts for guidance. Enter Prosci, a vanguard in change management research, training programs, and tools, boasting a client roster that includes 80% of Fortune 100 companies. Prosci was founded in 1994, and they embarked on a transformative journey with Rocket Jones in 2013. This case study unveils the remarkable evolution of this partnership, chronicling how Rocket Jones helped Prosci surmount their original challenges and continue to flourish.`,
    conclusion: `The journey of Prosci and Rocket Jones over the past decade is a testament to the power of strategic partnerships in navigating change. What began as a solution to document management challenges evolved into a deep-rooted collaboration, adapting to changing methodologies, integrating new tools, and fostering sustainable growth. Prosci's impending launch of an internal development team is not a farewell but a celebration of success—a success story where Rocket Jones played a pivotal role in enabling Prosci to mature and scale. This partnership is an example of how organizations can thrive in the ever-evolving landscape of change management. Together, they continue to empower organizations worldwide to lead their employees through increasing market and industry change, making the business world a better-prepared place for the future.`,
    hasTestimonial: true,
  },
  {
    id: 2,
    key: 'Metolius',
    company: 'Metolius Golf',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    title2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    caption:
      'Learn how our custom web application portal brought business intelligence to the next level.',
    testimonialAuthorName: 'Ross Liggett',
    testimonialAuthorTitle: 'Founder and Managing Partner',
    testimonialQuote:
      'Rocket Jones makes custom web development easy. In Rocket Jones, we have a partner who has invested in understanding our technology and bringing it to life in a web application. As developers ourselves, we can attest to the quality of their work. The team is very responsive and invested in productive outcomes.',
    testimonialQuoteFontSize: 18,
    logoUrl: '/img/client-logos/metolius.svg',
    logoWidth: 252,
    logoHeight: 23,
    bgGradient: 'bg-gradient-to-tr from-green-500 to-green-700',
    body: ` \
      <h2>Introduction</h2> \
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> \
      <h2>Problem</h2> \
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> \
      <h2>Solution</h2> \
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> \
    `,
    executiveSummary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    conclusion:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    hasTestimonial: true,
  },
  {
    id: 3,
    key: 'Experience',
    company: 'Experience Plus',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    title2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    caption:
      'Our automated web application system handles all bookings and provides the backbone for operations.',
    testimonialAuthorName: 'Seth Jansen',
    testimonialAuthorTitle: 'Founder and Managing Partner',
    testimonialQuote:
      'I don’t view Rocket Jones as a vendor; rather, I view them as a partner. During a recent project they proved excellent to work with. Rocket Jones has skilled technical resources, and I will continue to consult them for all my future needs. They offer great value for expert level service',
    testimonialQuoteFontSize: 19,
    logoUrl: '/img/client-logos/experience.svg',
    logoWidth: 229,
    logoHeight: 50,
    bgGradient: 'bg-gradient-to-tr from-[#fecf0a] to-[#d5ac00]',
    body: ` \
      <h2>Introduction</h2> \
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> \
      <h2>Problem</h2> \
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> \
      <h2>Solution</h2> \
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> \
    `,
    executiveSummary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    conclusion:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    hasTestimonial: true,
  },
];

export default data;

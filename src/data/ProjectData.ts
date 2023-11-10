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
  downloadUrl: string;
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
    downloadUrl: '/files/rocketjones-case-study-prosci.pdf',
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
    title: 'Streamlining Data Access and Onboarding for Metolius',
    title2: 'A Rocket Jones Success Story',
    caption:
      'Learn how our custom web application portal brought business intelligence to the next level.',
    testimonialAuthorName: 'Ross Liggett',
    testimonialAuthorTitle: 'Founder and Managing Partner',
    testimonialQuote:
      'Rocket Jones makes custom web development easy. In Rocket Jones, we have a partner who has invested in understanding our technology and bringing it to life in a web application. As developers ourselves, we can attest to the quality of their work. The team is very responsive and invested in productive outcomes.',
    testimonialQuoteFontSize: 18,
    downloadUrl: '/files/rocketjones-case-study-metolius.pdf',
    logoUrl: '/img/client-logos/metolius.svg',
    logoWidth: 252,
    logoHeight: 23,
    bgGradient: 'bg-gradient-to-tr from-green-500 to-green-700',
    body: ` \
      <h2>Introduction</h2> \
      <p>Metolius Golf is a leader in delivering real-time business intelligence and analytics to its clients in the golf industry. To achieve this, they aggregate data from various sources, including Google Analytics, Lightspeed POS, and Lightspeed Retail. However, they faced significant hurdles in securely collecting this data from clients and simplifying their complex onboarding process.</p> \
      <h2>The Original Problem</h2> \
      <p>Two years ago, Metolius identified two key challenges:</p> \
      <ol> \
      <li><strong>Secure Data Collection:</strong> They needed a secure method to collect sensitive data from clients, including authorization to access various data sources.</li> \
      <li><strong>Complex Onboarding:</strong> Streamlining the onboarding process for clients was essential. Reducing friction while ensuring data security was the top priority.</li> \
      </ol> \
      <h2>The Solution by Rocket Jones</h2> \
      <p>Metolius Golf turned to Rocket Jones for a solution. Rocket Jones recognized the need for a simplified process for both Metolius and its clients. Here's how the partnership evolved:</p> \      
      <ol> \
      <li><strong>Automated Authorization:</strong> Rocket Jones built a simple admin interface for Metolius admins, enabling them to auto-generate OAuth links for clients. This streamlined the authorization process.</li> \
      <li><strong>Data Integration:</strong> Over time, Metolius realized the potential to do more with client and user data. They moved away from using Google Sheets for data collection and integrated additional tools.</li> \
      <li><strong>Enhanced Client Access:</strong> Clients could now access reports, update budgets, and perform tasks more efficiently thanks to automated integrations for authentication and identity verification through Google.</li> \
      <li><strong>User Management:</strong> Rocket Jones expanded into user management, simplifying data access, increasing visibility into reports and tools for users, and enhancing onboarding.</li> \
      <li><strong>Improved Data Accuracy:</strong> The automation reduced reliance on the human factor, resulting in faster data analysis and increased data accuracy.</li> \      
      </ol> \
    `,
    executiveSummary:
      "In the dynamic world of the golf industry, timely access to business intelligence is essential for informed decision-making. Metolius Golf, a pioneering provider of real-time business intelligence, analytics services, and cloud marketing, specializes in serving golf courses and pro shops across the United States as they address increasingly competitive markets. Metolius Golf recognized the need to securely collect data from clients and streamline their onboarding process. Two years ago, they turned to Rocket Jones for a solution, setting in motion a journey that not only solved their immediate challenges but also expanded their capabilities. This case study chronicles the evolution of this partnership, highlighting the impact on Metolius Golf's operations, client satisfaction, and recognition in the industry.",
    conclusion:
      '<p>The partnership between Metolius and Rocket Jones is a testament to how technology can transform businesses. What began as a quest to simplify data collection and onboarding has evolved into a comprehensive solution that empowers Metolius to provide even greater value to its clients.</p>' +
      "<p>Metolius' commitment to innovation and Rocket Jones' expertise in automating complex processes have not only streamlined their operations but have also elevated their standing in the industry. Together, they have paved the way for businesses to access critical business intelligence seamlessly, enabling informed and timely decision-making in an ever-evolving market.</p>" +
      '<p>As Metolius continues to innovate and expand its offerings, they stand as an example of success in the world of real-time business intelligence and analytics, setting a standard for excellence that their competitors aspire to achieve.</p>',
    hasTestimonial: true,
  },
  {
    id: 3,
    key: 'Experience',
    company: 'Experience Plus',
    title: 'Transforming Experience Plus with Ongoing Development and Innovation',
    title2: 'Exploring the partnership between Experience Plus and Rocket Jones.',
    caption:
      'Our automated web application system handles all bookings and provides the backbone for operations.',
    testimonialAuthorName: 'Seth Jansen',
    testimonialAuthorTitle: 'Founder and Managing Partner',
    testimonialQuote:
      'I don’t view Rocket Jones as a vendor; rather, I view them as a partner. During a recent project they proved excellent to work with. Rocket Jones has skilled technical resources, and I will continue to consult them for all my future needs. They offer great value for expert level service',
    testimonialQuoteFontSize: 19,
    downloadUrl: '/files/rocketjones-case-study-experience.pdf',
    logoUrl: '/img/client-logos/experience.svg',
    logoWidth: 229,
    logoHeight: 50,
    bgGradient: 'bg-gradient-to-tr from-[#fecf0a] to-[#d5ac00]',
    body: ` \
      <h2>Introduction</h2> \
      <p>Experience Plus engaged Rocket Jones in early 2019 with a vision to revamp their existing bicycle tour management system. This platform was essential for their operations, which involved organizing and conducting bicycle tours throughout Europe and Latin America. Rocket Jones was sought as a long-term partner capable of maintaining and enhancing the project, aligning with Experience Plus’s growth plans.</p> \
      <h2>Initial Assessment and Code Review</h2> \
      <p>Rocket Jones commenced its partnership by conducting a comprehensive code review of Experience Plus’s existing application infrastructure. The review aimed to identify areas of improvement, including security concerns, minor feature enhancements, and bug fixes stemming from the initial development of the site. This initial step laid the foundation for the transformation that would follow.</p> \
      <h2>Maintaining Atlas: A Comprehensive Trip Logistics Tool</h2> \
      <p>A pivotal milestone in Experience Plus’s growth is the development of the Atlas tool. Atlas was designed by a third party to manage complex trip logistics, ensuring that every aspect of the bicycle tours that Experience Plus hosted would be meticulously planned and executed. It is the heart of their operation, covering a wide array of components, including client interest tracking, booking management, invoicing, hotel accommodations, and bicycle rental logistics. While Atlas was not developed by Rocket Jones, the Rocket team has supported the application by porting it over to the CakePHP 4 framework, and by providing ongoing maintenance and improvement to ensure it will continue as the central hub for managing all trip-related details and providing a seamless experience for both staff and clients.</p> \
      <h2>Challenges Amidst the Pandemic</h2> \
      <p>In 2020, the global COVID-19 pandemic heavily impacted the travel and tourism industry, causing Experience Plus’s business to slow down. However, Experience Plus and Rocket Jones remained committed to their partnership. As the company emerged from the pandemic's challenges, they took the opportunity to revisit their codebase. Rocket Jones successfully managed the migration from CakePHP 2 to CakePHP 4, ensuring that Experience Plus had an up-to-date and robust system for their operations.</p> \
      <h2>Building New Features and Enhancements</h2> \
      <p>Experience Plus didn't stop after launching their Atlas tool and completing code migrations; they also collaborated with Rocket Jones to develop new features and enhancements for the benefit of both their customers and their operations. Previously, the Experience Plus team invested significant effort in manually tracking crucial pre-trip client details, including passport information, travel insurance, waivers, and bike selections. They recognized that a robust client portal could manage those details centrally, and effectively eliminate the hours their team spent tracking this information down. The upside would be additional time proactively focusing on client care and customer service. Working with Rocket Jones, Experience Plus kicked off the creation of My Trip Portal, a tailored solution designed to simplify administrative interactions between Experience Plus and their clients. This digital platform empowers customers to fulfill essential pre-trip tasks, such as signing waivers and receiving information from Experience Plus, all in one user-friendly location.</p> \
      <h2>Integrating Klaviyo for Marketing</h2> \
      <p>Experience Plus identified the importance of direct marketing and reached out to Rocket Jones for assistance in integrating Klaviyo, a third-party email marketing platform, into the Atlas tool. With this integration, Experience Plus can effortlessly sync client contact information, ensuring a more personalized and effective marketing strategy.</p> \
    `,
    executiveSummary:
      'This case study explores the partnership between Experience Plus and Rocket Jones, which began in early 2019. Experience Plus sought a long-term collaboration to enhance their bicycle tour management platform, streamline operations, and prepare for growth. The document outlines the key milestones of this partnership, including comprehensive code reviews, updates to the code base, the creation of new products like the My Trip Portal, and the integration of third-party tools like Klaviyo. Through this collaboration, Experience Plus is set up to achieve a more efficient and robust system, improving both internal and external operations.',
    conclusion:
      "The collaboration between two dynamic companies like Experience Plus and Rocket Jones has proven to be a transformative partnership. Rocket Jones' technical expertise, ongoing maintenance, and development support have allowed Experience Plus to adapt to a rapidly changing environment, emerging from the challenges posed by the pandemic stronger than ever. Through the development of My Trip Portal, the maintenance and improvement of Atlas, and the integration of Klaviyo, Experience Plus will boast a more efficient and comprehensive system for managing their bicycle tours. This partnership underscores the significance of long-term collaboration in achieving lasting success and innovation within the travel and tourism industry.",
    hasTestimonial: true,
  },
];

export default data;

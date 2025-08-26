export interface BlogEntry {
  id: number;
  title: string;
  image: string;
  caption: string;
  author: string;
  categories: string[];
  date: Date;
  body: string;
}

const data: BlogEntry[] = [
  {
    id: 1,
    title: 'How to Give Your Team the Tools to Succeed',
    image: 'how-to-give-your-team-the-tools-to-succeed.jpg',
    caption: 'Accelerate your business and help your team go to the next level.',
    author: 'Rocket Jones',
    categories: ['Business Management'],
    date: new Date('2023-05-07'),
    body: ` \
      <p>Imagine you own a cabinet-making company. You hire excellent carpenters who are hard working and skilled. They work diligently every week to meet deadlines and satisfy customers with a great product. But over time, your competitors start to edge you out of the market. Business slows down even with your solid business model, great team, quality materials, and dedication to customer satisfaction.</p> \
      <p>Puzzling, right?</p> \
      <p>Now imagine that all your carpenters only have access to manual hand tools. No table saws, no routers, no power drills. Every tool they use is powered by their own strength.</p> \
      <aside class="pull-quote"><blockquote> \
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="37" fill="none" class="mb-2 text-red"><path fill="currentColor" d="M0 15.61c0-4.792 3.836-8.672 8.571-8.672h.572c1.264 0 2.286 1.033 2.286 2.312 0 1.28-1.022 2.313-2.286 2.313H8.57c-2.207 0-4 1.813-4 4.046v.579h4.572c2.521 0 4.571 2.074 4.571 4.625v4.625c0 2.55-2.05 4.625-4.571 4.625H4.57C2.05 30.063 0 27.988 0 25.438v-9.829Zm18.286 0c0-4.792 3.835-8.672 8.571-8.672h.572c1.264 0 2.285 1.033 2.285 2.312 0 1.28-1.021 2.313-2.285 2.313h-.572c-2.207 0-4 1.813-4 4.046v.579h4.572c2.521 0 4.571 2.074 4.571 4.625v4.625c0 2.55-2.05 4.625-4.571 4.625h-4.572c-2.521 0-4.571-2.075-4.571-4.625v-9.829Z"></path></svg> \
      If you are struggling to keep up with your competitors, it may be that your tools need to be updated. \
      </blockquote></aside> \
      <p>Obviously, that’s why your business is struggling to compete. Every other competitor is using power tools. It has nothing to do with your employees’ skill or your business practices. It’s all about the tools you use. Continuing to use outdated tools will cause your business to fall further and further behind because everyone else’s employees get the same results with less effort and time.</p> \
      <p>Even if you don’t own a cabinet-making company, the analogy still applies. If you are struggling to keep up with your competitors, it may be that your tools need to be updated. Providing your employees with better software tools allows them to get better results with less time and effort. Moving from an Excel sheet to custom software can be the equivalent of switching from a hand saw to a table saw. Both may eventually have the same result, but the effort and time required are vastly different. Better software tools have three main benefits.</p> \
      <h2>Efficiency</h2> \
      <p>The benefit of increased efficiency should be obvious. Automating simple tasks like data entry and collection, syncing data across multiple systems, or generating reports can save hours each day or week. Reducing the amount of time spent on non-strategic tasks frees your employees to spend more time on strategic tasks that improve your business. Even strategic tasks can be streamlined, allowing more work to be accomplished in less time.</p> \
      <h2>Quality</h2> \
      <p>Efficiency may be the star of the custom web application world, but quality is the ultimate goal. Quality of work can improve in several ways. The first is linked to efficiency; more time available for more important tasks is bound to improve quality. Second, custom web applications and mobile apps can solve problems with internal communication. Instead of passing around documents via email constantly, everything can be accessed from the same portal. This keeps every team member and department working with the most updated and accurate information. Quality improves as communication and unity improve.</p> \
      <h2>Time to Sharpen the Saw</h2> \
      <p>No, I’m not going back to the hand tools analogy. I mean here that employees will have time to improve their skills. Not only will they gain the ability to work with a new software system, but they will have more time and energy to spend on self-improvement. They can pursue further training and certification, add skills, and fill knowledge gaps. Your greatest asset is the people who work for you, so give them room to grow.</p> \
    `,
  },
  {
    id: 2,
    title: 'Offline Functionality: The New Mobile Trend',
    image: 'offline-functionality-the-new-mobile-trend.jpg',
    caption: 'The focus is now on making technology work without any connection at all.',
    author: 'Rocket Jones',
    categories: ['Mobile Apps'],
    date: new Date('2023-03-26'),
    body: ` \
      <p>The technology goal of the past few decades has been to connect in better ways, faster ways, and more ways every year. But now, we’re starting to wise-up in new ways: tech developers are starting to work on ways to be less connected. Although I’m sure Verizon would love to have a cell tower on every hilltop in the world, it’s simply not going to happen for a long time. So the focus is now on making technology work without any connection at all. This is called “offline functionality” and it’s becoming a big deal.</p>\
      <h2>What is Offline Functionality?</h2>\
      <aside class="pull-quote"><blockquote> \
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="37" fill="none" class="mb-2 text-red"><path fill="currentColor" d="M0 15.61c0-4.792 3.836-8.672 8.571-8.672h.572c1.264 0 2.286 1.033 2.286 2.312 0 1.28-1.022 2.313-2.286 2.313H8.57c-2.207 0-4 1.813-4 4.046v.579h4.572c2.521 0 4.571 2.074 4.571 4.625v4.625c0 2.55-2.05 4.625-4.571 4.625H4.57C2.05 30.063 0 27.988 0 25.438v-9.829Zm18.286 0c0-4.792 3.835-8.672 8.571-8.672h.572c1.264 0 2.285 1.033 2.285 2.312 0 1.28-1.021 2.313-2.285 2.313h-.572c-2.207 0-4 1.813-4 4.046v.579h4.572c2.521 0 4.571 2.074 4.571 4.625v4.625c0 2.55-2.05 4.625-4.571 4.625h-4.572c-2.521 0-4.571-2.075-4.571-4.625v-9.829Z"></path></svg> \
      When an app is built with offline functionality, that means you will always have some form of usability no matter the strength of your service. \
      </blockquote></aside> \
      <p>Offline functionality means that most of the app’s content and data is stored directly on the device, opposed to being stored in the cloud. This means that the app will work in some form without any network connection or with a flaky connection. Usually offline functionality is comprised of the most basic or necessary features, and then additional features become available when you regain a network connection. When an app is built with offline functionality, that means you will always have some form of usability no matter the strength of your service.</p>\
      <h2>How Does It Work?</h2>\
      <p>When an app with offline functionality has no connection, it works by logging actions locally on the device. So if you enter data, or change content, or upload information, it will store to the device. Then, when you reconnect to your network, the app will apply all the actions you did while offline. Once connected to the cloud, the app can sync data, upload pictures or content, and save changes you made while offline.</p>\
      <h2>Does it Make Sense for Your Business?</h2>\
      <p>So how could you use offline functionality in a custom app for your business? It’s on its way to becoming a best practice, but more importantly, it could provide options you hadn’t considered. If your business largely or frequently works in an area with poor or non-existent service (agriculture, foresting, oil and gas, for example), you may have dismissed the idea of an app to record or communicate data. But with offline functionality, an app can be used on-site and then automatically sync when returned to an area with service.</p>\
      <p>Or if your employees travel frequently, offline functionality can reclaim the hours spent on airplanes or save on international data rates by staying offline until connected to WiFi. But basically, offline functionality can mean better performance overall. The app will be created to run in almost any situation or location.</p>\
      <h2>Offline Functionality Examples</h2>\
      <p>Many app giants are implementing offline functionality in their apps, or creating new versions of the app for people with consistently slow or unreliable connections.</p>\
      <ul>\
      <li>Twitter Lite is made to be faster on slow connections, use less data, and take up less storage on the device.</li>\
      <li>Instagram for Android is working on increased offline functionality, including liking, following, and posting.</li>\
      <li>Dropbox Paper also has an offline mode that allows users to create, comment, and edit documents without a network connection. When the connection is restored, changes are updated and synced.</li>\
      </ul>\
      <p>If you’ve thought about a custom mobile app, but dismissed it as impractical for your situation, perhaps offline functionality could make it a possibility. Or if you are already planning on a mobile app for your business, offline functionality could make it even better. If you want to learn more or ask a few questions, feel free to <a href="#contact">contact us</a>.</p>\
    `,
  },
  {
    id: 3,
    title: '5 Questions Developers Ask in the First Meeting',
    image: '5-questions-developers-ask-in-the-first-meeting.jpg',
    caption: 'When getting a quote, come prepared to discuss these questions.',
    author: 'Rocket Jones',
    categories: ['Mobile Apps'],
    date: new Date('2023-08-01'),
    body: ` \
      <p>When you meet with a mobile app development vendor to get a quote, you can expect to talk about your business goals and their expertise. But a major part of your initial meeting will be hashing out some basic requirements for the app. Come prepared to discuss these questions.</p>\
      <h2>iOS app or Android app?</h2>\
      <p>When you have a great idea for an app, you’ll need to decide if you want to launch on iOS or Android or both. But how do you choose? Which one is better? It depends on who your audience is and what your budget looks like. Don’t make a guess, do some research. Who is your target audience for the app? What devices do they use? You can look up general statistics to make a guess, or use a survey to gather information. If you are launching to an existing audience, then your IT or marketing department will probably have information on the types of devices your audience uses. If you want to start with one platform and then add another later on, plan for the cost of two apps. Although duplicating the app on a second platform might seem simple, it’s still a lot of work to build because iOS and Android run on different programming languages. Some things will be the same, like your audience demographics, the general functionality, and some of the design work (although Google and Apple have different icons and animations that may need to be changed). So do some research and make a plan based on your audience and current budget.</p>\
      <h2>Are user accounts needed?</h2>\
      <p>Some apps require user account sign-up and login. If your app concept requires storing preferences, settings, favorites, or customization by the user, you will probably need some kind of user account registration. If you plan to charge users for premium features, then you’ll also need account creation. This matters because it means more extensive data collection and storage, probably an admin dashboard and a back-end management system, and more complex logic in the programming. If your app requires storing any kind of personal or payment information, then you’ll also have to think about security and best practices.</p>
      <h2>What data will be collected?</h2>\
      <p>Some apps accept data input from the user. This could include commenting on locations or products, gathering field data, surveys or quizzes, or virtually any other kind of data input and storage. Will your users need to enter any information OTHER than setting up an account or payment methods? The developer will want to know this because it will affect both the front end (what fields and screens need to show up for the user) and the back end (where the data is stored and how it is used and calculated).</p>\
      <h2>What device features will be used?</h2>\
      <p>One of the best things about mobile apps is all the functionality within the phone itself. You can take advantage of the camera, GPS, microphone/speakers, touch gestures, contacts and calendar, and more. Your developer will want to know which of these features you want to use because it takes, you guessed it, more programming to integrate those features. Don’t assume that the phone’s functionality will be rolled into the app, as it still takes some specific code-writing to make it happen.</p>\
      <h2>What third-party integrations will be used?</h2>\
      <p>Not every piece of every app will be coded by hand. There are a lot of excellent third-party tools that can be plugged in through an API. The developer will still need to do some work to integrate it, but they can be a great way to save on costs and use reliable technology. Some examples are social media platforms, PayPal and other payment processing services, and many others. Your developer will want to know if you plan to use any of these tools, and they can offer suggestions for third-party options.</p>\
    `,
  },
  {
    id: 4,
    title: "What's the Difference Between Websites and Web Applications?",
    image: 'whats-the-difference-between-websites-and-web-applications.jpg',
    caption: 'The differences and similarities of purpose, function, and foundation.',
    author: 'Rocket Jones',
    categories: ['Mobile Apps'],
    date: new Date('2023-01-23'),
    body: ' \
      <p>Having been involved in web and database technology for 20+ years, I often get asked the question, “What is the difference between a website and a web application?” These days, we all use websites and web applications almost daily, but not everyone knows the difference. Let’s look at the differences and similarities of purpose, function, and technical foundation.</p> \
      <h2>Technical Foundation</h2> \
      <p>Websites and web applications share some of the same foundation technologies. Both are collections of programming code (software) that deliver content and functionality on the internet. Often the same coding languages and tools (HTML, PHP, CSS and others) are used to develop and maintain both types of software. Both types of software run on web servers and are accessed through web browsers on a variety of devices (mobile, laptop, desktop, etc).</p> \
      <h2>Purpose</h2> \
      <p>One of the ways to think about the difference between websites and web applications is to think in terms of purpose. Let’s use this idea to think about the differences in purpose...</p> \
      <h2>Websites</h2> \
      <p>Generally speaking, websites are created for the purpose of delivering content to the user. This content varies greatly, but, in the end, a website is focused on delivering information. So, we regularly see websites that deliver text/articles, images, video, and files. Many of these sites are built to feature and promote products, services, and organizations. Websites are often marketing focused. Websites primarily tell the world who you are, what you have to offer, and why someone should engage you or your company.</p> \
      <h2>Web Applications</h2> \
      <p>While there is some crossover, web applications (web software) focus less on marketing and more on functionality (submitting, storing, searching, and retrieving data). While this may sound foreign at first, most people use these tools weekly or even daily.</p> \
      <p>Web applications can be thought of as web tools – software that runs on the web and provides some kind of service or efficiency.</p> \
      <p>So, we’re talking about using a web browser to log into tools like Facebook, online banking, Craigslist, tracking your ride or run, and sending out an e-invite for your child’s birthday party. And those are just examples from life outside of work. Within the business realm, web applications include accounting software, reminder systems, file distribution services, order forms, and sales tracking.</p> \
      <p>Web applications can be large packaged solutions that require subscription or are free to use. But, web applications are often custom-built solutions for businesses that provide time saving efficiencies by reducing busywork and automating processes. They can be built to strengthen communication both internally and externally and through data delivery and distribution.</p> \
      <p>Custom web applications can also improve your customer retention through excellent online portals, membership access to content, and streamlined eCommerce. For manufacturing distribution companies, a custom web application can be built to track your unique process and sales, giving you critical business data.</p> \
      <h2>An Example</h2> \
      <img src="/img/blog/whats-the-difference-between-websites-and-web-applications_wells-fargo.jpg" alt="Wells Fargo" /> \
      <p>For a great example of the difference between a website and web application, think about your bank. Your bank has a front-facing marketing website. The purpose of this website is to promote the bank by providing information about their vision, services, people, and security. You don’t need an account to view the bank’s website—it is information that is available to the public. But for account holders, the bank offers web application tools for submitting an online loan application, checking the balance on accounts, and paying bills online. The focus of these tools is to provide specific functionality (rather than displaying content). So, for the bank, both the website and the web applications are important, but each serves a different purpose for the organization.</p> \
      <h2>But What About...</h2> \
      <img src="/img/blog/whats-the-difference-between-websites-and-web-applications_amazon.jpg" alt="Amazon" /> \
      <p>As with most things, not everything fits neatly into our little categories. eCommerce is an example of a cross between a website (marketing for a product or service) and a web application (the function of searching, adding to cart, and an online financial transaction). In this example, both content and functionality are being delivered. Another example is web content management systems, web applications that manage content for marketing websites. But, even in these crossovers, you can see the differences between functionality and content delivery within the software.</p> \
      <h2>What It Means For You</h2> \
      <p>Most business owners and professionals understand their need for a website within their overall marketing plan. All savvy companies know how important this is. Many businesses, however, do not have as much understanding around web applications and how they can help save money, provide stronger products and services, and help grow their business. If you’re curious how a web application could be used in your organization, <a href="#contact">contact us</a> and we’d be happy to answer your questions.</p> \
    ',
  },
  {
    id: 5,
    title: 'How Does Data Flow In Your Business?',
    image: 'how-does-data-flow-in-your-business.jpg',
    caption: 'Let’s talk about the flow of information/data in your company.',
    author: 'Rocket Jones',
    categories: ['Mobile Apps', 'Stage 1: Explore + Imagine', 'Time Management'],
    date: new Date('2023-07-18'),
    body: ' \
      <aside class="pull-quote"><blockquote> \
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="37" fill="none" class="mb-2 text-red"><path fill="currentColor" d="M0 15.61c0-4.792 3.836-8.672 8.571-8.672h.572c1.264 0 2.286 1.033 2.286 2.312 0 1.28-1.022 2.313-2.286 2.313H8.57c-2.207 0-4 1.813-4 4.046v.579h4.572c2.521 0 4.571 2.074 4.571 4.625v4.625c0 2.55-2.05 4.625-4.571 4.625H4.57C2.05 30.063 0 27.988 0 25.438v-9.829Zm18.286 0c0-4.792 3.835-8.672 8.571-8.672h.572c1.264 0 2.285 1.033 2.285 2.312 0 1.28-1.021 2.313-2.285 2.313h-.572c-2.207 0-4 1.813-4 4.046v.579h4.572c2.521 0 4.571 2.074 4.571 4.625v4.625c0 2.55-2.05 4.625-4.571 4.625h-4.572c-2.521 0-4.571-2.075-4.571-4.625v-9.829Z"></path></svg> \
      The right technology can smooth processes and save you valuable time and energy. \
      </blockquote></aside> \
      <p>Let’s take a break from talking about web applications, mobile apps, and data integrations for a minute. Those conversations are valuable, but sometimes they obscure what’s at the heart of good technology and good business. All companies use information, even if you’re not technically a data-based company. Even restaurants and service-based businesses have information that needs to be gathered, used, and distributed. For this conversation, don’t get caught up in the difference between information and data. We’re thinking high level here. Instead, let’s talk about the flow of information/data in your company. How does data flow into your company, how do you use it, and how does it leave? As we talk to potential clients, we like to begin by identifying how data moves within the company. When we identify this flow pattern, it’s much easier to see ways that technology (like web or mobile apps) could help. The right technology can smooth processes and save you valuable time and energy.</p>\
      <h2>How Does Data Flow Into Your Company?</h2>\
      <p>Consider for a minute how you receive the information you need for your business to function. Do you gather it personally, through in-person conversations, or through your sales team, or through field techs? Or does it come from a more automated source, like through forms that people fill out online? How long does it take to collect the data? Do you receive it in a standardized format, or do you have to manually scrub and format data?</p>\
      <p>Technology can help smooth out the receiving process in a few different ways. For information that is collected in person, a mobile app with a standardized form for field techs or sales persons can standardize data collection and quickly update even outside the office. Or data that comes in from one software tool and needs to be manually entered in another software tool can benefit from a custom API integration. Automating these processes can free up your team to focus on better serving your customers and increasing your profits.</p>\
      <h2>How Does Data Flow Within Your Company?</h2>\
      <p>Once you’ve collected data, how do you use it? Which teams use it and for what purposes? How is the data changed or modified before being passed on to another team or person? Does the data need to be sorted or analyzed? What is your current system for sorting and analyzing?</p>\
      <p>Data that needs to be used by multiple people or teams at the same time often benefits from web applications. Web applications handle data in ways that keep your data integrity intact (no versioning issues that occur with Excel sheets getting passed around and uploaded). Web applications make it easy to collaborate with your teams, and they can analyze and sort data effortlessly. Using software to manage your data will set your mind at ease because you can be confident that you’re working with the most current and accurate information.</p>\
      <h2>How Does Data Flow Out of Your Company?</h2>\
      <p>Once you’ve collected data and used it in your processes, how does it leave your company? Not every business has a model that distributes data to customers and partners, but most have some kind of information that needs to go to someone outside the company. That could mean orders that go to manufacturers, shipping that goes to warehouses, emails that go to customers, or reports that go to partners. No matter how information leaves your company there is probably a way to simplify or automate it. This end of the data flow pattern always seems to be the messiest with the most manual effort required, so it’s ripe with automation potential.</p>\
      <p>Web applications can be custom-built to automate this step. API integrations can also be useful especially with pushing shipping orders and emailing customers. And of course, mobile apps can be a great way to distribute real-time information. The solution really does depend on the situation, and the options are varied and flexible. You can stress less about getting orders out on time and feel confident that your customers are getting what you promised.</p>\
      <p>Hopefully this process helps you get down to the bones of what you want technology to solve for your business. If you like to talk things out in person, or you’d like to hear some options for solutions, <a href="#contact">contact us</a> and send us a note. We’d love to chat about what could work for you.</p>\
    ',
  },
  {
    id: 6,
    title: 'Shining A Light on Unexpected Costs',
    image: 'shining-a-light-on-unexpected-costs.jpg',
    caption: 'Considerations as you approach the development of custom software for your business.',
    author: 'Rocket Jones',
    categories: ['Business Management'],
    date: new Date('2023-11-05'),
    body: ` \
      <p>App owners are often surprised by the effort involved in maintaining their tool over its lifecycle. Far from being a final destination, launch is only the beginning of a software’s life. Like any piece of machinery, it needs updates and monitoring, clean up, and maintenance. As your user base grows, your software must adapt. Progressing technology and increased usage are great things—as long as you are prepared for them. With a good service and performance evaluation plan, you can keep your software running and your customers happy. As you read through our list of maintenance items to consider you may be overwhelmed. There are a lot of things to keep track of! That's where Rocket Jones comes in. Not only are we developers of world class applications, but we are also tuned into the industry and aware of updates when they become available. And we are experts at implementing necessary updates at the right time.</p> \
      <p>Here is a list of items to consider as you approach the development of custom software for your business:</p> \
      <h2>Software Framework Updates</h2> \
      <h3>Web Technology Frameworks</h3> \
      <aside class="pull-quote"><blockquote> \
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="37" fill="none" class="mb-2 text-red"><path fill="currentColor" d="M0 15.61c0-4.792 3.836-8.672 8.571-8.672h.572c1.264 0 2.286 1.033 2.286 2.312 0 1.28-1.022 2.313-2.286 2.313H8.57c-2.207 0-4 1.813-4 4.046v.579h4.572c2.521 0 4.571 2.074 4.571 4.625v4.625c0 2.55-2.05 4.625-4.571 4.625H4.57C2.05 30.063 0 27.988 0 25.438v-9.829Zm18.286 0c0-4.792 3.835-8.672 8.571-8.672h.572c1.264 0 2.285 1.033 2.285 2.312 0 1.28-1.021 2.313-2.285 2.313h-.572c-2.207 0-4 1.813-4 4.046v.579h4.572c2.521 0 4.571 2.074 4.571 4.625v4.625c0 2.55-2.05 4.625-4.571 4.625h-4.572c-2.521 0-4.571-2.075-4.571-4.625v-9.829Z"></path></svg> \
      Keeping your application current improves reliability, speed, and consistency. \
      </blockquote></aside> \
      <p>This is one of the key areas to watch for. Thankfully, software framework updates are necessary every couple of years, but it's important to stay on top of them. Web technology frameworks are always improving, so the code built on top of those frameworks must adapt too. At launch, every line of code in your application was in line with best practices. But that may change next year or the year after. Keeping your application current improves reliability, speed, and consistency. The choice to keep your underlying frameworks updated is the choice to keep your application stable and secure. By updating the software, you keep your application safe and running at top performance. And if issues do come up, using the most current version reduces support and maintenance time, which means you spend less time dealing with unhappy users. </p> \
      <h3>Mobile App Platforms</h3> \
      <p>The mobile market changes constantly, and each year companies like Apple and Google roll out new features and screen sizes and update their Software Development Kits. A mobile app that is scalable and ready for these changes can be updated seamlessly, keeping users happily using your app.</p> \
      <h3>Browser Compatibility</h3> \
      <p>Browsers such as Chrome, Firefox, or Safari are always updating and evolving. Because they deliver and render your content to your users it’s important to accommodate for their changes. Without updating code to reflect browser changes, your application could break or render incorrectly. Stay updated and you’ll avoid emergency fixes because of a new browser version.</p> \
      <h2>Application Performance Optimization</h2> \
      <p>It is important to monitor your app's performance over time. You can track growth and peak points, which will help you adjust for any unexpected changes.</p> \
      <h2>Application Scaling</h2> \
      <p>Over time, as your application changes and grows, you may need to scale your software. Every application is unique, and the solutions are never one-size-fits all. You need a partner that can pinpoint areas of stress within the application and make recommendations that will get you the most for your budget and effort. Whether this means modifications to the code base to help processes run more efficiently, or changes to the underlying technologies or infrastructure to help the application handle the increasing load.</p> \
      <h2>Conclusion</h2> \
      <p>As you consider a custom application for your business, remember that it's a lot like the purchase of a new car. The initial expense of the vehicle itself is only part of the total cost of ownership. The beauty of working with Rocket Jones is not only are we like the car manufacturers, we are also a personal assistant who notifies you of needed maintenance, and we are the trusted mechanic capable of doing the work for you when the time is right for you and your application.</p> \      
    `,
  },
  {
    id: 7,
    title: 'Why Your Business Is More Ready for AI Than You Think',
    image: 'ready-for-ai-5-automations.jpg',
    caption: '(+ 5 Achievable, Low-Cost Workflow Automations)',
    author: 'Rocket Jones',
    categories: ['Business Management', 'Workflow Automation', 'AI'],
    date: new Date('2025-08-25'),
    body: ` \
      <p>"We know we should be doing something with AI, but we don't know where to start."</p> \
      <p>This is where most business leaders are right now: Aware of AI and its potential, but unclear on the specifics and unsure of the results.</p> \
      <p>It makes sense. Somewhere north of 80% of AI initiatives fail. Leaders don't want to lose their company millions or waste time trying to implement something that won't pay off.</p> \
      <p>But you don't need to risk millions to see real results.</p> \
      <p>The companies winning with AI aren't the ones with the biggest budgets or the most technical teams—they're the ones who start small, focus on ordinary tasks, and build from there.</p> \
      <h2>The Real AI Revolution Happening Right Now</h2> \
      <p>Forget the Hollywood AI scenarios. The AI transformation happening in 2025 isn't about robots taking over. It's about AI agents that work behind the scenes to eliminate the tedious stuff that bogs down your team.</p> \
      <p>Think of AI agents as the ultimate executive assistant for your entire operation. They don't just answer questions when you ask (that's a chatbot). They work proactively in the background to eliminate the repetitive tasks that slow you down.</p> \
      <p>Here's what this looks like in practice: Your project management tool automatically generates weekly status reports, identifies which projects are at risk, and sends personalized updates to stakeholders—all while you're focused on closing deals or developing strategy.</p> \
      <h2>Instead of End-to-End, Think Middle-to-Middle</h2> \
      <p>Most AI vendors are selling dreams of "end-to-end" automation that frankly aren't ready for prime time. The real value (and the proven ROI) comes from what's often called human-in-the-loop AI or "middle-to-middle" approaches.</p> \
      <p>The workflow: Human creates the request → AI agent processes and analyzes → Human validates and takes action.</p> \
      <p>This approach gives you the efficiency gains of automation while keeping humans in control of critical decisions. It's also where you can start seeing results immediately, not someday in the theoretical future.</p> \
      <h2>The Numbers Don't Lie</h2> \
      <p>Most small businesses are already using AI to make work better and faster. About 68% of small business owners say they are already using AI (Goldman Sachs survey), representing a dramatic jump from previous years. Counter to the narrative, most small businesses using AI, about 80%, said it is enhancing rather than replacing their workforce (Goldman Sachs survey).</p> \
      <p>The majority of SMBs still believe true workflow automation is out of their price range. Larger organizations claim to use automation at a rate of 40% versus only 25% for smaller organizations (Cflow Research). This isn't because small businesses can't benefit from automation. It's because they think it's too complex or expensive to get started.</p> \
      <p>Workflow automation powered by AI agents is effective, and affordable.</p> \
      <p>Workflow automation can reduce repetitive tasks by 60-95% (PointStar Consulting), leading to time savings of up to 77% on routine activities (Kissflow). Even better news: there are a variety of low-code automation systems that require no technical expertise and minimal upfront investment. 1 in 4 businesses are using low-code automation tools that require zero technical skills (Cflow Research).</p> \
      <h2>The 5 Ordinary Tasks That Are Perfect AI Starting Points</h2> \
      <p>So how much is this going to cost you? Not as much as you think. In fact, you probably already have most if not all of tools you need.</p> \
      <p>Most growing businesses are sitting on automation opportunities using software they're already paying for. Here are the five most common places to start:</p> \
      <h3>1. Project Status Reports</h3> \
      <p>Your Asana or Monday.com can automatically track project health, identify bottlenecks, and send personalized updates to stakeholders—no more spending Friday afternoons writing status emails.</p> \
      <h3>2. Customer Support Routing</h3> \
      <p>Automatically categorize support tickets by complexity, route simple questions to your knowledge base, and escalate urgent issues with full context to the right team member.</p> \
      <h3>3. Invoice and Expense Processing</h3> \
      <p>Connect your QuickBooks to automatically categorize expenses, flag items for approval, and route invoices through your approval workflow.</p> \
      <h3>4. Lead Qualification</h3> \
      <p>Your CRM can automatically score new leads based on criteria you define, send personalized follow-up sequences, and alert your sales team when someone's ready to buy.</p> \
      <h3>5. Data Quality Checks</h3> \
      <p>Set up automatic monitoring to identify duplicate records, missing information, and inconsistencies across your systems before they cause problems.</p> \
      <p>Want the step-by-step playbook? Our free implementation guide walks you through exactly how to set up each of these workflows, including which tools to use and how to connect them together. You'll also get a 30-day action plan to go from AI-curious to AI-enabled without the overwhelm.</p> \
      <div class="my-12 bg-white rounded-lg"> \
        <div class="flex flex-col md:flex-row items-center md:items-start p-6"> \
          <div class="md:w-1/2 flex justify-center md:justify-start md:pr-6"> \
            <img src="/img/blog/ready-for-ai-5-automations-download-preview.png" alt="The Business Leader's AI Implementation Guide Preview" class="w-[320px] max-w-full rotate-[-6deg] drop-shadow-2xl" /> \
          </div> \
          <div class="md:w-1/2 mt-6 md:mt-0"> \
            <h3 class="text-2xl font-extrabold text-black mb-3">The Business Leader's AI Implementation Guide</h3> \
            <p class="text-gray-800 mb-6">We've put together a quick and comprehensive guide to AI buzzwords, myths, realities, and advice. Find out which ordinary tasks could save your team extraordinary amounts of time starting next week.</p> \
            <a href="/files/rocketjones-blog-ready-for-ai-5-automations.pdf" download class="btn-download inline-block bg-red !text-white px-8 py-3 font-bold uppercase tracking-wider border-2 border-transparent hover:bg-transparent hover:border-red hover:!text-red transition-colors leading-none">Download Now</a> \
          </div> \
        </div> \
      </div> \
      <h2>The Real Question: How Ready Is Your Business?</h2> \
      <p>Most business leaders know they should be leveraging AI, but they're not sure where they stand. The truth is, your readiness has less to do with your technical sophistication and more to do with three critical factors:</p> \
      <p><strong>Data Quality:</strong> How organized and accessible is your business information? AI is only as good as the data it works with.</p> \
      <p><strong>Process Maturity:</strong> Do you have documented workflows, or is everything still "tribal knowledge"? AI amplifies good processes and exposes bad ones.</p> \
      <p><strong>Growth Mindset:</strong> Are you willing to experiment and iterate, or do you need everything to be perfect before you start?</p> \
      <p>If you have decent systems in place and the appetite to improve them, you're probably more ready than you think.</p> \
      <h2>Why the Time Is Now (Not Later)</h2> \
      <p>We're seeing this firsthand with our clients. The companies that start implementing AI workflows today aren't just gaining efficiency. They're building sustainable competitive advantages that become harder to replicate over time.</p> \
      <p>The development work that used to take months can now be completed in weeks when you combine skilled human expertise with AI-enhanced workflows. (We're not talking about replacing our team. We're talking about making them unstoppable)</p> \
      <p>AI-enhanced development and operations are becoming table stakes, not differentiators.</p> \
      <p>The question isn't whether you'll eventually use AI agents in your business. It's whether you'll lead the transformation or scramble to catch up when your competitors start moving twice as fast.</p> \
      <p>Bottom line: You don't need to become a tech company to leverage these tools effectively. You just need to start thinking like one.</p> \
    `,
  },
];

export default data;

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
    date: new Date('2019-05-07'),
    body: ` \
      <p>Imagine you own a cabinet-making company. You hire excellent carpenters who are hard working and skilled. They work diligently every week to meet deadlines and satisfy customers with a great product. But over time, your competitors start to edge you out of the market. Business slows down even with your solid business model, great team, quality materials, and dedication to customer satisfaction.</p> \
      Puzzling, right?</p> \
      Now imagine that all your carpenters only have access to manual hand tools. No table saws, no routers, no power drills. Every tool they use is powered by their own strength.</p> \
      <p>Obviously, that’s why your business is struggling to compete. Every other competitor is using power tools. It has nothing to do with your employees’ skill or your business practices. It’s all about the tools you use. Continuing to use outdated tools will cause your business to fall further and further behind because everyone else’s employees get the same results with less effort and time.</p> \
      <p>Even if you don’t own a cabinet-making company, the analogy still applies. If you are struggling to keep up with your competitors, it may be that your tools need to be updated. Providing your employees with better software tools allows them to get better results with less time and effort. Moving from an Excel sheet to custom software can be the equivalent of switching from a hand saw to a table saw. Both may eventually have the same result, but the effort and time required are vastly different. Better software tools have three main benefits.</p> \
      <h2>Efficiency</h2> \
      <p>The benefit of increased efficiency should be obvious. Automating simple tasks like data entry and collection, syncing data across multiple systems, or generating reports can save hours each day or week. Reducing the amount of time spent on non-strategic tasks frees your employees to spend more time on strategic tasks that improve your business. Even strategic tasks can be streamlined, allowing more work to be accomplished in less time.</p> \
      <h2>Quality</h2> \
      <p>Efficiency may be the star of the custom web application world, but quality is the ultimate goal. Quality of work can improve in several ways. The first is linked to efficiency; more time available for more important tasks is bound to improve quality. Second, custom web applications and mobile apps can solve problems with internal communication. Instead of passing around documents via email constantly, everything can be accessed from the same portal. This keeps every team member and department working with the most updated and accurate information. Quality improves as communication and unity improve.</p> \
      <h2>Time to Sharpen the Saw</h2> \
      <p>No, I’m not going back to the hand tools analogy. I mean here that employees will have time to improve their skills. Not only will they gain the ability to work with a new software system, but they will have more time and energy to spend on self-improvement. They can pursue further training and certification, add skills, and fill knowledge gaps. Your greatest asset is the people who work for you, so give them room to grow.</p> \
      <p>Custom web applications and mobile apps are more than just a piece of software. They are tools that can accelerate your business and help your team go to the next level. If you want to see examples of how custom software has helped real businesses, check out our case studies.</p> \
    `,
  },
  {
    id: 2,
    title: 'Offline Functionality: The New Mobile Trend',
    image: 'offline-functionality-the-new-mobile-trend.jpg',
    caption: 'The focus is now on making technology work without any connection at all.',
    author: 'Rocket Jones',
    categories: ['Mobile Apps'],
    date: new Date('2019-03-26'),
    body: ` \
      <p>The technology goal of the past few decades has been to connect in better ways, faster ways, and more ways every year. But now, we’re starting to wise-up in new ways: tech developers are starting to work on ways to be less connected. Although I’m sure Verizon would love to have a cell tower on every hilltop in the world, it’s simply not going to happen for a long time. So the focus is now on making technology work without any connection at all. This is called “offline functionality” and it’s becoming a big deal.</p>\
      <h2>What is Offline Functionality?</h2>\
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
      <p>If you’ve thought about a custom mobile app, but dismissed it as impractical for your situation, perhaps offline functionality could make it a possibility. Or if you are already planning on a mobile app for your business, offline functionality could make it even better. If you want to learn more or ask a few questions, feel free to call us.</p>\
    `,
  },
  {
    id: 3,
    title: '5 Questions Developers Ask in the First Meeting',
    image: '5-questions-developers-ask-in-the-first-meeting.jpg',
    caption: 'When getting a quote, come prepared to discuss these questions.',
    author: 'Rocket Jones',
    categories: ['Mobile Apps'],
    date: new Date('2017-08-01'),
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
      <blockquote>If you want to see how the answers to these questions affect the cost of your app development, check out our free mobile app calculator! It walks you through these questions and more, and at the end you can download a PDF with a ballpark estimate of what your app might cost to build. It’s not an official quote, but it’s a good starting place.</blockquote> 
    `,
  },
  {
    id: 4,
    title: 'Announcing the BrewTribe iOS App!',
    image: 'announcing-the-brewtribe-ios-app.jpg',
    caption: 'Helping customers choose a great beer and breweries build a great tribe.',
    author: 'Rocket Jones',
    categories: ['Mobile Apps', 'Announcements'],
    date: new Date('2018-01-23'),
    body: ' \
      <p>Most of what we write about here is project updates featuring our clients’ web applications and mobile apps, but today we’re pleased to announce an exciting internal project we’ve been working on. BrewTribe is a mobile app framework for micro breweries. It’s completely personalized for each client, but because we’ve built a robust standardized framework for the app, it has a dramatically lower cost and faster turnaround time compared to launching a fully custom mobile app.</p>\
      <h2>How It Works</h2>\
      <p>Each brewery client can choose an app package that meets their needs for features and functionality and is at an affordable price point for them. We then build the app with that brewery’s colors, logo and font, and launch it on the App Store within two weeks. The brewery can update the beer list and other content from an easy-to-use back end control panel, which keeps the app up-to-date for customers (no waiting for the developer to work through a queue to get to a simple update).</p>\
      <h2>What the App Does</h2>\
      <p>BrewTribe helps breweries build a loyal tribe by making it easy for customers to choose a beer they’ll love with a detailed beer list including photos, offering purchase incentives with a digital loyalty card and coupon, and boosting event attendance with push notification reminders and event directions. The app is fully featured, built on Apple’s native iOS platform by our expert development team. It integrates with the phone’s camera, calendar, and maps.</p>\
      <h2>The BrewTribe Story</h2>\
      <p>It’s no secret that the Rocket Jones team loves the Fort Collins craft brewery scene. Owner and founder, Jeff Bristol, and his wife Darla set a goal last summer to visit every craft brewery in town. It was a fun experience, but they kept running into the same problem. When visiting a new brewery, it was hard to choose a beer. The chalk board offered a few details and a fun title, but it was often hard to read and was often missing info. They could ask the server, but it wasn’t practical to have him or her describe every beer on tap. So that sparked the idea for BrewTribe, and soon the Rocket team had envisioned, designed and built an app that would help customers choose a great beer and breweries build a great tribe.</p>\
      <h2>Learn More</h2>\
      <p>To see more photos of the app and find out more about how it works, visit www.brewtribeapp.com or find us on Facebook and Twitter. If you’re interested in purchasing an app package for your brewery, please contact us to get started. (970) 486-5790.</p>\
    ',
  },
  {
    id: 5,
    title: 'How Does Data Flow In Your Business?',
    image: 'how-does-data-flow-in-your-business.jpg',
    caption: 'Let’s talk about the flow of information/data in your company.',
    author: 'Rocket Jones',
    categories: ['Mobile Apps', 'Stage 1: Explore + Imagine', 'Time Management'],
    date: new Date('2018-07-18'),
    body: ' \
      <p>Let’s take a break from talking about web applications, mobile apps, and data integrations for a minute. Those conversations are valuable, but sometimes they obscure what’s at the heart of good technology and good business. All companies use information, even if you’re not technically a data-based company. Even restaurants and service-based businesses have information that needs to be gathered, used, and distributed. For this conversation, don’t get caught up in the difference between information and data. We’re thinking high level here. Instead, let’s talk about the flow of information/data in your company. How does data flow into your company, how do you use it, and how does it leave? As we talk to potential clients, we like to begin by identifying how data moves within the company. When we identify this flow pattern, it’s much easier to see ways that technology (like web or mobile apps) could help. The right technology can smooth processes and save you valuable time and energy.</p>\
      <h2>How Does Data Flow Into Your Company?</h2>\
      <p>Consider for a minute how you receive the information you need for your business to function. Do you gather it personally, through in-person conversations, or through your sales team, or through field techs? Or does it come from a more automated source, like through forms that people fill out online? How long does it take to collect the data? Do you receive it in a standardized format, or do you have to manually scrub and format data?</p>\
      <p>Technology can help smooth out the receiving process in a few different ways. For information that is collected in person, a mobile app with a standardized form for field techs or sales persons can standardize data collection and quickly update even outside the office. Or data that comes in from one software tool and needs to be manually entered in another software tool can benefit from a custom API integration. Automating these processes can free up your team to focus on better serving your customers and increasing your profits.</p>\
      <h2>How Does Data Flow Within Your Company?</h2>\
      <p>Once you’ve collected data, how do you use it? Which teams use it and for what purposes? How is the data changed or modified before being passed on to another team or person? Does the data need to be sorted or analyzed? What is your current system for sorting and analyzing?</p>\
      <p>Data that needs to be used by multiple people or teams at the same time often benefits from web applications. Web applications handle data in ways that keep your data integrity intact (no versioning issues that occur with Excel sheets getting passed around and uploaded). Web applications make it easy to collaborate with your teams, and they can analyze and sort data effortlessly. Using software to manage your data will set your mind at ease because you can be confident that you’re working with the most current and accurate information.</p>\
      <h2>How Does Data Flow Out of Your Company?</h2>\
      <p>Once you’ve collected data and used it in your processes, how does it leave your company? Not every business has a model that distributes data to customers and partners, but most have some kind of information that needs to go to someone outside the company. That could mean orders that go to manufacturers, shipping that goes to warehouses, emails that go to customers, or reports that go to partners. No matter how information leaves your company there is probably a way to simplify or automate it. This end of the data flow pattern always seems to be the messiest with the most manual effort required, so it’s ripe with automation potential.</p>\
      <p>Web applications can be custom built to automate this step. API integrations can also be useful especially with pushing shipping orders and emailing customers. And of course, mobile apps can be a great way to distribute real-time information. The solution really does depend on the situation, and the options are varied and flexible. You can stress less about getting orders out on time and feel confident that your customers are getting what you promised.</p>\
      <p>Hopefully this process helps you get down to the bones of what you want technology to solve for your business. If you like to talk things out in person, or you’d like to hear some options for solutions, give us a call at (970) 482-5790. We’d love to chat about what could work for you.</p>\
    ',
  },
];

export default data;

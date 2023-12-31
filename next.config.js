/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: '@svgr/webpack',
          options: { babel: false },
        },
      ],
    });
    return config;
  },
  // these redirects also need to be declared in /public/_redirects for netlify
  // ive kept a copy of them here in case we end up dropping netlify at some point
  async redirects() {
    // prettier-ignore
    return [
      {'source': '/portfolio', 'destination': '/', 'permanent': true},
      {'source': '/services', 'destination': '/', 'permanent': true},
      {'source': '/testing', 'destination': '/', 'permanent': true},
      {'source': '/toolkit', 'destination': '/', 'permanent': true},
      {'source': '/about', 'destination': '/', 'permanent': true},
      {'source': '/about-us', 'destination': '/', 'permanent': true},
      {'source': '/category/uncategorized', 'destination': '/', 'permanent': true},
      {'source': '/data-flow-business', 'destination': '/', 'permanent': true},
      {'source': '/about-us/blog', 'destination': '/', 'permanent': true},
      {'source': '/dont-know-start', 'destination': '/', 'permanent': true},
      {'source': '/ignore-first-idea', 'destination': '/', 'permanent': true},
      {'source': '/nerd-jokes-love', 'destination': '/', 'permanent': true},
      {'source': '/author/rocket-jones', 'destination': '/', 'permanent': true},
      {'source': '/project-update-transfort', 'destination': '/', 'permanent': true},
      {'source': '/category/business-management', 'destination': '/', 'permanent': true},
      {'source': '/category/northern-colorado', 'destination': '/', 'permanent': true},
      {'source': '/home/privacy-policy', 'destination': '/', 'permanent': true},
      {'source': '/home/oilogowithtext-1024x292', 'destination': '/', 'permanent': true},
      {'source': '/get-free-quote', 'destination': '/', 'permanent': true},
      {'source': '/services/system-integrations', 'destination': '/', 'permanent': true},
      {'source': '/5-signs-successful-app', 'destination': '/', 'permanent': true},
      {'source': '/terms-and-conditions', 'destination': '/', 'permanent': true},
      {'source': '/press-release-rocket-jones', 'destination': '/', 'permanent': true},
      {'source': '/portfolio/blogging-for-books', 'destination': '/', 'permanent': true},
      {'source': '/home/terms-of-use', 'destination': '/', 'permanent': true},
      {'source': '/the-epilogue-of-software', 'destination': '/', 'permanent': true},
      {'source': '/3-secrets-meaningful-work', 'destination': '/', 'permanent': true},
      {'source': '/where-to-walk', 'destination': '/', 'permanent': true},
      {'source': '/announcing-brewtribe-ios-app', 'destination': '/', 'permanent': true},
      {'source': '/custom-web-application-development', 'destination': '/', 'permanent': true},
      {'source': '/project-update-maingate-tickets', 'destination': '/', 'permanent': true},
      {'source': '/services/web-app-development', 'destination': '/', 'permanent': true},
      {'source': '/project-update-jiffy-lube', 'destination': '/', 'permanent': true},
      {'source': '/services/mobile-app-development', 'destination': '/', 'permanent': true},
      {'source': '/offline-functionality-new-mobile-trend', 'destination': '/', 'permanent': true},
      {'source': '/5-red-flags-hiring-developer', 'destination': '/', 'permanent': true},
      {'source': '/whats-difference-websites-web-applications', 'destination': '/', 'permanent': true},
      {'source': '/about-us/application-development-process', 'destination': '/', 'permanent': true},
      {'source': '/3-hidden-complexities-mobile-app', 'destination': '/', 'permanent': true},
      {'source': '/ultimate-guide-choosing-app-developer', 'destination': '/', 'permanent': true},
      {'source': '/project-update-trailmate-ios-app', 'destination': '/', 'permanent': true},
      {'source': '/about-us/partnering-with-rocket', 'destination': '/', 'permanent': true},
      {'source': '/project-csu-solar-panel-calculator', 'destination': '/', 'permanent': true},
      {'source': '/5-things-great-developers-differently', 'destination': '/', 'permanent': true},
      {'source': '/author/rocket-jones/page/11', 'destination': '/', 'permanent': true},
      {'source': '/author/rocket-jones/page/4', 'destination': '/', 'permanent': true},
      {'source': '/home/rocket-jones-interactive-hd', 'destination': '/', 'permanent': true},
      {'source': '/category/project-updates/page/2', 'destination': '/', 'permanent': true},
      {'source': '/author/rocket-jones/page/14', 'destination': '/', 'permanent': true},
      {'source': '/5-questions-developers-ask-first-meeting', 'destination': '/', 'permanent': true},
      {'source': '/whats-difference-mobile-responsive-mobile-app', 'destination': '/', 'permanent': true},
      {'source': '/4-questions-developers-ask-first-meeting', 'destination': '/', 'permanent': true},
      {'source': '/failing-fast-and-why-you-should', 'destination': '/', 'permanent': true},
      {'source': '/whats-difference-web-design-web-development', 'destination': '/', 'permanent': true},
      {'source': '/7-questions-ux-designers-ask-every-client', 'destination': '/', 'permanent': true},
      {'source': '/getting-inside-someones-head-wireframing-mental-models', 'destination': '/', 'permanent': true},
      {'source': '/services/mobile-app-development/ios-app-development', 'destination': '/', 'permanent': true},
      {'source': '/top-5-books-resources-learning-ux-design', 'destination': '/', 'permanent': true},
      {'source': '/how-to-break-up-with-your-developer', 'destination': '/', 'permanent': true},
      {'source': '/project-update-east-texas-salt-water-disposal', 'destination': '/', 'permanent': true},
      {'source': '/services/web-app-development/person-woman-hand-space', 'destination': '/', 'permanent': true},
    ];
  },
};

module.exports = nextConfig;

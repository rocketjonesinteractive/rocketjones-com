<p align="center">
  <img src="https://raw.githubusercontent.com/rocketjonesinteractive/rocketjones-com/master/public/img/rocket-jones-logo-white.svg">
  <p align="center">Rocket Jones has more than 22 years of experience providing custom software solutions.</p>
  <p align="center">
  <a href="https://app.netlify.com/sites/rocketjones/deploys">
    <img src="https://api.netlify.com/api/v1/badges/b95270de-f877-4418-97b0-c66efd3b7c26/deploy-status" />
  </a>
</p>

## Introduction

This is the repository for the [Rocket Jones](https://rocketjones.com) website.

- Built with [TypeScript](https://www.typescriptlang.org/) and [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Form submissions via [Netlify Forms](https://www.netlify.com/products/forms/)
- ESLint + Prettier 

## Installation
Clone the repository and then from the root directory run:

```bash
pnpm install
```

If you do not have PNPM installed, you can install it here: https://pnpm.io/installation

### Environment Variables
You will need to clone the `.env.example` file and rename it to `.env`. Then, provide values for each environment variable. Ask another developer to give you a copy of their file, if needed. This file contains the environment variables needed for the site to run.

## Development

To run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. 

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Deployment

The site is hosted on [Netlify](https://netlify.com) and deployments occur automatically when changes are pushed to the `master` branch.

## Copyright
&copy; 2023 Rocket Jones Interactive. All rights reserved.
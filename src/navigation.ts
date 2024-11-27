import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Blog',
      href: getPermalink('/blog'),
    },
    {
      text: 'Services',
      href: getPermalink('/services'),
    },
    {
      text: 'Portfolio',
      href: getPermalink('/portfolio'),
    },
    {
      text: 'Reviews',
      href: getPermalink('/reviews'),
    },
    {
      text: 'Contact Us',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Quick Links',
      links: [
        { text: 'Home', href: getPermalink('/') },
        { text: 'Services', href: getPermalink('/services') },
        { text: 'About Us', href: getPermalink('/about') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Services',
      links: [
        { text: 'Residential Concrete', href: '#' },
        { text: 'Commercial Concrete', href: '#' },
        { text: 'Decorative Concrete', href: '#' },
        { text: 'Concrete Repair', href: '#' },
      ],
    },
    {
      title: 'Follow Us',
      links: [
        { ariaLabel: 'Facebook', icon: 'fa6-brands:facebook-f', href: '#' },
        { ariaLabel: 'Twitter', icon: 'fa6-brands:twitter', href: '#' },
        { ariaLabel: 'Instagram', icon: 'fa6-brands:instagram', href: '#' },
        { ariaLabel: 'LinkedIn', icon: 'fa6-brands:linkedin-in', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  footNote: `
          <div class="bg-red-900 py-4 text-gray-100">
        <div class="container mx-auto px-4">
          <div class="-mx-4 flex flex-wrap justify-between">
            <div class="px-4 w-full text-center sm:w-auto sm:text-left">
              © 2023 All American Concrete. All rights reserved.
            </div>
            <div class="px-4 w-full text-center sm:w-auto sm:text-left">
              Made with ❤️ by Aspect Studios
            </div>
          </div>
        </div>
      </div>
  `,
};

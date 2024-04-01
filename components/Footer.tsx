import React from 'react';
import Image from 'next/image';
import { footerLinks } from '@/constants';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer
      className="flex flex-col
      text-black-100 mt-5
      border-t border-gray-100 max-w-[1440px] mx-auto"
    >
      <div
        className="flex max-md:flex-col flex-wrap justify-between gap-5
        sm:px-16 px-6 py-10"
      >
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/logo.svg"
            width={118}
            height={18}
            alt="Car logo"
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            CarHub 2024
            <br />
            All rights reserved &copy;
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map(({ title, links }) => (
            <div key={title} className="footer__link">
              <h3 className="font-bold">{title}</h3>

              {links.map(({ title: titleLink, url }) => (
                <Link key={titleLink} href={url} className="text-gray-500">
                  {titleLink}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div
        className="flex flex-col justify-between
        md:flex-row items-center gap-5
        mt-10 border-t border-gray-100 sm:px-16 px-6 py-10"
      >
        <p>@2024 CarHub. All Rights Reserved</p>
        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500">
            Privacy & Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms & Condition
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

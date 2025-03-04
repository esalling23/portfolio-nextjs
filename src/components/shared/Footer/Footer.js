'use client' 
import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import BadgeLink from '../Badge/BadgeLink';

function Footer ({

}) {
  const badgeClasses = 'text-white border-white hover:text-black focus:text-black hover:border-black focus:border-black aspect-square'
	return (
		<footer className="w-full h-24 flex flex-row gap-4 justify-center content-center items-center background-color-accent-2">
      <BadgeLink
        className={badgeClasses}
        url="https://github.com/esalling23"
        icon={FaGithub}
        text=""
      />
      <BadgeLink
        className={badgeClasses}
        url="https://www.linkedin.com/in/eron-salling/"
        icon={FaLinkedin}
        text=""
      />
      <BadgeLink
        className={badgeClasses}
        url="mailto:eron.salling@gmail.com"
        icon={FaEnvelope}
        text=""
      />
		</footer>
	);
};

export default Footer;
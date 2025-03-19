'use client' 
import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import BadgeLink from '../Badge/BadgeLink';

function Footer ({

}) {
  const badgeClasses = 'text-black border-black hover:text-white focus:text-white hover:border-white focus:border-white aspect-square'
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
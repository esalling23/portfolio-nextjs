import React from 'react';
import PropTypes from 'prop-types';
import { FaGithub, FaLinkedin, FaFileAlt, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';

import BadgeLink from '@/components/shared/Badge/BadgeLink';
import SectionContainer from '@/components/shared/SectionContainer';
import SectionBox from '@/components/shared/SectionContainer/SectionBox';

import './styles.scss'

const About = ({
  description,
  img,
  resume,
}) => (
  <SectionContainer id="about">
    <SectionBox
      className="p-0 flex justify-center background-color-dark justify-center items-center"
    >
      <Image
        alt="Photo of a smiling person named Eron"
        src={img}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto object-cover rounded-lg aboutImg"
      />
    </SectionBox>
    <SectionBox className="p-8 background-color-main flex justify-center items-end">
      <p className="text-lg md:text-md text-gray-800">{description}</p>

      <div className="flex flex-wrap justify-center md:justify-start mt-8 md:mt-12">
        <BadgeLink
          className="mr-1 badge"
          url="https://github.com/esalling23"
          icon={FaGithub}
          text="Github"
        />
        <BadgeLink
          className="badge"
          url="https://www.linkedin.com/in/eron-salling/"
          icon={FaLinkedin}
          text="LinkedIn"
        />
      </div>
      <div className="flex flex-wrap justify-center md:justify-start">
        <BadgeLink
          className="mr-1 badge"
          url="mailto:eron.salling@gmail.com"
          icon={FaEnvelope}
          text="Get in touch"
        />
        {resume && <BadgeLink
          className="badge"
          url={resume}
          icon={FaFileAlt}
          text="Resume"
        />}
      </div>
    </SectionBox>
  </SectionContainer>
);

About.propTypes = {
  description: PropTypes.string,
  img: PropTypes.string,
  resume: PropTypes.string
};

export default About;

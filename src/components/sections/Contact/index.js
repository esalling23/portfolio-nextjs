import React from 'react';
import PropTypes from 'prop-types';
import { FaFileAlt } from 'react-icons/fa';
import classNames from 'classnames';
import Image from 'next/image';

import BadgeLink from '@/components/shared/Badge/BadgeLink';
import SectionContainer from '@/components/shared/SectionContainer';
import SectionBox from '@/components/shared/SectionContainer/SectionBox';

const About = ({
  description,
  img,
  resume,
}) => (
  <SectionContainer id="about">
    <SectionBox
      className={classNames(
        'p-0 flex justify-center background-color-dark',
      )}
    >
      <Image
        alt="Photo of a smiling person named Eron"
        src={img}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto object-cover rounded-lg"
      />
    </SectionBox>
    <SectionBox className="p-3 md:p-5 background-color-main flex justify-center items-end">
      <p className="text-base md:text-lg text-gray-800">{description}</p>

      <div className="flex flex-wrap justify-start mt-4">
        {resume && <BadgeLink
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

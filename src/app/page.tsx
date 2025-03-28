import React from 'react';
import '../styles/index.scss';

import SinglePageLayout from '@/components/shared/Layout/SinglePageLayout';
import Layout from '@/components/shared/Layout/Layout';
import About from '@/components/sections/About/index';
import Portfolio from '@/components/sections/Portfolio/index';
import HomeSection from '@/components/sections/Home/index';
import SkillsInterface from '@/components/shared/SkillsInterface';
import SectionContainer from '@/components/shared/SectionContainer';

import {
  // getCategories,
  getContent,
  getProjects,
  getTools
} from '@/lib/api'

async function App () {
  const content = (await (await getContent()).json()).content;
  const tools = (await (await getTools()).json()).tools;
  // const categories = (await (await getCategories()).json()).categories
  const projects = (await (await getProjects()).json()).projects

	const page = (
    <SinglePageLayout>
      <HomeSection 
        typewriterTexts={content.typewriter_texts}
      />
      <About
        img={content.about_img_safe}
        description={content.about_description}
        resume={content.resume}
      />
      <SectionContainer id="skills">
        <SkillsInterface items={tools || []} />
      </SectionContainer>
      <Portfolio 
        projects={projects} 
        // categories={categories} 
      />
    </SinglePageLayout>
  )
	
	return (
		<>
			<Layout>{page}</Layout>
		</>
	);
};

export default App;
export const config = {
  revalidate: 86400 // 3600 * 24
}
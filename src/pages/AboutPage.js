import React from 'react';
import ImageSection from '../components/ImageSection';
import Title from '../components/Title';
import SkillSection from '../components/SkillSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';
import ServicesSection from '../components/ServicesSection';
const AboutPage = () => {
    return (  
      <div className="AboutPage">
         <Title title={'About Me'} span={'About Me'} />
         <ImageSection />
         <Title title={'My Skills'} span={'My skills'} />
         <div className="skillsContainer">
                <SkillSection skill={'Javascript'} progress={'60%'} width={'60%'} />
                <SkillSection skill={'react native'} progress={'70%'} width={'70%'} />
                <SkillSection skill={'React Js'} progress={'60%'} width={'60%'} />
                <SkillSection skill={'Node Js'} progress={'50%'} width={'50%'} />
                <SkillSection skill={'Python'} progress={'60%'} width={'60%'} />
                <SkillSection skill={'html/css'} progress={'60%'} width={'60%'} />
                <SkillSection skill={'Java'} progress={'40%'} width={'40%'} />
                <SkillSection skill={'Web Design'} progress={'25%'} width={'25%'} />
                <SkillSection skill={'UI/Ux Design'} progress={'50%'} width={'50%'} />
          </div>
          <Title title={'Services'} span={'Services'} />
          <div className="servives-container">
                <ServicesSection image={intelligence} title={'Mobile development'} 
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />
                <ServicesSection image={design} title={'Web Development'} 
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />
                <ServicesSection image={gamedev} title={'Game Development'} 
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />

                
            </div>


      </div>


    );
}
 
export default AboutPage;
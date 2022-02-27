import { Fragment, useState } from 'react'

import SkillData from '../../../data/skill.json'

import SkillsIcons from './SkillsIcons'

import { SectionTitle, SectionSubtitle } from '../../../styles/Style'

import {
  SkillsContainer,
  SkillsContent,
  SkillsTitle,
  SkillsBox,
  SkillsGroup,
  SkillsData,
  SkillsName,
  SkillsLevel,
} from './Style'

const index = () => {
  const [data, setData] = useState(SkillData)

  return (
    <Fragment>
      <section className="skills section" id="skills">
        <SectionSubtitle>My abilities</SectionSubtitle>
        <SectionTitle>My Skills</SectionTitle>

        <SkillsContainer className="container grid">
          {data.map((result, index) => (
            <SkillsContent key={index}>
              <SkillsTitle>
                <SkillsIcons icon={result.category} />
                {result.category}
              </SkillsTitle>
              <SkillsBox>
                {result.skillGroup.map((skills, idx) => (
                  <SkillsGroup key={idx}>
                    {skills.map((skill, i) => (
                      <SkillsData key={i}>
                        <SkillsIcons icon={skill.skillName} />

                        <div className="">
                          <SkillsName>{skill.skillName}</SkillsName>
                          <SkillsLevel>{skill.skillLevel}</SkillsLevel>
                        </div>
                      </SkillsData>
                    ))}
                  </SkillsGroup>
                ))}
              </SkillsBox>
            </SkillsContent>
          ))}
        </SkillsContainer>
      </section>
    </Fragment>
  )
}

export default index

'use client'
type Skill = {
    name: string,
    value: number,
    category: string,
    unit: string,
};

type SkillProps = {
    skills: Skill[];
};
// import { useTranslation } from 'react-i18next';
import { translate } from '../helpers/lang';
const Skill = ({ skills }: SkillProps) => {
    // const { t } = useTranslation();
    return (
        <>
            <div className="container w-full text-base mt-10">
                <h2 className="section-title">{translate('skills_and_competencies')}</h2>
                <div className="flex">
                    <div className="w-1/2 mx-2">
                        {skills.filter((skill: { value: number; category: string; unit: string; name: string; }) => skill.category === 'teknis')
                            .map((skill: { value: number; category: string; unit: string; name: string; }) =>
                            (<div key={skill.name}>
                                {skill.name}
                                <div className="w-full bg-gray-200 dark:bg-neutral-600 mb-3" key={skill.name}>
                                    <div
                                        className="bg-primary py-0.5 pr-2 text-end text-xs font-medium leading-none text-white" style={{ width: `${skill.value}%` }}>
                                        {skill.value}%
                                    </div>
                                </div>
                            </div>
                            ))
                        }
                    </div>
                    <div className="w-1/2 mx-2">
                        {skills.filter((skill: { value: number; category: string; unit: string; name: string; }) => skill.category === 'other')
                            .map((skill: { value: number; category: string; unit: string; name: string; }) =>
                            (<div key={skill.name}>
                                {skill.name}
                                <div className="w-full bg-gray-200 dark:bg-neutral-600 mb-3" key={skill.name}>
                                    <div
                                        className="bg-primary p-0.5 pr-2 text-end text-sm font-medium leading-none text-white" style={{ width: `${skill.value}%` }}>
                                        {skill.value}%
                                    </div>
                                </div>
                            </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default Skill;
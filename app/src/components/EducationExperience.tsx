'use client'
interface ObjectProps {
    educations: Array<{
        name: string;
        description: string;
        year_start: string;
        year_end: string;
        details: string[];
    }>;
    experiences: Array<{
        name: string;
        description: string;
        year_start: string;
        year_end: string;
        details: string[];
    }>;
}
import { useTranslation } from 'react-i18next';
export default function EducationExperience({ educations, experiences }: ObjectProps) {
    const { t } = useTranslation();
    return (
        <div className="container my-10">
            <h2 className="section-title">{t('education & experience')}</h2>
            <div className="flex">
                <div className="w-1/2">
                    <div className="-my-6">
                        {educations.map((education, index) => (
                            <div className="relative pl-8 sm:pl-32 py-6 group" key={`${education.name}-${index}`}>
                                <div className="font-caveat font-medium text-2xl text-primary mb-1 sm:mb-0">{education.name}</div>
                                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-30 h-6 mb-3 sm:mb-0 text-white bg-primary rounded-none">{education.year_start} - {education.year_end}</time>
                                    <div className="text-xl font-bold text-slate-900">{education.description}</div>
                                </div>
                                <div className="text-slate-500">
                                    <ul className="list-none">
                                        {education.details.map((value) =>
                                            <li>{value}</li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </div>
                <div className="w-1/2">
                    <div className="-my-6">
                        {experiences.map((experience, index) => (
                            <div className="relative pl-8 sm:pl-32 py-6 group" key={`${experience.name}-${index}`}>
                                <div className="font-caveat font-medium text-2xl text-primary mb-1 sm:mb-0">{experience.name}</div>
                                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-30 h-6 mb-3 sm:mb-0 text-white bg-primary rounded-none">{experience.year_start} - {experience.year_end}</time>
                                    <div className="text-xl font-bold text-slate-900">{experience.description}</div>
                                </div>
                                <div className="text-slate-500">
                                    <ul className="list-none">
                                        {experience.details.map((value) =>
                                            <li>{value}</li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
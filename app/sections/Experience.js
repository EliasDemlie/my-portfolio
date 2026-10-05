import { FiBriefcase, FiCalendar } from 'react-icons/fi';
import { experiences } from '../data/profile';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';

export default function Experience() {
    return (
        <section id="experience" className="section">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <SectionHeading eyebrow="My journey" title="Work Experience" />

                <ol className="relative ml-3 border-l border-white/10 sm:ml-6">
                    {experiences.map((exp, i) => (
                        <li key={exp.company} className="relative mb-12 pl-8 last:mb-0 sm:pl-12">
                            {/* Timeline node */}
                            <span className="absolute -left-[13px] top-1 grid h-6 w-6 place-items-center rounded-full bg-slate-950 ring-2 ring-cyan-400">
                                <span className={`h-2.5 w-2.5 rounded-full bg-cyan-400 ${i === 0 ? 'animate-pulse' : ''}`} />
                            </span>

                            <Reveal delay={i * 100}>
                                <div className="glass-card group p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 sm:p-8">
                                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                        <div>
                                            <h3 className="font-display text-xl font-bold text-white transition group-hover:text-cyan-300">{exp.role}</h3>
                                            <p className="mt-1 inline-flex items-center gap-2 text-slate-300">
                                                <FiBriefcase className="text-cyan-400" /> {exp.company}
                                            </p>
                                        </div>
                                        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold tracking-wider text-cyan-300">
                                            <FiCalendar /> {exp.period}
                                        </span>
                                    </div>
                                    <ul className="mt-5 space-y-2.5">
                                        {exp.points.map(point => (
                                            <li key={point} className="flex gap-3 text-slate-400">
                                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-6 flex flex-wrap gap-2">
                                        {exp.tags.map(tag => (
                                            <span key={tag} className="rounded-md bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-300">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Reveal>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}

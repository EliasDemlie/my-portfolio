import { skillGroups } from '../data/profile';
import { skillIcons } from '../components/icons';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';

export default function Skills() {
    return (
        <section id="skills" className="section">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    eyebrow="What I work with"
                    title="Tech Skills"
                    subtitle="Languages, frameworks, databases, and tools I use to build web and mobile applications end to end."
                />

                <div className="grid gap-6 md:grid-cols-2">
                    {skillGroups.map((group, gi) => (
                        <Reveal key={group.title} delay={gi * 100}>
                            <div className="glass-card h-full p-6 sm:p-8">
                                <h3 className="font-display text-lg font-bold text-white">
                                    <span className="text-cyan-400">0{gi + 1}.</span> {group.title}
                                </h3>
                                <ul className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-4">
                                    {group.skills.map(skill => {
                                        const Icon = skillIcons[skill.icon];
                                        return (
                                            <li
                                                key={skill.name}
                                                title={skill.name}
                                                className="group flex flex-col items-center justify-center gap-2 rounded-xl border border-white/5 bg-white/[0.02] p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/5 hover:shadow-[0_8px_30px_rgba(34,211,238,0.12)]"
                                            >
                                                <Icon className="text-3xl text-slate-400 transition-all duration-300 group-hover:scale-110 group-hover:text-cyan-400" />
                                                <span className="text-xs font-medium leading-tight text-slate-300">{skill.name}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

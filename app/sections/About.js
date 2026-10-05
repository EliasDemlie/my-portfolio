import { FiMail, FiPhone, FiMapPin, FiGlobe, FiAward, FiCheckCircle } from 'react-icons/fi';
import { profile, education, softSkills } from '../data/profile';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';

export default function About() {
    const details = [
        { icon: FiMail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
        { icon: FiPhone, label: 'Phone', value: profile.phone, href: profile.phoneHref },
        { icon: FiMapPin, label: 'Location', value: profile.location },
        { icon: FiGlobe, label: 'Languages', value: profile.languages.join(', ') },
    ];

    return (
        <section id="about" className="section">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading eyebrow="Get to know me" title="About Me" />

                <div className="grid gap-10 lg:grid-cols-5">
                    <Reveal from="left" className="lg:col-span-3">
                        <div className="glass-card h-full p-8">
                            <h3 className="font-display text-2xl font-bold text-white">
                                {profile.title}
                            </h3>
                            <p className="mt-4 leading-relaxed text-slate-300">{profile.about}</p>

                            <div className="mt-8 grid gap-4 sm:grid-cols-2">
                                {details.map(({ icon: Icon, label, value, href }) => {
                                    const content = (
                                        <>
                                            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-cyan-400/10 text-lg text-cyan-400 transition group-hover:bg-cyan-400 group-hover:text-slate-950">
                                                <Icon />
                                            </span>
                                            <span className="min-w-0">
                                                <span className="block text-xs uppercase tracking-widest text-slate-500">{label}</span>
                                                <span className="block break-words text-sm font-medium text-slate-200">{value}</span>
                                            </span>
                                        </>
                                    );
                                    const cls = 'group flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition hover:border-cyan-400/30';
                                    return href ? (
                                        <a key={label} href={href} className={cls}>{content}</a>
                                    ) : (
                                        <div key={label} className={cls}>{content}</div>
                                    );
                                })}
                            </div>
                        </div>
                    </Reveal>

                    <div className="flex flex-col gap-6 lg:col-span-2">
                        <Reveal from="right">
                            <div className="glass-card relative overflow-hidden p-8">
                                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-indigo-500/20 blur-2xl" />
                                <div className="flex items-center gap-3 text-cyan-400">
                                    <FiAward className="text-2xl" />
                                    <span className="text-sm font-semibold uppercase tracking-widest">Education</span>
                                </div>
                                <h3 className="mt-4 font-display text-xl font-bold text-white">{education.degree}</h3>
                                <p className="mt-1 text-slate-300">{education.school}</p>
                                <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
                                    <span className="rounded-full bg-white/5 px-3 py-1 text-slate-300">{education.period}</span>
                                    <span className="rounded-full bg-cyan-400/10 px-3 py-1 font-semibold text-cyan-300">CGPA {education.cgpa}</span>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal from="right" delay={150}>
                            <div className="glass-card p-8">
                                <span className="text-sm font-semibold uppercase tracking-widest text-cyan-400">Soft Skills</span>
                                <ul className="mt-4 space-y-3">
                                    {softSkills.map(skill => (
                                        <li key={skill} className="flex items-center gap-3 text-slate-300">
                                            <FiCheckCircle className="shrink-0 text-cyan-400" /> {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}

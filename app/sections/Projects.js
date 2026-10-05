import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';
import { projects } from '../data/profile';
import { featureIcons } from '../components/icons';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';

export default function Projects() {
    return (
        <section id="projects" className="section">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    eyebrow="Recent work"
                    title="Featured Projects"
                    subtitle="Platforms I've built across backend, web, and mobile during my professional experience."
                />

                <div className="grid gap-8 md:grid-cols-2">
                    {projects.map((project, i) => {
                        const Icon = featureIcons[project.icon];
                        return (
                            <Reveal key={project.title} delay={(i % 2) * 120}>
                                <article className="glass-card group flex h-full flex-col overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_20px_50px_rgba(34,211,238,0.12)]">
                                    <div className="relative h-52 overflow-hidden">
                                        {project.imgUrl ? (
                                            <Image
                                                src={project.imgUrl}
                                                alt={project.title}
                                                fill
                                                sizes="(min-width: 768px) 50vw, 100vw"
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                        ) : (
                                            // Placeholder shown until a screenshot is provided
                                            <div className="relative grid h-full w-full place-items-center bg-gradient-to-br from-slate-800 via-slate-900 to-indigo-950">
                                                <div className="bg-grid absolute inset-0 opacity-60" />
                                                <div className="absolute h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl transition-transform duration-700 group-hover:scale-150" />
                                                <Icon className="relative text-6xl text-cyan-400 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110" />
                                            </div>
                                        )}
                                        <span className="absolute left-4 top-4 rounded-full bg-slate-950/70 px-3 py-1 font-mono text-xs text-cyan-300 backdrop-blur">
                                            0{i + 1}
                                        </span>
                                    </div>

                                    <div className="flex flex-1 flex-col p-6 sm:p-8">
                                        <h3 className="font-display text-xl font-bold text-white transition group-hover:text-cyan-300">{project.title}</h3>
                                        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{project.description}</p>
                                        <div className="mt-6 flex flex-wrap gap-2">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="rounded-md border border-cyan-400/20 bg-cyan-400/5 px-2.5 py-1 text-xs font-medium text-cyan-300">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mt-6 inline-flex w-fit items-center gap-1 font-semibold text-cyan-400 transition hover:gap-2"
                                            >
                                                View Project <FiArrowUpRight />
                                            </a>
                                        )}
                                    </div>
                                </article>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

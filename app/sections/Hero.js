import Image from 'next/image';
import Link from 'next/link';
import { FiDownload, FiArrowRight, FiMapPin } from 'react-icons/fi';
import { profile, socials, stats } from '../data/profile';
import { socialIcons } from '../components/icons';
import Typewriter from '../components/Typewriter';
import Reveal from '../components/Reveal';

export default function Hero() {
    return (
        <section id="home" className="relative overflow-hidden pt-28 pb-20 lg:pt-36">
            {/* Animated background */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
                <div className="absolute -left-32 top-10 h-96 w-96 animate-blob rounded-full bg-cyan-500/20 blur-3xl" />
                <div className="absolute right-0 top-40 h-96 w-96 animate-blob rounded-full bg-indigo-500/20 blur-3xl [animation-delay:3s]" />
                <div className="absolute bottom-0 left-1/3 h-72 w-72 animate-blob rounded-full bg-sky-500/10 blur-3xl [animation-delay:6s]" />
                <div className="bg-grid absolute inset-0" />
            </div>

            <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
                {/* Intro */}
                <div className="order-2 text-center lg:order-1 lg:text-left">
                    <Reveal>
                        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-sm font-medium text-cyan-300">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                            </span>
                            {profile.title}
                        </span>
                    </Reveal>

                    <Reveal delay={100}>
                        <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
                            Hello, I&apos;m <br />
                            <span className="text-gradient">{profile.name}</span>
                        </h1>
                    </Reveal>

                    <Reveal delay={200}>
                        <p className="mt-4 h-8 font-mono text-lg text-slate-300 sm:text-xl">
                            <Typewriter words={profile.roles} />
                        </p>
                    </Reveal>

                    <Reveal delay={300}>
                        <p className="mx-auto mt-6 max-w-xl leading-relaxed text-slate-400 lg:mx-0">{profile.about}</p>
                        <p className="mt-4 inline-flex items-center gap-2 text-sm text-slate-400">
                            <FiMapPin className="text-cyan-400" /> {profile.location}
                        </p>
                    </Reveal>

                    <Reveal delay={400}>
                        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
                            <a
                                href={profile.cvUrl}
                                download="Elias_Demlie_CV.pdf"
                                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 px-8 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-cyan-500/50"
                            >
                                <FiDownload className="transition-transform group-hover:translate-y-0.5" /> Download CV
                            </a>
                            <Link
                                href="/#contact"
                                className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-3 font-semibold text-white transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400"
                            >
                                Let&apos;s Talk <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>

                        <div className="mt-8 flex justify-center gap-4 lg:justify-start">
                            {socials.map(social => {
                                const Icon = socialIcons[social.id];
                                return (
                                    <a
                                        key={social.id}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        className="grid h-11 w-11 place-items-center rounded-full border border-cyan-400/40 text-lg text-cyan-400 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400 hover:text-slate-950 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]"
                                    >
                                        <Icon />
                                    </a>
                                );
                            })}
                        </div>
                    </Reveal>
                </div>

                {/* Photo */}
                <Reveal from="scale" className="order-1 flex justify-center lg:order-2">
                    <div className="relative h-64 w-64 animate-float sm:h-80 sm:w-80 lg:h-96 lg:w-96">
                        <div className="absolute -inset-1 animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,#22d3ee,#6366f1,#0ea5e9,#22d3ee)] opacity-80 blur-sm" />
                        <div className="absolute inset-1 overflow-hidden rounded-full bg-slate-900">
                            <Image
                                src={profile.photo}
                                alt={profile.name}
                                fill
                                sizes="(min-width: 1024px) 384px, (min-width: 640px) 320px, 256px"
                                className="object-cover object-top"
                                priority
                            />
                        </div>
                    </div>
                </Reveal>
            </div>

            {/* Stats */}
            <div className="relative mx-auto mt-20 grid max-w-3xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:px-8">
                {stats.map((stat, i) => (
                    <Reveal key={stat.label} delay={i * 120}>
                        <div className="glass-card group p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40">
                            <p className="font-display text-4xl font-extrabold text-gradient">{stat.value}</p>
                            <p className="mt-2 text-sm uppercase tracking-widest text-slate-400 group-hover:text-slate-300">{stat.label}</p>
                        </div>
                    </Reveal>
                ))}
            </div>

            {/* Scroll cue */}
            <Link href="/#about" aria-label="Scroll to About" className="relative mx-auto mt-16 hidden h-12 w-7 justify-center rounded-full border-2 border-slate-600 pt-2 lg:flex">
                <span className="h-2 w-1 animate-scroll-cue rounded-full bg-cyan-400" />
            </Link>
        </section>
    );
}

import Link from 'next/link';
import { navLinks, profile, socials } from '../data/profile';
import { socialIcons } from './icons';

export default function Footer() {
    return (
        <footer className="relative border-t border-white/5 bg-slate-950">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
                    <div className="text-center md:text-left">
                        <p className="font-display text-2xl font-bold text-white">
                            {profile.name.split(' ')[0]} <span className="text-cyan-400">{profile.name.split(' ')[1]}</span>
                        </p>
                        <p className="mt-2 text-sm text-slate-400">{profile.title} · {profile.location}</p>
                    </div>

                    <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-400">
                        {navLinks.map(link => (
                            <Link key={link.id} href={`/#${link.id}`} className="transition hover:text-cyan-400">
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex gap-3">
                        {socials.map(social => {
                            const Icon = socialIcons[social.id];
                            return (
                                <a
                                    key={social.id}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
                                >
                                    <Icon />
                                </a>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-10 border-t border-white/5 pt-6 text-center text-sm text-slate-500">
                    &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

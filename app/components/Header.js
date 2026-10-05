"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FiMenu, FiX, FiDownload } from 'react-icons/fi';
import { navLinks, profile } from '../data/profile';

export default function Header() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [progress, setProgress] = useState(0);
    const [active, setActive] = useState('home');

    // Background blur + scroll progress bar
    useEffect(() => {
        const onScroll = () => {
            const max = document.documentElement.scrollHeight - window.innerHeight;
            setScrolled(window.scrollY > 20);
            setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Highlight the section currently in view (home page only)
    useEffect(() => {
        if (pathname !== '/') return;
        const sections = navLinks.map(link => document.getElementById(link.id)).filter(Boolean);
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) setActive(entry.target.id);
                });
            },
            { rootMargin: '-45% 0px -50% 0px' }
        );
        sections.forEach(section => observer.observe(section));
        return () => observer.disconnect();
    }, [pathname]);

    // Close the mobile menu with Escape
    useEffect(() => {
        if (!open) return;
        const onKey = e => e.key === 'Escape' && setOpen(false);
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [open]);

    const isActive = id => pathname === '/' && active === id;

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
                scrolled ? 'border-b border-white/5 bg-slate-950/70 backdrop-blur-xl shadow-lg shadow-black/20' : 'bg-transparent'
            }`}
        >
            <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
                <Link href="/#home" className="group flex items-center gap-2 font-display text-2xl font-bold tracking-wide text-white">
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-cyan-400 to-indigo-500 text-base text-slate-950 transition-transform duration-300 group-hover:rotate-12">
                        ED
                    </span>
                    <span>
                        {profile.shortName.split(' ')[0]}
                        <span className="text-cyan-400"> {profile.shortName.split(' ')[1]}</span>
                    </span>
                </Link>

                {/* Desktop */}
                <div className="hidden items-center gap-1 lg:flex">
                    {navLinks.map(link => (
                        <Link
                            key={link.id}
                            href={`/#${link.id}`}
                            className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                                isActive(link.id) ? 'text-cyan-400' : 'text-slate-300 hover:text-white'
                            }`}
                        >
                            {link.label}
                            <span
                                className={`absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-cyan-400 transition-transform duration-300 ${
                                    isActive(link.id) ? 'scale-x-100' : 'scale-x-0'
                                }`}
                            />
                        </Link>
                    ))}
                    <a
                        href={profile.cvUrl}
                        download="Elias_Demlie_CV.pdf"
                        className="ml-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/60 px-5 py-2 text-sm font-semibold text-cyan-400 transition-all duration-300 hover:bg-cyan-400 hover:text-slate-950 hover:shadow-[0_0_25px_rgba(34,211,238,0.45)]"
                    >
                        <FiDownload /> CV
                    </a>
                </div>

                {/* Mobile toggle */}
                <button
                    type="button"
                    aria-label="Open menu"
                    aria-expanded={open}
                    onClick={() => setOpen(true)}
                    className="rounded-lg p-2 text-2xl text-cyan-400 transition hover:bg-white/5 lg:hidden"
                >
                    <FiMenu />
                </button>
            </nav>

            {/* Scroll progress */}
            <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-500" style={{ width: `${progress}%` }} />

            {/* Mobile drawer */}
            <div className={`fixed inset-0 z-50 overflow-hidden lg:hidden transition-[visibility] ${open ? 'visible' : 'invisible delay-300'}`}>
                <div
                    onClick={() => setOpen(false)}
                    className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
                />
                <aside
                    className={`absolute right-0 top-0 flex h-full w-72 flex-col overflow-y-auto border-l border-white/10 bg-slate-900 px-6 py-6 transition-transform duration-300 ${
                        open ? 'translate-x-0' : 'translate-x-full'
                    }`}
                >
                    <button
                        type="button"
                        aria-label="Close menu"
                        onClick={() => setOpen(false)}
                        className="self-end rounded-lg p-2 text-2xl text-cyan-400 transition hover:bg-white/5"
                    >
                        <FiX />
                    </button>
                    <div className="mt-6 flex flex-col gap-1">
                        {navLinks.map(link => (
                            <Link
                                key={link.id}
                                href={`/#${link.id}`}
                                onClick={() => setOpen(false)}
                                className={`rounded-lg px-4 py-3 font-medium tracking-wide transition ${
                                    isActive(link.id) ? 'bg-cyan-400/10 text-cyan-400' : 'text-slate-300 hover:bg-white/5 hover:text-white'
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                    <a
                        href={profile.cvUrl}
                        download="Elias_Demlie_CV.pdf"
                        className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 px-5 py-3 font-semibold text-slate-950"
                    >
                        <FiDownload /> Download CV
                    </a>
                </aside>
            </div>
        </header>
    );
}

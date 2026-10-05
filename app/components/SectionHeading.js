import Reveal from './Reveal';

export default function SectionHeading({ eyebrow, title, subtitle }) {
    return (
        <Reveal className="mb-14 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">{eyebrow}</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">{title}</h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500" />
            {subtitle && <p className="mx-auto mt-5 max-w-2xl text-slate-400">{subtitle}</p>}
        </Reveal>
    );
}

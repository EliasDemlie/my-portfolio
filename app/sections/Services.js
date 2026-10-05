import { services } from '../data/profile';
import { featureIcons } from '../components/icons';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';

export default function Services() {
    return (
        <section id="services" className="section">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading eyebrow="What I do" title="Services" />

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, i) => {
                        const Icon = featureIcons[service.icon];
                        return (
                            <Reveal key={service.title} delay={i * 100}>
                                <div className="glass-card group relative h-full overflow-hidden p-8 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40">
                                    <div className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-cyan-400 to-indigo-500 transition-transform duration-500 group-hover:scale-x-100" />
                                    <span className="font-mono text-sm text-slate-500">0{i + 1}</span>
                                    <div className="mt-4 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-indigo-500/20 text-2xl text-cyan-400 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                                        <Icon />
                                    </div>
                                    <h3 className="mt-6 font-display text-xl font-bold text-white">{service.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-slate-400">{service.description}</p>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

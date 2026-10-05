"use client";
import { useState } from 'react';
import axios from 'axios';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from 'react-icons/fi';
import { profile, socials } from '../data/profile';
import { socialIcons } from '../components/icons';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';

const inputClass =
    'peer block w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 pb-3 pt-6 text-white placeholder-transparent outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10';
const labelClass =
    'pointer-events-none absolute left-4 top-2 text-xs text-slate-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-cyan-400';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [sent, setSent] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const sendEmail = async e => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage('');
        setSent(false);

        try {
            const response = await axios.post('/api/mailer', {
                subject: `New message from: ${formData.email} (${formData.name})`,
                text: formData.message,
            });
            if (response.status === 200) {
                setSent(true);
                setFormData({ name: '', email: '', message: '' });
            }
        } catch (error) {
            console.error('Error sending email:', error);
            setErrorMessage('Failed to send your message. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const contactItems = [
        { icon: FiMail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
        { icon: FiPhone, label: 'Phone', value: profile.phone, href: profile.phoneHref },
        { icon: FiMapPin, label: 'Location', value: profile.location },
    ];

    return (
        <section id="contact" className="section">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    eyebrow="Let's work together"
                    title="Get In Touch"
                    subtitle="Have a project in mind or an opportunity to discuss? Send me a message and I'll get back to you."
                />

                <div className="grid gap-8 lg:grid-cols-5">
                    <Reveal from="left" className="lg:col-span-2">
                        <div className="glass-card flex h-full flex-col gap-4 p-8">
                            {contactItems.map(({ icon: Icon, label, value, href }) => {
                                const content = (
                                    <>
                                        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-indigo-500/20 text-xl text-cyan-400 transition group-hover:scale-110">
                                            <Icon />
                                        </span>
                                        <span className="min-w-0">
                                            <span className="block text-xs uppercase tracking-widest text-slate-500">{label}</span>
                                            <span className="block break-words font-medium text-slate-200 transition group-hover:text-cyan-300">{value}</span>
                                        </span>
                                    </>
                                );
                                const cls = 'group flex items-center gap-4 rounded-xl p-3 transition hover:bg-white/[0.03]';
                                return href ? (
                                    <a key={label} href={href} className={cls}>{content}</a>
                                ) : (
                                    <div key={label} className={cls}>{content}</div>
                                );
                            })}

                            <div className="mt-auto border-t border-white/5 pt-6">
                                <p className="text-xs uppercase tracking-widest text-slate-500">Find me online</p>
                                <div className="mt-4 flex gap-3">
                                    {socials.map(social => {
                                        const Icon = socialIcons[social.id];
                                        return (
                                            <a
                                                key={social.id}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={social.label}
                                                className="grid h-11 w-11 place-items-center rounded-full border border-cyan-400/40 text-cyan-400 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400 hover:text-slate-950"
                                            >
                                                <Icon />
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal from="right" className="lg:col-span-3">
                        <form onSubmit={sendEmail} className="glass-card grid gap-5 p-8">
                            <div className="grid gap-5 sm:grid-cols-2">
                                <div className="relative">
                                    <input id="name" name="name" type="text" placeholder="Name" value={formData.name} onChange={handleChange} className={inputClass} required />
                                    <label htmlFor="name" className={labelClass}>Your Name</label>
                                </div>
                                <div className="relative">
                                    <input id="email" name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} className={inputClass} required />
                                    <label htmlFor="email" className={labelClass}>Your Email</label>
                                </div>
                            </div>
                            <div className="relative">
                                <textarea id="message" name="message" rows={6} placeholder="Message" value={formData.message} onChange={handleChange} className={`${inputClass} resize-none`} required />
                                <label htmlFor="message" className={labelClass}>Your Message</label>
                            </div>

                            {errorMessage && <p className="text-sm text-red-400">{errorMessage}</p>}
                            {sent && (
                                <p className="inline-flex items-center gap-2 text-sm text-emerald-400">
                                    <FiCheckCircle /> Your message has been sent!
                                </p>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 px-8 py-3.5 font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-cyan-500/50 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {loading ? 'Sending...' : 'Send Message'}
                                <FiSend className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                            </button>
                        </form>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

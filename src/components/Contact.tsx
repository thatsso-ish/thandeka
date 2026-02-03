
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';

const Contact = () => {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus('submitting');

        const form = e.currentTarget;
        const data = new FormData(form);

        try {
            const response = await fetch('https://formspree.io/f/xdadrddk', {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setFormStatus('success');
                form.reset();
            } else {
                setFormStatus('error');
            }
        } catch (error) {
            setFormStatus('error');
        }
    };

    return (
        <section id="contact" className="py-8 md:py-12 bg-brand-brown text-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-clay/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-brand-clay font-bold tracking-wider mb-2 block">GET IN TOUCH</span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Build Something<br />Amazing Together.</h2>
                        <p className="text-brand-tan/80 text-lg mb-10 max-w-md">
                            Open for opportunities in Software Development, AI Engineering, and Data Analysis.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-clay">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Email Me</p>
                                    <a href="mailto:thandekambokazi67@gmail.com" className="text-lg font-medium hover:text-brand-clay transition-colors">thandekambokazi67@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-clay">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Call Me</p>
                                    <a href="tel:+27715262779" className="text-lg font-medium hover:text-brand-clay transition-colors">071 526 2779</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-clay">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Location</p>
                                    <p className="text-lg font-medium">Midrand</p>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-white/10 mt-6">
                                <p className="text-sm text-gray-400 mb-4">Social Profiles</p>
                                <div className="flex gap-4">
                                    <a
                                        href="https://www.linkedin.com/in/thandeka-mbokazi-ba076229b/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-clay hover:bg-brand-clay hover:text-white transition-all transform hover:scale-110"
                                    >
                                        <Linkedin size={20} />
                                    </a>
                                    <a
                                        href="https://github.com/ThandekaMbokazi"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-clay hover:bg-brand-clay hover:text-white transition-all transform hover:scale-110"
                                    >
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-3xl p-8 md:p-10 text-brand-brown"
                    >
                        {formStatus === 'success' ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-12"
                            >
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                                    <Send size={32} />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                                <p className="text-gray-600">Thank you for reaching out. I'll get back to you shortly.</p>
                                <button
                                    onClick={() => setFormStatus('idle')}
                                    className="mt-6 text-brand-clay font-medium hover:underline"
                                >
                                    Send another message
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="firstName" className="text-sm font-semibold uppercase tracking-wider text-gray-500">First Name</label>
                                        <motion.input
                                            whileFocus={{ scale: 1.02, borderColor: '#D18F77' }}
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            required
                                            className="w-full bg-brand-beige/50 border border-brand-tan rounded-lg px-4 py-3 focus:outline-none focus:border-brand-clay transition-colors"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="lastName" className="text-sm font-semibold uppercase tracking-wider text-gray-500">Last Name</label>
                                        <motion.input
                                            whileFocus={{ scale: 1.02, borderColor: '#D18F77' }}
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            required
                                            className="w-full bg-brand-beige/50 border border-brand-tan rounded-lg px-4 py-3 focus:outline-none focus:border-brand-clay transition-colors"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-semibold uppercase tracking-wider text-gray-500">Email Address</label>
                                    <motion.input
                                        whileFocus={{ scale: 1.02, borderColor: '#D18F77' }}
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full bg-brand-beige/50 border border-brand-tan rounded-lg px-4 py-3 focus:outline-none focus:border-brand-clay transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-semibold uppercase tracking-wider text-gray-500">Message</label>
                                    <motion.textarea
                                        whileFocus={{ scale: 1.02, borderColor: '#D18F77' }}
                                        id="message"
                                        name="message"
                                        rows={4}
                                        required
                                        className="w-full bg-brand-beige/50 border border-brand-tan rounded-lg px-4 py-3 focus:outline-none focus:border-brand-clay transition-colors resize-none"
                                        placeholder="Tell me about your project..."
                                    ></motion.textarea>
                                </div>

                                {formStatus === 'error' && (
                                    <div className="text-red-500 text-sm text-center">
                                        Something went wrong. Please try again later.
                                    </div>
                                )}

                                <motion.button
                                    whileHover={{ scale: 1.02, backgroundColor: "#5D4037" }}
                                    whileTap={{ scale: 0.95 }}
                                    type="submit"
                                    disabled={formStatus === 'submitting'}
                                    className={`w-full bg-brand-clay text-white font-bold py-4 rounded-lg hover:bg-brand-brown transition-colors flex items-center justify-center gap-2 group ${formStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >
                                    {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                                    {formStatus !== 'submitting' && <Send size={18} className="group-hover:translate-x-1 transition-transform" />}
                                </motion.button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

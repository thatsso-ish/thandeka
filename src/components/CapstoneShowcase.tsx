import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Github, Activity } from 'lucide-react';

const CapstoneShowcase = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="py-16 md:py-24 bg-white relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-center gap-12"
                >
                    <div className="w-full md:w-1/2">
                        <div className="relative group rounded-2xl overflow-hidden shadow-2xl border-4 border-brand-tan/20">
                            {/* Project Media Container */}
                            <div className="bg-brand-brown aspect-video flex items-center justify-center relative overflow-hidden">
                                {!isPlaying ? (
                                    <>
                                        <img
                                            src="/legalease.png"
                                            alt="LegalEase Project Interface"
                                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-black/40"></div>
                                        <div
                                            onClick={() => setIsPlaying(true)}
                                            className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform cursor-pointer"
                                        >
                                            <Play size={32} className="text-white fill-current ml-1" />
                                        </div>
                                        <div className="absolute bottom-4 left-4 right-4 text-white p-4">
                                            <span className="bg-brand-clay px-2 py-1 rounded text-xs font-bold uppercase mb-2 inline-block">Featured Project</span>
                                        </div>
                                    </>
                                ) : (
                                    <video
                                        src="/thandeka.mp4"
                                        controls
                                        autoPlay
                                        className="w-full h-full object-cover"
                                    />
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2">
                        <div className="flex items-center gap-2 text-brand-clay font-bold tracking-wider mb-2">
                            <Activity size={20} />
                            <span>CAPSTONE PROJECT</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-brand-brown mb-6">LegalEase</h2>
                        <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                            An AI-powered legal assistant that leverages Google's Gemini models to simplify complex legal documents and make legal understanding accessible.
                        </p>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-brand-tan/50 flex items-center justify-center mt-1 text-brand-clay font-bold text-xs">1</div>
                                <p className="text-gray-600"><strong>Smart Simplification:</strong> Instantly translates dense legal jargon into clear, plain English.</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-brand-tan/50 flex items-center justify-center mt-1 text-brand-clay font-bold text-xs">2</div>
                                <p className="text-gray-600"><strong>Risk Analysis:</strong> Detailed breakdown of contracts to highlight potential pitfalls and obligations.</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-brand-tan/50 flex items-center justify-center mt-1 text-brand-clay font-bold text-xs">3</div>
                                <p className="text-gray-600"><strong>Interactive Q&A:</strong> A natural language interface to ask specific questions about your documents.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <a href="https://legal-ease-seven.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-brand-brown text-white px-6 py-3 rounded-lg font-bold hover:bg-brand-brown/90 transition-colors">
                                <Play size={18} /> Launch App
                            </a>
                            <a href="https://github.com/ThandekaMbokazi/LegalEase1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border-2 border-brand-brown text-brand-brown px-6 py-3 rounded-lg font-bold hover:bg-brand-tan/20 transition-colors">
                                <Github size={18} /> View Code
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CapstoneShowcase;

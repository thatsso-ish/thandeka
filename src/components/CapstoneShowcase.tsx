import { motion } from 'framer-motion';
import { Play, Github, Activity } from 'lucide-react';

const CapstoneShowcase = () => {
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
                            {/* Placeholder for Video/Image */}
                            <div className="bg-brand-brown aspect-video flex items-center justify-center relative">
                                <div className="absolute inset-0 bg-black/40"></div>
                                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform cursor-pointer">
                                    <Play size={32} className="text-white fill-current ml-1" />
                                </div>
                                <div className="absolute bottom-4 left-4 right-4 text-white p-4">
                                    <span className="bg-brand-clay px-2 py-1 rounded text-xs font-bold uppercase mb-2 inline-block">Featured Project</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2">
                        <div className="flex items-center gap-2 text-brand-clay font-bold tracking-wider mb-2">
                            <Activity size={20} />
                            <span>CAPSTONE PROJECT</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-brand-brown mb-6">AI-Driven Crop Disease Detection</h2>
                        <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                            A comprehensive solution designed to assist farmers in early disease detection.
                            Leveraging Computer Vision and deep learning, this system analyzes crop leaf images
                            to identify potential threats and provides actionable recommendations.
                        </p>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-brand-tan/50 flex items-center justify-center mt-1 text-brand-clay font-bold text-xs">1</div>
                                <p className="text-gray-600"><strong>Real-time Analysis:</strong> Immediate feedback on uploaded crop images.</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-brand-tan/50 flex items-center justify-center mt-1 text-brand-clay font-bold text-xs">2</div>
                                <p className="text-gray-600"><strong>High Accuracy:</strong> Trained on a dataset of over 10,000 verified samples.</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-brand-tan/50 flex items-center justify-center mt-1 text-brand-clay font-bold text-xs">3</div>
                                <p className="text-gray-600"><strong>Scalable Architecture:</strong> Built on Azure Cloud for reliability.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <a href="#" className="flex items-center gap-2 bg-brand-brown text-white px-6 py-3 rounded-lg font-bold hover:bg-brand-brown/90 transition-colors">
                                <Play size={18} /> Watch Demo
                            </a>
                            <a href="#" className="flex items-center gap-2 border-2 border-brand-brown text-brand-brown px-6 py-3 rounded-lg font-bold hover:bg-brand-tan/20 transition-colors">
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

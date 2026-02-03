import { motion } from 'framer-motion';
import { User, Database, Brain, Sparkles } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-16 md:py-24 bg-brand-beige relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-brown mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-brand-clay mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold text-brand-brown mb-6">
                            Bridging the Gap Between <span className="text-brand-clay">Data</span> and <span className="text-brand-clay">Decision Making</span>
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                            I am an IT Graduate and AI Associate with a passion for leveraging technology to solve real-world problems.
                            My journey began with a curiosity for how data shapes our interactions, leading me to specialize in
                            Artificial Intelligence and Data Analytics.
                        </p>
                        <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                            With a strong foundation in Microsoft Technologies, Python, and Software Development, I build scalable
                            solutions that not only optimize processes but also provide actionable insights. I thrive in dynamic
                            environments where I can continuously learn and apply cutting-edge technologies.
                        </p>
                        <div className="flex gap-4">
                            <div className="flex items-center gap-2 text-brand-clay font-medium">
                                <Sparkles size={20} />
                                <span>Innovator</span>
                            </div>
                            <div className="flex items-center gap-2 text-brand-clay font-medium">
                                <Brain size={20} />
                                <span>Problem Solver</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-tan/30 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-brand-rose/20 rounded-xl flex items-center justify-center text-brand-clay mb-4">
                                <Brain size={24} />
                            </div>
                            <h4 className="font-bold text-brand-brown mb-2">AI Engineering</h4>
                            <p className="text-sm text-gray-500">Developing intelligent agents and NLP models using Python and Azure AI.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-tan/30 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-brand-rose/20 rounded-xl flex items-center justify-center text-brand-clay mb-4">
                                <Database size={24} />
                            </div>
                            <h4 className="font-bold text-brand-brown mb-2">Data Analytics</h4>
                            <p className="text-sm text-gray-500">Transforming complex datasets into clear, actionable visual stories with Power BI.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-tan/30 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-brand-rose/20 rounded-xl flex items-center justify-center text-brand-clay mb-4">
                                <User size={24} />
                            </div>
                            <h4 className="font-bold text-brand-brown mb-2">Software Dev</h4>
                            <p className="text-sm text-gray-500">Building responsive, full-stack web applications with React and Node.js.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;

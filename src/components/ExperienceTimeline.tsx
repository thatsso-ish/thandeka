import { motion } from 'framer-motion';
import { experience } from '../data/portfolio';
import { Briefcase } from 'lucide-react';

const ExperienceTimeline = () => {
    return (
        <section id="experience" className="py-8 md:py-12 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-brown mb-4">My Journey</h2>
                    <div className="w-20 h-1 bg-brand-clay mx-auto rounded-full"></div>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-brand-beige"></div>

                    {experience.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className={`relative mb-12 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                } items-center w-full`}
                        >
                            {/* Spacer for centering */}
                            <div className="flex-1 w-full"></div>

                            {/* Dot */}
                            <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-brand-ros border-4 border-white shadow-lg flex items-center justify-center z-10 bg-brand-rose">
                                <Briefcase size={14} className="text-brand-brown" />
                            </div>

                            {/* Content Card */}
                            <div className="flex-1 w-full pl-10 md:pl-0 md:px-8">
                                <div className={`bg-brand-beige p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow relative
                  ${index % 2 === 0 ? 'text-left' : 'md:text-right text-left'}
                `}>
                                    {/* Arrow */}
                                    <div className={`hidden md:block absolute top-6 w-4 h-4 bg-brand-beige transform rotate-45 
                     ${index % 2 === 0 ? '-right-2' : '-left-2'}
                   `}></div>

                                    <span className="inline-block px-3 py-1 bg-brand-tan/50 text-brand-brown text-xs font-bold rounded-full mb-3">
                                        {exp.period}
                                    </span>
                                    <h3 className="text-xl font-bold text-brand-brown mb-1">{exp.role}</h3>
                                    <h4 className="text-brand-clay font-medium mb-3">{exp.company}</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">{exp.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceTimeline;

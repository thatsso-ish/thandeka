import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';
import { Code2, Brain, Workflow, Layout, LineChart } from 'lucide-react';

const getIcon = (name: string) => {
    const iconProps = { className: "w-8 h-8 text-brand-clay mb-3" };
    if (name.includes('Python') || name.includes('TypeScript') || name.includes('React')) return <Code2 {...iconProps} />;
    if (name.includes('Data') || name.includes('SQL') || name.includes('Power BI')) return <LineChart {...iconProps} />;
    if (name.includes('Generative AI') || name.includes('AI')) return <Brain {...iconProps} />;
    if (name.includes('Power Platform')) return <Workflow {...iconProps} />;
    return <Layout {...iconProps} />;
};

const SkillsGrid = () => {
    return (
        <section id="skills" className="py-8 md:py-12 bg-brand-beige/30">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-brown mb-4">Technical Proficiency</h2>
                    <div className="w-20 h-1 bg-brand-clay mx-auto rounded-full mb-4"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">A robust toolkit enabling End-to-End AI Solutions, Data Analytics, and Full Stack Development.</p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all text-center group cursor-default"
                        >
                            <div className="flex justify-center group-hover:scale-110 transition-transform duration-300">
                                {skill.icon ? (
                                    <div dangerouslySetInnerHTML={{ __html: skill.icon }} className="mb-3" />
                                ) : (
                                    getIcon(skill.name)
                                )}
                            </div>
                            <h3 className="text-lg font-semibold text-brand-brown group-hover:text-brand-clay transition-colors">{skill.name}</h3>
                            <span className="text-xs text-brand-tan uppercase tracking-wide mt-2 block font-bold">{skill.category}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsGrid;

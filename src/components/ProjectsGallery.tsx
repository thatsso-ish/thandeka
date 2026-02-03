
import { motion } from 'framer-motion';
import { projects } from '../data/portfolio';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const ProjectsGallery = () => {
    return (
        <section id="projects" className="py-8 md:py-12 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-brown mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-brand-clay mx-auto rounded-full mb-4"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">Showcasing innovation in AI, Web Development, and Data Science.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-brand-beige rounded-2xl overflow-hidden hover:shadow-xl transition-shadow flex flex-col group"
                        >
                            <div className="h-48 bg-brand-tan/30 overflow-hidden relative group">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-brand-rose/20 to-brand-tan/40 flex items-center justify-center text-brand-brown/30 font-bold text-xl group-hover:scale-105 transition-transform duration-500">
                                        {project.category}
                                    </div>
                                )}
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-clay shadow-sm">
                                    {project.category}
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-1">
                                <h3 className="text-2xl font-bold text-brand-brown mb-3 group-hover:text-brand-clay transition-colors">{project.title}</h3>
                                <p className="text-gray-600 mb-6 flex-1 text-sm leading-relaxed">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="px-3 py-1 text-xs font-medium bg-white text-brand-brown rounded-md border border-brand-tan/50">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between mt-auto pt-6 border-t border-brand-tan/30">
                                    <a
                                        href={project.link || project.repo || '#'}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm font-semibold text-brand-brown hover:text-brand-clay transition-colors"
                                    >
                                        {/* View Details <ArrowRight size={16} /> */}
                                    </a>
                                    <div className="flex gap-3">
                                        {project.repo && (
                                            <a
                                                href={project.repo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 text-gray-400 hover:text-brand-brown transition-colors"
                                                title="View Code"
                                            >
                                                <Github size={20} />
                                            </a>
                                        )}
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 text-gray-400 hover:text-brand-brown transition-colors"
                                                title="Live Demo"
                                            >
                                                <ExternalLink size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsGallery;

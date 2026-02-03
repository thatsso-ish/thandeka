
import { motion } from 'framer-motion';
import { certifications } from '../data/portfolio';
import { Award } from 'lucide-react';

const CertificationBadge = () => {
    return (
        <section className="py-8 md:py-12 bg-brand-beige">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-brown mb-4">Certifications</h2>
                    <div className="w-20 h-1 bg-brand-clay mx-auto rounded-full mb-4"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">Verified expertise in Microsoft Technologies and Security Compliance.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all border border-brand-tan/50 relative overflow-hidden group"
                        >
                            {/* Decorative Background Icon */}
                            <Award className="absolute -right-6 -bottom-6 text-brand-beige w-40 h-40 opacity-20 transform rotate-12 group-hover:rotate-0 transition-transform duration-500" />

                            <a href={cert.link || '#'} target="_blank" rel="noopener noreferrer" className="relative z-10 flex items-start gap-6 block h-full">
                                <div className="p-4 bg-brand-tan rounded-xl text-brand-clay group-hover:bg-brand-clay group-hover:text-white transition-colors shrink-0">
                                    {cert.icon ? (
                                        <div dangerouslySetInnerHTML={{ __html: cert.icon }} className="w-12 h-12 flex items-center justify-center [&>img]:w-full [&>img]:h-full [&>img]:object-contain" />
                                    ) : (
                                        <Award size={48} />
                                    )}
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-brand-brown text-xl leading-tight mb-3 group-hover:text-brand-clay transition-colors">{cert.name}</h3>
                                    <p className="text-base text-gray-500 font-medium">{cert.issuer}</p>
                                    <p className="text-sm text-brand-clay mt-3 font-mono bg-brand-tan/30 inline-block px-3 py-1.5 rounded">
                                        Issued: {cert.date}
                                    </p>
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CertificationBadge;

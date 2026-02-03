
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-brand-beige relative overflow-hidden px-6">
            {/* Decorative Background Blob */}
            <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-brand-rose rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
            <div className="absolute top-[20%] left-[-10%] w-72 h-72 bg-brand-tan rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

            <div className="container mx-auto grid grid-cols-2 gap-2 md:gap-8 items-center z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-left col-span-1"
                >
                    <span className="text-brand-clay font-medium tracking-wider mb-1 md:mb-2 block text-[10px] md:text-lg">HELLO, I AM</span>
                    <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold text-brand-brown mb-2 md:mb-6 leading-tight">
                        Thandeka <br /> Mbokazi
                    </h1>

                    <div className="text-xs md:text-xl lg:text-2xl text-gray-600 mb-3 md:mb-8 h-[30px] md:h-[60px]">
                        <span className="mr-1 md:mr-2">I am a</span>
                        <TypeAnimation
                            sequence={[
                                'AI Associate',
                                2000,
                                'AI Associate',
                                2000,
                                'AI Associate',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            className="text-brand-clay font-semibold"
                            repeat={Infinity}
                        />
                    </div>

                    <p className="text-gray-600 mb-4 md:mb-8 max-w-lg leading-relaxed text-[10px] md:text-base">
                        IT Graduate & AI Associate specializing in Software Development, AI and Data Analytics.
                        Building intelligent solutions with TypeScript, Python, and the Power Platform.
                    </p>

                    <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                        <a href="#projects" className="px-3 py-1.5 md:px-8 md:py-3 bg-brand-clay text-white rounded-full font-medium hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center text-[10px] md:text-base">
                            View Work
                        </a>
                        <a href="/Thandeka_Mbokazi_CV.pdf" download className="px-3 py-1.5 md:px-8 md:py-3 border-2 border-brand-brown text-brand-brown rounded-full font-medium hover:bg-brand-brown hover:text-white transition-all text-center text-[10px] md:text-base flex items-center justify-center gap-2">
                            Download CV
                        </a>
                        <a href="#contact" className="px-3 py-1.5 md:px-8 md:py-3 border-2 border-brand-brown text-brand-brown rounded-full font-medium hover:bg-brand-brown hover:text-white transition-all text-center text-[10px] md:text-base">
                            Contact Me
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative block col-span-1"
                >
                    <div className="w-full aspect-[4/5] max-w-[400px] bg-brand-rose/20 rounded-2xl border-2 border-white overflow-hidden shadow-2xl relative ml-auto">
                        <img
                            src="/thandeka.jpeg"
                            alt="Thandeka Mbokazi"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>
            </div >
        </section >
    );
};

export default Hero;

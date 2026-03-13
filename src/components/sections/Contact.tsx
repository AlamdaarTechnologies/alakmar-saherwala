import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { Button } from '../ui/Button';
import { GlitchText } from '../ui/GlitchText';
import { TechBackground } from '../ui/TechBackground';
import { GlassCard } from '../ui/GlassCard';
import { useState } from 'react';

// import { CyberBackground } from '../ui/CyberBackground';

export function Contact() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);

        try {
            setStatus('submitting');
            const response = await fetch("https://formspree.io/f/mpqjdzjq", {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('success');
                form.reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    }

    return (
        <section id="contact" className="py-20 bg-black relative">
            {/* <CyberBackground variant="blue" /> */}
            <TechBackground />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(176,38,255,0.1),transparent_50%)] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4 flex items-center justify-center gap-2">
                        <span className="text-cyber-500">05.</span> <GlitchText text="Get In Touch" />
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Have a project in mind or want to discuss security? Let's connect.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                    >
                        <h3 className="text-2xl font-bold font-orbitron text-white mb-6">
                            Contact Information
                        </h3>
                        <div className="space-y-6">
                            <a href="mailto:alakmarsaherwala@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                                <div className="p-3 bg-white/5 rounded-lg text-cyber-500 group-hover:bg-cyber-500/20 transition-colors">
                                    <Mail size={24} />
                                </div>
                                <span className="font-mono">alakmarsaherwala@gmail.com</span>
                            </a>

                            <a href="https://www.linkedin.com/in/alakmarsaherwala/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                                <div className="p-3 bg-white/5 rounded-lg text-electric-500 group-hover:bg-electric-500/20 transition-colors">
                                    <Linkedin size={24} />
                                </div>
                                <span>Alakmar Saherwala</span>
                            </a>

                            <a href="https://github.com/captain0769" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                                <div className="p-3 bg-white/5 rounded-lg text-neon-500 group-hover:bg-neon-500/20 transition-colors">
                                    <Github size={24} />
                                </div>
                                <span>Alakmar Saherwala</span>
                            </a>
                        </div>
                    </motion.div>

                    <GlassCard
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8"
                    >
                        {status === 'success' ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-12"
                            >
                                <div className="w-16 h-16 bg-cyber-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-cyber-500/30">
                                    <Send className="text-cyber-500 w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                                <p className="text-gray-400">Thanks for reaching out. I'll get back to you shortly.</p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="mt-6 text-sm text-cyber-500 hover:text-cyber-400 underline"
                                >
                                    Send another message
                                </button>
                            </motion.div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                className="space-y-4"
                            >
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-cyber-500 focus:outline-none transition-colors"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-cyber-500 focus:outline-none transition-colors"
                                        placeholder="Your Email"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                                    <textarea
                                        name="message"
                                        required
                                        rows={4}
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-cyber-500 focus:outline-none transition-colors"
                                        placeholder="Your message..."
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="w-full bg-cyber-500 text-black hover:bg-cyber-600 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {status === 'submitting' ? (
                                        <span className="flex items-center">
                                            <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin mr-2" />
                                            Sending...
                                        </span>
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4 mr-2" /> Send Message
                                        </>
                                    )}
                                </Button>
                                {status === 'error' && (
                                    <p className="text-red-500 text-sm text-center mt-2">
                                        Something went wrong. Please try again.
                                    </p>
                                )}
                            </form>
                        )}
                    </GlassCard>

                </div>

                <div className="mt-20 text-center text-gray-500 text-sm">
                    <p>© 2026 Alakmar Saherwala | All rights reserved.</p>
                </div>
            </div>
        </section>
    );
}

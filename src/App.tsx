import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, MotionValue } from 'framer-motion';

// --- TYPESCRIPT INTERFACES ---
interface Link {
  label: string;
  url: string;
}

interface Experiment {
  id: string;
  title: string;
  desc: string;
  logs: string[];
  links: Link[];
}

interface OtherExperiment {
  title: string;
  desc: string;
  url: string;
}

interface Obsession {
  label: string;
  value: string;
}

interface TimelineItem {
  year: string;
  text: string;
}

// --- DATA FROM HTML ---
const EXPERIMENTS: Experiment[] = [
  {
    id: "01",
    title: "GermiNet",
    desc: "End-to-end object detection pipeline using Mask R-CNN to analyze seed germination patterns. ~1,000 annotated images.",
    logs: [
      "> loading image dataset...",
      "> extracting morphological features...",
      "> initializing Mask R-CNN...",
      "> classification complete. 95% accuracy."
    ],
    links: [
      { label: "View GitHub", url: "https://github.com/plunkix/GermiNet" },
      { label: "Watch Demo", url: "https://www.youtube.com/watch?v=ND4zWlc05s0" }
    ]
  },
  {
    id: "02",
    title: "GrainVue",
    desc: "Fine-grained rice variety classification using embedding spaces and metric learning pipelines.",
    logs: [
      "> establishing embedding spaces...",
      "> isolating visually similar varieties...",
      "> training metric pipeline...",
      "> separation achieved. 97% accuracy."
    ],
    links: [
      { label: "Read Docs", url: "https://www.notion.so/GrainVue-28cf445428328070b750fd552c00b9c0" },
      { label: "Watch Demo", url: "https://www.youtube.com/watch?v=7fRTHc1S9RU" }
    ]
  }
];

const OTHER_EXPERIMENTS: OtherExperiment[] = [
  {
    title: "PopStruct",
    desc: "Cloud-based genomics platform for analyzing genetic diversity using PCA and K-means clustering.",
    url: "https://popstruct-i3ab.vercel.app/"
  },
  {
    title: "SpyderCare",
    desc: "Empathetic AI chatbot for student mental health using NLP and sentiment analysis.",
    url: "https://spydercare.vercel.app/"
  },
  {
    title: "Covid Coinfections",
    desc: "Analyzing SARS-CoV-2 coinfections and viral evolution using NGS data pipelines.",
    url: "https://economic-rayon-049.notion.site/Project-Report-128f44542832805cbfd7fc2f7299b9cc"
  },
  {
    title: "Restriction sites to Insights",
    desc: "Genotyping-by-Sequencing (GBS) analysis of 471 rice taxa to identify SNPs and population structure.",
    url: "https://www.notion.so/Project-Report-128f4454283280fc9e8be4f63972ca09"
  }
];

const OBSESSIONS: Obsession[] = [
  { label: "Building", value: "CHO Cell Digital Twins" },
  { label: "Reading", value: "The Beginning of Infinity - David Deutsch" },
  { label: "Learning", value: "Mechanistic Modeling" },
  { label: "Thinking About", value: "Biological Intelligence" }
];

const TIMELINE: TimelineItem[] = [
  { year: "2023", text: "Emotional NLP, RNA-Seq, and NGS pipelines." },
  { year: "2024", text: "Genotyping-by-Sequencing and applied ML." },
  { year: "2025", text: "Computer vision architectures for phenotyping." },
  { year: "2026", text: "Digital twins for bioprocess automation." }
];

// 1. The Living Network Background (Scroll Driven)
const LivingNetwork = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
  const path1Length = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  const path2Length = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);
  const path3Length = useTransform(scrollYProgress, [0.2, 1], [0, 1]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 flex justify-center overflow-hidden opacity-[0.15]">
      <svg className="w-full max-w-5xl h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.path d="M 20 0 C 30 20, 10 50, 40 80 C 60 100, 50 100, 50 100" fill="transparent" stroke="#F5F5F7" strokeWidth="0.05" style={{ pathLength: path1Length }} />
        <motion.path d="M 80 0 C 70 30, 90 60, 50 80 C 40 100, 50 100, 50 100" fill="transparent" stroke="#F5F5F7" strokeWidth="0.05" style={{ pathLength: path2Length }} />
        <motion.path d="M 50 0 C 60 40, 40 60, 50 100" fill="transparent" stroke="#006B3D" strokeWidth="0.03" style={{ pathLength: path3Length }} />
      </svg>
    </div>
  );
};

// 2. Navigation with Dynamic Scroll Sizing
const Navigation = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
  // Scale the name from 1.5x down to 1x as the user scrolls the first 10% of the page
  const nameScale = useTransform(scrollYProgress, [0, 0.1], [1.5, 1]);
  
  return (
    <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-6 py-8 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <motion.div 
        style={{ scale: nameScale, transformOrigin: "left center" }}
        className="text-xl md:text-2xl font-medium tracking-tight text-[#F5F5F7]"
      >
        Srushti Tathe
      </motion.div>
      <div className="flex gap-6 text-xs tracking-widest uppercase font-medium text-[#86868B]">
        <a href="#experiments" className="hover:text-[#F5F5F7] transition-colors">Work</a>
        <a href="#timeline" className="hover:text-[#F5F5F7] transition-colors">Trajectory</a>
        <a href="#contact" className="hover:text-[#F5F5F7] transition-colors">Contact</a>
      </div>
    </nav>
  );
};

// 3. Experiment Block with Subtle Terminal Hover
const ExperimentBlock = ({ exp }: { exp: Experiment }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="py-16 md:py-24 border-t border-[#111111] relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12 relative z-10">
        <p className="text-[#86868B] font-medium tracking-widest text-sm w-24">EXP //{exp.id}</p>
        <div className="flex-1">
          <h3 className="text-4xl md:text-6xl font-medium tracking-tight text-[#F5F5F7] mb-6 transition-colors duration-500">
            {exp.title}
          </h3>
          <p className="text-lg md:text-2xl text-[#86868B] max-w-2xl font-light leading-relaxed mb-10">
            {exp.desc}
          </p>
          <div className="flex flex-wrap gap-8">
            {exp.links.map((link: Link, idx: number) => (
              <a key={idx} href={link.url} target="_blank" rel="noreferrer" className="text-sm tracking-widest uppercase text-[#F5F5F7] pb-1 border-b border-[#333333] hover:border-[#F5F5F7] transition-colors duration-300">
                {link.label} &rarr;
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle Terminal Reveal (Desktop Only) */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 5, filter: "blur(4px)" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute bottom-10 right-0 bg-[#050505] border border-[#111111] p-6 hidden lg:block z-0 w-80 shadow-2xl rounded-md"
          >
            <div className="flex gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-[#333333]"></div>
              <div className="w-2 h-2 rounded-full bg-[#333333]"></div>
              <div className="w-2 h-2 rounded-full bg-[#333333]"></div>
            </div>
            <div className="font-mono text-xs text-[#006B3D] space-y-2 opacity-80">
              {exp.logs.map((log: string, i: number) => (
                <motion.p key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.15 }}>
                  {log}
                </motion.p>
              ))}
              <motion.p animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1 }}>_</motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const cinematicEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <div className="min-h-screen bg-[#000000] text-[#F5F5F7] font-sans selection:bg-[#F5F5F7] selection:text-[#000000] overflow-x-hidden">
      {/* Passed scrollYProgress into the updated Navigation */}
      <Navigation scrollYProgress={scrollYProgress} />
      <LivingNetwork scrollYProgress={scrollYProgress} />

      <main className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 pt-32">
        
        {/* HERO SECTION */}
        <section className="min-h-[80vh] flex flex-col justify-center pb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: cinematicEase }}
            className="space-y-6"
          >
            {/* The Name / Hero (Toned Down Size) */}
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: cinematicEase }}
              className="text-5xl md:text-7xl font-medium tracking-tight text-[#F5F5F7] mb-2 ml-1 md:ml-2"
            >
              Srushti Tathe
            </motion.h1>

            {/* The Kicker / Theme */}
            <motion.h2 className="text-2xl md:text-4xl leading-tight tracking-[0.2em] font-medium text-[#86868B] ml-1 md:ml-2 mb-8 md:mb-12">
              BIOLOGY
              <motion.span 
                className="block text-[#333333] font-light text-4xl md:text-6xl my-2 md:my-4 ml-2"
                initial={{ rotate: -45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 2, delay: 0.5, ease: cinematicEase }}
              >
                ×
              </motion.span>
              INTELLIGENCE
            </motion.h2>
            
            <div className="pt-8 md:pt-12 max-w-2xl">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1 }}
                className="text-lg md:text-3xl text-[#86868B] font-light leading-relaxed tracking-tight"
              >
                I design intelligent systems. My work is not limited to just algorithms. I build end-to-end architectures, bridging computer vision, biological automation, and digital twins.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1.5 }}
                className="mt-12 flex flex-col sm:flex-row gap-6 sm:items-center text-xs md:text-sm tracking-widest uppercase font-medium"
              >
                <div className="text-[#006B3D] flex items-center gap-3">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#006B3D] opacity-40"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#006B3D]"></span>
                  </span>
                  Current focus: CHO Cell Digital Twins
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* CINEMATIC MANIFESTO */}
        <section className="py-32 md:py-64 max-w-4xl mx-auto text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 2, ease: cinematicEase }}
            className="text-3xl md:text-5xl lg:text-7xl font-medium tracking-tighter text-[#F5F5F7] leading-tight"
          >
            <span className="text-[#333333]">Watching</span> life evolve <span className="text-[#333333]">into</span> intelligence.
          </motion.p>
        </section>

        {/* SELECTED EXPERIMENTS */}
        <section id="experiments" className="py-24">
          <h2 className="text-xs tracking-widest uppercase text-[#86868B] font-medium mb-16">Selected Works</h2>
          {EXPERIMENTS.map((exp: Experiment) => (
            <ExperimentBlock key={exp.id} exp={exp} />
          ))}
        </section>

        {/* OTHER EXPERIMENTS */}
        <section className="py-24 border-t border-[#111111]">
          <h2 className="text-xs tracking-widest uppercase text-[#86868B] font-medium mb-16">Other Explorations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {OTHER_EXPERIMENTS.map((exp: OtherExperiment, idx: number) => (
              <a key={idx} href={exp.url} target="_blank" rel="noreferrer" className="group block">
                <div className="border-t border-[#333333] pt-6 transition-colors duration-500 group-hover:border-[#006B3D]">
                  <h4 className="text-2xl font-medium text-[#F5F5F7] mb-3">{exp.title}</h4>
                  <p className="text-[#86868B] font-light leading-relaxed mb-6">{exp.desc}</p>
                  <span className="text-xs tracking-widest uppercase text-[#F5F5F7] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore &rarr;
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* CURRENT OBSESSIONS */}
        <section className="py-32 md:py-48 border-t border-[#111111]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <h2 className="text-xs tracking-widest uppercase text-[#86868B] font-medium">Currently</h2>
            </div>
            <div className="md:col-span-8 space-y-16">
              {OBSESSIONS.map((item: Obsession, i: number) => (
                <div key={i} className="group">
                  {/* Updated labels to be brighter (#86868B) and larger (text-sm md:text-base) */}
                  <p className="text-[#86868B] text-sm md:text-base tracking-widest uppercase mb-3 font-medium">{item.label}</p>
                  <motion.p 
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 4, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
                    className="text-2xl md:text-5xl font-medium tracking-tight text-[#F5F5F7]"
                  >
                    {item.value}
                  </motion.p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section id="timeline" className="py-32 md:py-48 border-t border-[#111111]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
             <div className="md:col-span-4">
              <h2 className="text-xs tracking-widest uppercase text-[#86868B] font-medium">Trajectory</h2>
            </div>
            <div className="md:col-span-8 flex flex-col gap-16 border-l border-[#111111] pl-8 md:pl-16">
              {TIMELINE.map((item: TimelineItem, i: number) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 1, delay: i * 0.2, ease: cinematicEase }}
                  className="relative"
                >
                  <div className="absolute -left-[33px] md:-left-[65px] top-1.5 w-1.5 h-1.5 rounded-full bg-[#F5F5F7]"></div>
                  <p className="text-xs tracking-widest uppercase text-[#86868B] mb-3">{item.year}</p>
                  <p className="text-xl md:text-3xl font-light text-[#F5F5F7] max-w-xl">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer id="contact" className="py-32 border-t border-[#111111] relative z-10">
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="space-y-6 w-full"
          >
            <p className="text-3xl md:text-5xl text-[#F5F5F7] font-medium tracking-tighter">Let's Connect.</p>
            <p className="text-sm tracking-widest text-[#86868B] uppercase">Results remain inconclusive.</p>
            
            <div className="pt-16 pb-24 flex flex-wrap justify-center gap-8 md:gap-12 text-sm tracking-widest text-[#F5F5F7] uppercase font-medium">
              <a href="mailto:tathesrushti03@gmail.com" className="hover:text-[#006B3D] transition-colors duration-300">Email</a>
              <a href="https://github.com/plunkix" target="_blank" rel="noreferrer" className="hover:text-[#006B3D] transition-colors duration-300">GitHub</a>
              <a href="https://in.linkedin.com/in/plunkix30002" target="_blank" rel="noreferrer" className="hover:text-[#006B3D] transition-colors duration-300">LinkedIn</a>
              <a href="https://x.com/juiiyarr" target="_blank" rel="noreferrer" className="hover:text-[#006B3D] transition-colors duration-300">Twitter / X</a>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center w-full text-xs text-[#333333] tracking-widest uppercase border-t border-[#111111] pt-8">
              <p>© 2026 Srushti Tathe.</p>
              <p className="mt-4 md:mt-0">Built with code.</p>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
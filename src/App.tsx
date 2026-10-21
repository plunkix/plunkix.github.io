const SKILLS = [
  {
    category: 'Machine Learning & AI',
    items: ['PyTorch', 'TensorFlow', 'Scikit-Learn', 'GPR', 'Mask R-CNN', 'Metric Learning'],
  },
  {
    category: 'Bioprocess & Modeling',
    items: ['Hybrid Modeling', 'Digital Twins', 'ODEs', 'Extended Kalman Filter', 'Raman Spectroscopy'],
  },
  {
    category: 'Engineering & MLOps',
    items: ['Python', 'OpenCV', 'FastAPI', 'Docker', 'DVC', 'Git & Linux'],
  },
];

const EXPERIENCE = [
  {
    year: '2026',
    role: 'Machine Learning Engineer',
    company: 'Ipca Laboratories Ltd.',
    description:
      'Developing hybrid mechanistic-ML models and digital twins for upstream bioprocess optimization, real-time state estimation, and predictive biomanufacturing.',
  },
  {
    year: '2024',
    role: 'Machine Learning Engineer',
    company: 'Ankur Seeds Pvt. Ltd.',
    description:
      'Built automated computer vision pipelines using deep object detection, instance segmentation, and metric learning for agricultural seed quality control and variety classification.',
  },
];

const PROJECTS = [
  {
    title: 'BioShift',
    description:
      'Open-source machine learning framework for processing Raman spectroscopy data and enabling real-time metabolite monitoring in upstream bioprocessing.',
    tags: ['Python', 'Chemometrics', 'PyTorch', 'Bioprocess', 'ML'],
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80',
    detailsUrl: 'https://github.com/plunkix',
    githubUrl: 'https://github.com/plunkix',
  },
  {
    title: 'GermiNet',
    description:
      'Automated computer vision system utilizing Mask R-CNN for high-throughput multi-seed instance segmentation and germination classification.',
    tags: ['Mask R-CNN', 'OpenCV', 'PyTorch', 'Computer Vision', 'Python'],
    image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=600&q=80',
    detailsUrl: 'https://github.com/plunkix',
    githubUrl: 'https://github.com/plunkix',
  },
  {
    title: 'GrainVue',
    description:
      'Deep metric learning and Fast R-CNN pipeline designed for fine-grained visual seed variety identification and automated purity grading.',
    tags: ['Fast R-CNN', 'Metric Learning', 'PyTorch', 'OpenCV', 'FastAPI'],
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=600&q=80',
    detailsUrl: 'https://github.com/plunkix',
    githubUrl: 'https://github.com/plunkix',
  },
  {
    title: 'Bioprocess Digital Twin',
    description:
      'Hybrid mechanistic-ML architecture combining ODE mass balances with Gaussian Process Regression and Extended Kalman Filtering.',
    tags: ['ODEs', 'GPR', 'EKF', 'Python', 'Digital Twin'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
    detailsUrl: 'https://github.com/plunkix',
    githubUrl: 'https://github.com/plunkix',
  },
  {
    title: 'COCO-Polygon-Optimizer',
    description:
      'Lightweight utility tool for converting, simplifying, and optimizing complex segmentation masks and polygon annotations in COCO format.',
    tags: ['Python', 'Computer Vision', 'COCO', 'Data Tooling', 'OpenCV'],
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=600&q=80',
    detailsUrl: 'https://github.com/plunkix',
    githubUrl: 'https://github.com/plunkix',
  },
  {
    title: 'Glitch Descent',
    description:
      'Interactive text-based narrative game featuring branching storylines, state-driven mechanics, and atmospheric terminal aesthetics.',
    tags: ['Python', 'Game Dev', 'Interactive Fiction', 'CLI', 'Logic'],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80',
    detailsUrl: 'https://github.com/plunkix',
    githubUrl: 'https://github.com/plunkix',
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#070709] text-white font-sans selection:bg-[#7c3aed] selection:text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#070709]/80 border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="#home"
            className="text-xl font-bold italic bg-gradient-to-r from-[#a855f7] to-[#6366f1] bg-clip-text text-transparent tracking-wide"
          >
            ifelsecry
          </a>
          <nav className="hidden sm:flex items-center space-x-7 text-xs font-medium text-gray-300">
            <a href="#home" className="text-[#a855f7] hover:text-[#a855f7] transition">Home</a>
            <a href="#about" className="hover:text-[#a855f7] transition">About</a>
            <a href="#projects" className="hover:text-[#a855f7] transition">Projects</a>
            <a href="#experience" className="hover:text-[#a855f7] transition">Experience</a>
            <a href="#contact" className="hover:text-[#a855f7] transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="max-w-4xl mx-auto px-6 pt-20 pb-24 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-[#1a102d] border border-[#7c3aed]/40 text-[#c084fc] text-xs font-medium">
          Available for new Projects
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4">
          Hey! , I am <span className="text-[#8b5cf6]">Srushti</span>
        </h1>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-200 mb-6">
          Machine Learning Engineer
        </h2>

        <p className="max-w-xl mx-auto text-gray-400 text-sm sm:text-base leading-relaxed mb-10">
          I build intelligent computer vision systems and hybrid bioprocess digital twins that bridge machine learning with real-world biological systems.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-7 py-2.5 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#6d28d9] hover:from-[#7c3aed] hover:to-[#5b21b6] text-white text-xs sm:text-sm font-semibold shadow-lg shadow-[#8b5cf6]/25 transition"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-7 py-2.5 rounded-full bg-transparent border border-[#8b5cf6]/50 hover:border-[#8b5cf6] hover:bg-[#8b5cf6]/10 text-gray-200 text-xs sm:text-sm font-semibold transition"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <div className="w-full h-px bg-white/10" />

      {/* About, Skills & Experience Section */}
      <section id="about" className="max-w-4xl mx-auto px-6 py-20">
        {/* About Me */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center mb-20">
          <div className="md:col-span-7 space-y-4">
            <h3 className="text-2xl font-bold text-white mb-4">About Me</h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              I'm a Machine Learning Engineer with a background in Biotechnology Engineering, specializing in predictive modeling, hybrid digital twins, and deep computer vision pipelines.
            </p>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Whether I'm combining ordinary differential equations with Gaussian Process Regression for upstream bioprocesses, or training Mask R-CNN models for high-precision segmentation, I love turning noisy real-world data into reliable production systems.
            </p>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              I'm always excited to collaborate on ambitious AI, scientific computing, and computer vision projects that push technical boundaries.
            </p>
          </div>

          {/* Cute Animated Pixel Cat */}
          <div className="md:col-span-5 flex justify-center">
            <style>{`
              @keyframes floatCat {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
              }
              @keyframes blinkEyes {
                0%, 92%, 100% { transform: scaleY(1); }
                96% { transform: scaleY(0.1); }
              }
              @keyframes wagTail {
                0%, 100% { transform: rotate(0deg); }
                50% { transform: rotate(8deg) translateY(-1px); }
              }
              @keyframes twinkle1 {
                0%, 100% { opacity: 1; transform: scale(1); }
                50% { opacity: 0.25; transform: scale(0.75); }
              }
              @keyframes twinkle2 {
                0%, 100% { opacity: 0.3; transform: scale(0.8); }
                50% { opacity: 1; transform: scale(1.15); }
              }
              @keyframes heartFloat {
                0%, 100% { transform: translateY(0px) scale(1); opacity: 0.85; }
                50% { transform: translateY(-5px) scale(1.1); opacity: 1; }
              }
            `}</style>

            <div className="relative w-56 h-56 flex items-center justify-center group cursor-pointer">
              {/* Soft Purple Glow Behind Cat */}
              <div className="absolute w-36 h-36 bg-[#8b5cf6]/25 rounded-full blur-2xl group-hover:bg-[#ec4899]/30 transition duration-500" />

              <svg
                viewBox="0 0 24 24"
                className="w-48 h-48 drop-shadow-[0_0_20px_rgba(168,85,247,0.45)]"
                shapeRendering="crispEdges"
                style={{ animation: 'floatCat 3.2s ease-in-out infinite' }}
              >
                {/* Twinkling Sparkles Group 1 */}
                <g style={{ animation: 'twinkle1 2.2s ease-in-out infinite', transformOrigin: 'center' }}>
                  <rect x="19" y="3" width="1" height="3" fill="#c084fc" />
                  <rect x="18" y="4" width="3" height="1" fill="#c084fc" />
                  <rect x="19" y="4" width="1" height="1" fill="#ffffff" />

                  <rect x="2" y="16" width="1" height="1" fill="#818cf8" />
                  <rect x="3" y="17" width="1" height="1" fill="#c084fc" />
                </g>

                {/* Twinkling Sparkles Group 2 */}
                <g style={{ animation: 'twinkle2 2.8s ease-in-out infinite', transformOrigin: 'center' }}>
                  <rect x="5" y="4" width="1" height="3" fill="#818cf8" />
                  <rect x="4" y="5" width="3" height="1" fill="#818cf8" />

                  <rect x="18" y="19" width="2" height="2" fill="#818cf8" />
                  <rect x="18.5" y="19.5" width="1" height="1" fill="#070709" />
                  <rect x="21" y="17" width="1" height="2" fill="#c084fc" />
                  <rect x="20.5" y="17.5" width="2" height="1" fill="#c084fc" />
                </g>

                {/* Floating Cute Pixel Heart */}
                <g style={{ animation: 'heartFloat 2.4s ease-in-out infinite' }}>
                  <rect x="11" y="4" width="1" height="1" fill="#f472b6" />
                  <rect x="13" y="4" width="1" height="1" fill="#f472b6" />
                  <rect x="10" y="5" width="5" height="1" fill="#f472b6" />
                  <rect x="11" y="6" width="3" height="1" fill="#f472b6" />
                  <rect x="12" y="7" width="1" height="1" fill="#f472b6" />
                </g>

                {/* Wagging Curled Tail */}
                <g style={{ animation: 'wagTail 1.8s ease-in-out infinite', transformOrigin: '7px 15px' }}>
                  <rect x="3" y="11" width="2" height="2" fill="#a78bfa" />
                  <rect x="2" y="12" width="2" height="3" fill="#a78bfa" />
                  <rect x="3" y="14" width="4" height="2" fill="#a78bfa" />
                </g>

                {/* Cat Ears */}
                <rect x="7" y="8" width="1" height="1" fill="#a78bfa" />
                <rect x="7" y="9" width="2" height="1" fill="#a78bfa" />
                <rect x="6" y="10" width="4" height="1" fill="#a78bfa" />

                <rect x="17" y="8" width="1" height="1" fill="#a78bfa" />
                <rect x="16" y="9" width="2" height="1" fill="#a78bfa" />
                <rect x="15" y="10" width="4" height="1" fill="#a78bfa" />

                {/* Pink Inner Ears */}
                <rect x="7" y="10" width="1" height="1" fill="#f472b6" />
                <rect x="17" y="10" width="1" height="1" fill="#f472b6" />

                {/* Main Chubby Cat Head & Body */}
                <rect x="6" y="11" width="13" height="5" fill="#a78bfa" />
                <rect x="5" y="12" width="15" height="3" fill="#a78bfa" />
                <rect x="7" y="16" width="11" height="1" fill="#a78bfa" />

                {/* Cute Little Paws */}
                <rect x="8" y="17" width="2" height="1" fill="#ddd6fe" />
                <rect x="15" y="17" width="2" height="1" fill="#ddd6fe" />

                {/* Whiskers */}
                <rect x="4" y="13" width="1" height="1" fill="#c4b5fd" />
                <rect x="20" y="13" width="1" height="1" fill="#c4b5fd" />

                {/* Blinking Eyes with Kawaii Eye Shine */}
                <g style={{ animation: 'blinkEyes 4s infinite', transformOrigin: '12px 13.5px' }}>
                  <rect x="8" y="13" width="2" height="2" fill="#1e1b4b" />
                  <rect x="8" y="13" width="1" height="1" fill="#ffffff" />

                  <rect x="15" y="13" width="2" height="2" fill="#1e1b4b" />
                  <rect x="15" y="13" width="1" height="1" fill="#ffffff" />
                </g>

                {/* Rosy Pink Blushing Cheeks */}
                <rect x="6" y="14" width="2" height="1" fill="#f472b6" />
                <rect x="17" y="14" width="2" height="1" fill="#f472b6" />

                {/* Tiny Pink Nose / Mouth */}
                <rect x="12" y="14" width="1" height="1" fill="#f472b6" />
              </svg>
            </div>
          </div>
        </div>

        {/* Skills & Technologies */}
        <div className="mb-20">
          <h3 className="text-xl font-bold text-white mb-6">Skills & Technologies</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {SKILLS.map((group, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#111116] border border-white/5 hover:border-[#8b5cf6]/40 transition"
              >
                <h4 className="text-xs font-bold text-white mb-4">{group.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-[#1a102d] text-[#c084fc] border border-[#7c3aed]/40"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div id="experience">
          <h3 className="text-xl font-bold text-white mb-8">Experience</h3>
          <div className="relative pl-6 sm:pl-8 space-y-6 before:content-[''] before:absolute before:top-4 before:bottom-4 before:left-[19px] sm:before:left-[27px] before:w-0.5 before:bg-[#8b5cf6]/40">
            {EXPERIENCE.map((exp, idx) => (
              <div key={idx} className="relative flex items-start gap-5">
                {/* Year Circle */}
                <div className="relative z-10 -ml-6 sm:-ml-8 w-10 h-10 rounded-full bg-[#8b5cf6] text-white text-[11px] font-bold flex items-center justify-center shrink-0 shadow-md shadow-[#8b5cf6]/40">
                  {exp.year}
                </div>

                {/* Experience Card */}
                <div className="flex-1 p-5 rounded-xl bg-[#111116] border border-white/5">
                  <h4 className="text-sm font-bold text-white">{exp.role}</h4>
                  <p className="text-xs text-[#8b5cf6] font-medium mb-2">{exp.company}</p>
                  <p className="text-xs text-gray-400 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-white/10" />

      {/* My Projects Section */}
      <section id="projects" className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">My Projects</h3>
          <p className="text-gray-400 text-xs sm:text-sm max-w-md mx-auto">
            A collection of projects I've worked on, ranging from computer vision pipelines to bioprocess digital twins.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {PROJECTS.map((project, idx) => (
            <div
              key={idx}
              className="rounded-xl overflow-hidden bg-[#111116] border border-white/10 hover:border-[#8b5cf6]/50 transition flex flex-col"
            >
              <div className="h-36 overflow-hidden bg-[#1a102d] relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:opacity-100 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111116] via-[#8b5cf6]/20 to-transparent" />
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white mb-1.5">{project.title}</h4>
                  <p className="text-[11px] text-gray-400 leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-full text-[9px] font-medium bg-[#1a102d] text-[#c084fc] border border-[#7c3aed]/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer Buttons */}
                <div className="flex items-center gap-2 pt-2 border-t border-white/5">
                  <a
                    href={project.detailsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-1.5 rounded-full bg-[#8b5cf6] hover:bg-[#7c3aed] text-center text-white text-[11px] font-semibold transition"
                  >
                    View Details
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub Repository"
                    className="w-7 h-7 rounded-full border border-white/15 hover:border-[#8b5cf6] flex items-center justify-center text-gray-400 hover:text-white text-xs transition"
                  >
                    ↗
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Source Code"
                    className="w-7 h-7 rounded-full border border-white/15 hover:border-[#8b5cf6] flex items-center justify-center text-gray-400 hover:text-white text-xs transition"
                  >
                    {'<>'}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full h-px bg-white/10" />

      {/* Let's Work Together Section */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-20">
        <h3 className="text-2xl font-bold text-center text-white mb-12">
          Let's Work Together
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Left Form Card */}
          <div className="p-6 rounded-xl bg-[#0c0c10] border border-white/10">
            <h4 className="text-xs font-bold text-white mb-4">Send me a message</h4>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thanks for reaching out!');
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-[11px] text-gray-300 mb-1">Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 rounded-lg bg-[#070709] border border-[#8b5cf6]/40 focus:border-[#8b5cf6] focus:outline-none text-xs text-white"
                />
              </div>
              <div>
                <label className="block text-[11px] text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-3 py-2 rounded-lg bg-[#070709] border border-[#8b5cf6]/40 focus:border-[#8b5cf6] focus:outline-none text-xs text-white"
                />
              </div>
              <div>
                <label className="block text-[11px] text-gray-300 mb-1">Message</label>
                <textarea
                  rows={4}
                  required
                  className="w-full px-3 py-2 rounded-lg bg-[#070709] border border-[#8b5cf6]/40 focus:border-[#8b5cf6] focus:outline-none text-xs text-white resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] hover:from-[#7c3aed] hover:to-[#6d28d9] text-white text-xs font-semibold transition cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Info & Socials Stack */}
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-[#0c0c10] border border-white/10">
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                I'm always open to discussing new opportunities, research collaborations, or machine learning projects. Whether you have a specific problem in mind or just want to connect, I'd love to hear from you.
              </p>
              <ul className="space-y-1.5 text-xs text-gray-300 list-disc list-inside">
                <li>Predictive Bioprocess Modeling & Digital Twins</li>
                <li>Computer Vision & Deep Segmentation</li>
                <li>Machine Learning Engineering & MLOps</li>
                <li>Research & Technical Collaborations</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-[#0c0c10] border border-white/10">
              <h4 className="text-xs font-bold text-white mb-4">My Socials</h4>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/plunkix"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg bg-[#1a102d] border border-[#8b5cf6]/40 flex items-center justify-center text-[#a855f7] hover:bg-[#8b5cf6] hover:text-white text-xs font-bold transition"
                >
                  GH
                </a>
                <a
                  href="mailto:contact@ifelsecry.xyz"
                  className="w-8 h-8 rounded-lg bg-[#1a102d] border border-[#8b5cf6]/40 flex items-center justify-center text-[#a855f7] hover:bg-[#8b5cf6] hover:text-white text-xs font-bold transition"
                >
                  ✉
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg bg-[#1a102d] border border-[#8b5cf6]/40 flex items-center justify-center text-[#a855f7] hover:bg-[#8b5cf6] hover:text-white text-xs font-bold transition"
                >
                  in
                </a>
                <a
                  href="https://ifelsecry.xyz"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg bg-[#1a102d] border border-[#8b5cf6]/40 flex items-center justify-center text-[#a855f7] hover:bg-[#8b5cf6] hover:text-white text-xs font-bold transition"
                >
                  🌐
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

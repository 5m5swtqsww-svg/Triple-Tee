import React, { useState, useEffect } from 'react';
import { 
  HardHat, 
  Hammer, 
  Building2, 
  Wrench, 
  Home, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight, 
  ChevronRight, 
  Star,
  CheckCircle2,
  Menu,
  X,
  MessageSquare
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      id="navbar"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-charcoal/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-extrabold tracking-tighter">
          TRIPLE TEE<span className="text-brand-orange">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-xs uppercase tracking-widest font-semibold hover:text-brand-orange transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-brand-orange text-brand-charcoal px-6 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-white transition-all transform hover:-translate-y-0.5 rounded-full"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-gray-dark border-b border-white/10 p-6 flex flex-col space-y-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm uppercase tracking-widest font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-brand-orange text-brand-charcoal px-6 py-3 text-center text-xs font-bold uppercase tracking-widest rounded-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get a Quote
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/80 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1541913057-30095034608b?auto=format&fit=crop&q=80&w=2000" 
          alt="Triple Tee Construction Site" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-width-[900px] bento-cell p-10 md:p-20 bg-brand-gray-light/40 backdrop-blur-sm"
        >
          <span className="inline-block text-brand-orange font-bold tracking-[0.2em] text-xs uppercase mb-4 border-l-2 border-brand-orange pl-4">
            Construction & Engineering Excellence
          </span>
          <h1 className="text-5xl md:text-8xl font-black leading-none mb-6 tracking-tighter uppercase">
            A Legacy <br /> 
            <span className="serif italic text-brand-orange font-normal capitalize tracking-normal italic font-serif">Across</span> the Pacific.
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-light">
            From hospitality and marine logistics to construction and retail—Triple Tee Enterprises is the engine of growth in Kiribati.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="group bg-brand-orange text-brand-charcoal px-10 py-5 text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white transition-all transition-transform hover:scale-105 rounded-full"
            >
              Start Your Project <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="tel:+68673000000" 
              className="px-10 py-5 text-sm font-bold uppercase tracking-widest border border-white/20 hover:border-brand-orange transition-all text-center flex items-center justify-center gap-2 rounded-full"
            >
              <Phone size={18} /> Call Now
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
};

const TrustSection = () => {
  const stats = [
    { label: 'Years Excellence', value: '15+' },
    { label: 'Completed Projects', value: '250+' },
    { label: 'Expert Craftsmen', value: '45+' },
    { label: 'Satisfaction Rate', value: '100%' },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 rounded-3xl ${i % 2 === 0 ? 'bg-brand-orange text-brand-charcoal' : 'bento-cell-dark'} flex flex-col justify-center items-center text-center`}
            >
              <h3 className={`text-4xl md:text-5xl font-black mb-2 ${i % 2 === 0 ? 'text-brand-charcoal' : 'text-brand-orange'}`}>{stat.value}</h3>
              <p className={`text-[10px] uppercase tracking-widest font-bold ${i % 2 === 0 ? 'text-brand-charcoal/60' : 'text-gray-500'}`}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      id: 'hospitality',
      title: 'Hotels & Apartments',
      desc: 'Premium short-term and long-term accommodation featuring modern amenities and island hospitality.',
      icon: <Building2 className="text-brand-orange" size={32} />,
      img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'marine',
      title: 'Ship Vessels',
      desc: 'Specialized maritime logistics and vessel operations connecting the islands of Kiribati.',
      icon: <Star className="text-brand-orange" size={32} />,
      img: 'https://images.unsplash.com/photo-1544257750-572358f5da22?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'retail',
      title: 'White Goods & Hardware',
      desc: 'Leading supplier of quality home appliances and industrial hardware tools across Tarawa.',
      icon: <Wrench className="text-brand-orange" size={32} />,
      img: 'https://images.unsplash.com/photo-1556911220-e1520216768e?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'construction',
      title: 'Construction & Joinery',
      desc: 'Expert general contracting, structural engineering, and precision joinery for all scales.',
      icon: <HardHat className="text-brand-orange" size={32} />,
      img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-brand-orange font-bold tracking-widest text-xs uppercase mb-4 block">Our Expertise</span>
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tighter uppercase">Master Craftsmanship <br /> for every scale.</h2>
          </div>
          <p className="text-gray-400 max-w-sm font-light text-lg">
            We combine traditional reliability with modern engineering standards to deliver unmatched quality in Kiribati.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bento-cell p-8 h-full flex flex-col hover:border-brand-orange/50 transition-all cursor-default"
            >
              <div className="mb-8 p-4 bg-white/5 w-fit rounded-xl group-hover:bg-brand-orange group-hover:text-brand-charcoal transition-colors">
                {React.cloneElement(service.icon as React.ReactElement, { className: "text-brand-orange group-hover:text-brand-charcoal" })}
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-10 flex-grow">{service.desc}</p>
              <div className="mt-auto">
                <a href="#contact" className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 group/btn hover:text-brand-orange transition-colors">
                  Explore <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<null | typeof projects[0]>(null);

  const projects = [
    { 
      title: 'T-Enterprises Plaza', 
      category: 'Retail & Hardware', 
      img: 'https://images.unsplash.com/photo-1604719312563-8912e9223c6a?auto=format&fit=crop&q=80&w=800',
      scope: 'Design and construction of a primary multi-use retail facility in Tarawa, totaling 12,000 sq ft.',
      challenges: 'Logistical delays in specialized structural steel delivery and the need for high-salt corrosion resistance.',
      solutions: 'Developed a custom logistics tracking system and utilized premium galvanized coating standards exceeding local requirements.'
    },
    { 
      title: 'Blue Horizon Vessels', 
      category: 'Marine', 
      img: 'https://images.unsplash.com/photo-1544257750-572358f5da22?auto=format&fit=crop&q=80&w=800',
      scope: 'Structural renovation and mechanical overhaul of a 50-foot inter-island cargo vessel.',
      challenges: 'Working within limited dry-dock windows and sourcing specialized marine engine parts.',
      solutions: 'Implemented double-shift maintenance schedules and utilized our international supply chain to expedite critical components.'
    },
    { 
      title: 'The Lagoon Apartments', 
      category: 'Hospitality', 
      img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
      scope: 'Development of 12 luxury beachfront units featuring sustainable cooling systems.',
      challenges: 'Ensuring structural stability on sandy terrain while minimizing environmental impact on the lagoon edge.',
      solutions: 'Utilized advanced helical pile foundations and integrated a greywater recycling system for landscaping.'
    }
  ];

  return (
    <section id="projects" className="py-32 bg-[#080809]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-orange font-bold tracking-widest text-xs uppercase mb-4 block">Selected Works</span>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase">Built for <span className="serif italic font-normal text-brand-orange lowercase tracking-normal">Longevity</span></h2>
          <div className="w-20 h-1 bg-brand-orange mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <motion.div 
              key={proj.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelectedProject(proj)}
              className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/5 cursor-pointer"
            >
              <img 
                src={proj.img} 
                alt={proj.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <span className="text-xs font-bold text-brand-orange uppercase tracking-[0.2em] mb-2 block">{proj.category}</span>
                <h3 className="text-2xl font-bold uppercase tracking-tight">{proj.title}</h3>
              </div>
              <div className="absolute top-6 right-6 w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center text-brand-charcoal opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight size={20} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
          >
            <div className="absolute inset-0 bg-brand-charcoal/95 backdrop-blur-xl" onClick={() => setSelectedProject(null)} />
            
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl bg-brand-gray-dark rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-20 w-10 h-10 bg-black/50 hover:bg-brand-orange hover:text-brand-charcoal transition-colors rounded-full flex items-center justify-center"
              >
                <X size={20} />
              </button>

              <div className="md:w-1/2 h-64 md:h-auto relative">
                <img 
                  src={selectedProject.img} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-gray-dark md:from-transparent via-transparent to-transparent" />
              </div>

              <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto">
                <span className="text-brand-orange font-bold tracking-widest text-[10px] uppercase mb-2 block">{selectedProject.category}</span>
                <h3 className="text-3xl md:text-4xl font-black uppercase mb-8 tracking-tighter">{selectedProject.title}</h3>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-3 flex items-center gap-2">
                      <div className="w-4 h-[1px] bg-brand-orange" /> Project Scope
                    </h4>
                    <p className="text-gray-300 font-light leading-relaxed">{selectedProject.scope}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-3 flex items-center gap-2">
                      <div className="w-4 h-[1px] bg-brand-orange" /> Environmental Challenges
                    </h4>
                    <p className="text-gray-300 font-light leading-relaxed">{selectedProject.challenges}</p>
                  </div>

                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-3 flex items-center gap-2">
                      <div className="w-4 h-[1px] bg-brand-orange" /> Our Engineering Solutions
                    </h4>
                    <p className="text-gray-300 font-light leading-relaxed">{selectedProject.solutions}</p>
                  </div>
                </div>

                <div className="mt-12 flex gap-4">
                  <a 
                    href="#contact" 
                    onClick={() => setSelectedProject(null)}
                    className="bg-brand-orange text-brand-charcoal px-8 py-4 text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-white transition-colors"
                  >
                    Similar Project?
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative" data-aos="fade-right">
            <div className="aspect-square relative z-10 p-10 bento-cell">
              <img 
                src="https://images.unsplash.com/photo-1541913057-30095034608b?auto=format&fit=crop&q=80&w=800" 
                alt="Construction Team" 
                className="w-full h-full object-cover opacity-80"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-full h-full border-4 border-brand-orange rounded-3xl -z-0 hidden md:block" />
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-brand-orange text-brand-charcoal p-8 lg:p-12 text-center min-w-[200px] rounded-3xl">
              <div className="text-6xl font-black leading-none mb-2 tracking-tighter">15</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] leading-tight opacity-70">Years of <br /> Excellence</div>
            </div>
          </div>

          <div>
            <span className="text-brand-orange font-bold tracking-widest text-xs uppercase mb-4 block">Our Story</span>
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase">Trust. Diversity. <br /> <span className="serif italic font-normal text-brand-orange lowercase tracking-normal">Excellence.</span></h2>
            <p className="text-gray-400 text-lg mb-8 font-light leading-relaxed">
              Triple Tee Enterprises is more than a construction firm. We are a diversified conglomerate committed to the economic stability of Kiribati through hospitality, marine logistics, and essential retail services.
            </p>
            <p className="text-gray-400 text-lg mb-10 font-light leading-relaxed">
              Whether you are staying in our hotels, utilizing our shipping network, or building your future with our construction and joinery teams, we deliver unmatched quality across every sector.
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              {['Diversified Portfolio', 'Marine & Logistics', 'Premium Hospitality', 'Retail Leaders'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-orange" size={18} />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: 'Katoau T.', role: 'Business Owner', text: 'Triple Tee transformed our retail space in Bairiki. Their attention to detail and ability to source materials efficiently in Kiribati is unmatched.' },
    { name: 'Maria M.', role: 'Homeowner', text: 'They built our family home to be both a sanctuary and a fortress. Professional, communicative, and truly skilled at their craft.' }
  ];

  return (
    <section className="py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3 text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-black mb-6 italic serif tracking-tight">Voices of <span className="text-brand-orange">Trust</span></h2>
            <div className="flex justify-center lg:justify-start gap-1">
              {[1,2,3,4,5].map(i => <Star key={i} className="text-brand-orange fill-brand-orange" size={16} />)}
            </div>
          </div>
          <div className="lg:w-2/3 grid md:grid-cols-2 gap-8">
            {reviews.map((rev, i) => (
              <div key={rev.name} className="p-10 bento-cell-dark relative group">
                <MessageSquare className="absolute top-6 right-6 text-white/5" size={48} />
                <p className="text-gray-400 mb-8 italic italic font-light leading-relaxed">"{rev.text}"</p>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-sm">{rev.name}</h4>
                  <span className="text-[10px] text-brand-orange font-bold uppercase tracking-wider">{rev.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', service: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! Our project manager will contact you shortly.');
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter uppercase">Start Your <br /> <span className="serif italic font-normal text-brand-orange lowercase tracking-normal">Journey.</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bento-cell-dark p-8 flex flex-col gap-4">
                <div className="w-12 h-12 bg-brand-orange flex items-center justify-center text-brand-charcoal rounded-xl">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-[10px] text-gray-500 mb-1">Our Office</h4>
                  <p className="text-sm font-bold uppercase tracking-tight">Nanicai, South Tarawa</p>
                </div>
              </div>
              <div className="bento-cell-dark p-8 flex flex-col gap-4">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center text-brand-orange rounded-xl border border-white/5">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-[10px] text-gray-500 mb-1">Call Direct</h4>
                  <p className="text-sm font-bold uppercase tracking-tight">+686 7300 0000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bento-cell-dark p-8 lg:p-16">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 mb-2 block">Name</label>
                  <input 
                    type="text" 
                    required 
                    className="w-full bg-brand-charcoal border border-white/10 px-4 py-4 text-sm focus:border-brand-orange outline-none transition-colors rounded-xl"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 mb-2 block">Email</label>
                  <input 
                    type="email" 
                    required 
                    className="w-full bg-brand-charcoal border border-white/10 px-4 py-4 text-sm focus:border-brand-orange outline-none transition-colors rounded-xl"
                  />
                </div>
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 mb-2 block">Project Details</label>
                <textarea 
                  rows={4} 
                  className="w-full bg-brand-charcoal border border-white/10 px-4 py-4 text-sm focus:border-brand-orange outline-none transition-colors rounded-xl"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-brand-orange text-brand-charcoal py-5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-all transform hover:-translate-y-1 rounded-full"
              >
                Submit Project Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="pt-20 pb-10 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-black mb-6 tracking-tighter uppercase">TRIPLE TEE<span className="text-brand-orange">.</span></h2>
        <div className="flex justify-center space-x-8 mb-12">
          {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((it) => (
            <a key={it} href="#" className="text-[10px] uppercase tracking-widest font-bold text-gray-500 hover:text-white transition-colors">
              {it}
            </a>
          ))}
        </div>
        <div className="border-t border-white/5 pt-10 text-[10px] uppercase tracking-[0.3em] font-bold text-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>&copy; {new Date().getFullYear()} Triple Tee Enterprises. All Rights Reserved.</div>
          <div className="flex gap-6">
            <span className="text-white hover:text-brand-orange cursor-pointer">FB</span>
            <span className="text-white hover:text-brand-orange cursor-pointer">IG</span>
            <span className="text-white hover:text-brand-orange cursor-pointer">WA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  return (
    <motion.a 
      href="https://wa.me/68673000000"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-[60] bg-brand-orange text-brand-charcoal p-4 rounded-full shadow-2xl flex items-center justify-center group"
    >
      <MessageSquare size={24} />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-3 transition-all duration-300 text-xs font-bold uppercase tracking-wider">
        Chat with us
      </span>
    </motion.a>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <Services />
        <Portfolio />
        <AboutSection />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

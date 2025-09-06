import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, Download, ExternalLink, Calendar, Award, Code, Briefcase, GraduationCap, User, ChevronDown, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = {
    languages: ['JavaScript', 'TypeScript', 'HTML/CSS', 'C++', 'Python', 'Java'],
    frameworks: ['React.js', 'Angular', 'Tailwind CSS', 'Bootstrap', 'jQuery', 'Ant Design', 'Redux', 'RTK Query', 'Vite', 'Cypress', 'Jest', 'Tanstack Query', 'Webpack'],
    tools: ['VS Code', 'Google Cloud', 'Android Studio', 'Git', 'CI/CD pipelines', 'Postman', 'Supabase', 'Posthog', 'Swagger', 'ESLint', 'Chrome DevTools', 'React Developer Tools']
  };

  const experience = [
    {
      title: 'Software Developer',
      company: 'Maximl Labs',
      period: 'July 2024 – Present',
      location: 'Bangalore, Karnataka',
      achievements: [
        'Designed and developed 3 scalable, production-grade web applications using React for metals, oil, and gas industries, reducing resource overhead by 30%',
        'Engineered real-time notification system using Novu\'s headless SDK, WebSocket protocols, and Redux with sub-2-second delivery',
        'Implemented site selector architecture with local/session storage for multi-site industry support',
        'Built interactive Kanban dashboards with infinite scrolling for 1200+ concurrent work orders, reducing resolution time by 15%',
        'Created hierarchical Asset Tree UI managing 150,000+ assets with lazy loading and fuzzy search',
        'Generated dynamic PDF reports using jsPDF and Handlebars, contributing to 40% bug reduction post-deployment'
      ]
    },
    {
      title: 'Front End Developer Intern',
      company: 'Maximl Labs',
      period: 'July 2023 – June 2024',
      location: 'Bangalore, Karnataka',
      achievements: [
        'Developed reusable UI components using React.js and Ant Design, reducing implementation time by 75%',
        'Integrated OpenAI APIs for intelligent command processing and automated form population',
        'Designed CodeMirror-based command visualization system improving feature comprehension by 60%',
        'Built file management interfaces supporting 200+ file formats with PostgreSQL CRUD operations',
        'Improved engagement metrics by 85% through intuitive UX enhancements'
      ]
    }
  ];

  const achievements = [
    'Winner of IdeaMic Encounter hosted by BVRIT Hyderabad for innovative project presentation',
    'National Talent Search Silver Medalist awarded by NCERT for academic excellence',
    'INMO Finalist in Indian National Mathematics Olympiad conducted by SOF'
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              VR
            </h1>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'skills', 'achievements', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-200 ${
                    activeSection === section 
                      ? 'text-blue-400' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-slate-700">
              <div className="flex flex-col space-y-4 mt-4">
                {['home', 'about', 'experience', 'skills', 'achievements', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="capitalize text-left text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 relative">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">VR</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Vamshidhar Reddy
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
            Software Developer
          </h2>
          
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Experienced developer with 2+ years in React.js and TypeScript, delivering scalable web applications 
            for industrial domains with focus on real-time systems and performance optimization.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get In Touch
            </button>
            <button className="border border-gray-600 hover:border-gray-400 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-800 flex items-center justify-center gap-2">
              <Download size={18} />
              Download Resume
            </button>
          </div>

          <div className="animate-bounce">
            <ChevronDown size={32} className="mx-auto text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 shadow-xl">
                <User className="text-blue-400 mb-4" size={32} />
                <h3 className="text-2xl font-bold mb-4 text-white">Professional Journey</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I'm a passionate software developer with over 2 years of experience building scalable web applications. 
                  My expertise lies in React.js and TypeScript, with a strong focus on creating efficient, user-centric solutions 
                  for complex industrial domains including metals, oil, and gas industries.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I thrive on solving challenging problems, optimizing performance, and creating seamless user experiences 
                  that drive business value and operational efficiency.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700">
                <div className="flex items-center mb-3">
                  <GraduationCap className="text-purple-400 mr-3" size={24} />
                  <h4 className="text-xl font-semibold text-white">Education</h4>
                </div>
                <p className="text-gray-300">
                  <strong>B.Tech in Computer Science & Engineering</strong><br />
                  SRM University, AP (2020-2024)<br />
                  CGPA: 9.1/10
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700">
                <div className="flex items-center mb-3">
                  <MapPin className="text-green-400 mr-3" size={24} />
                  <h4 className="text-xl font-semibold text-white">Location</h4>
                </div>
                <p className="text-gray-300">Hyderabad, Telangana, India</p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700">
                <div className="flex items-center mb-3">
                  <Briefcase className="text-orange-400 mr-3" size={24} />
                  <h4 className="text-xl font-semibold text-white">Experience</h4>
                </div>
                <p className="text-gray-300">2+ years in professional software development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-slate-600">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                    <p className="text-xl text-blue-400 font-semibold">{job.company}</p>
                  </div>
                  <div className="text-right mt-4 md:mt-0">
                    <p className="text-gray-300 flex items-center gap-2">
                      <Calendar size={16} />
                      {job.period}
                    </p>
                    <p className="text-gray-400 flex items-center gap-2 mt-1">
                      <MapPin size={16} />
                      {job.location}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {job.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-slate-600">
              <Code className="text-blue-400 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-6 text-white">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill, index) => (
                  <span key={index} className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-600/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-slate-600">
              <Code className="text-purple-400 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-6 text-white">Frameworks & Libraries</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill, index) => (
                  <span key={index} className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-600/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-slate-600">
              <Code className="text-green-400 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-6 text-white">Developer Tools</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, index) => (
                  <span key={index} className="bg-green-600/20 text-green-300 px-3 py-1 rounded-full text-sm border border-green-600/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Achievements
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-slate-600">
                <Award className="text-yellow-400 mb-4 mx-auto" size={48} />
                <p className="text-gray-300 text-center leading-relaxed">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="text-blue-400" size={24} />
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a href="mailto:vamshidhar.reddy1125@gmail.com" className="text-white hover:text-blue-400 transition-colors">
                      vamshidhar.reddy1125@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="text-green-400" size={24} />
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <a href="tel:+918106560624" className="text-white hover:text-green-400 transition-colors">
                      +91 8106560624
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Linkedin className="text-blue-400" size={24} />
                  <div>
                    <p className="text-gray-400 text-sm">LinkedIn</p>
                    <a 
                      href="https://linkedin.com/in/vamshidhar-reddy-gudupalli" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-400 transition-colors flex items-center gap-1"
                    >
                      vamshidhar-reddy-gudupalli
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Github className="text-purple-400" size={24} />
                  <div>
                    <p className="text-gray-400 text-sm">GitHub</p>
                    <a 
                      href="https://github.com/vamshidhar" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-purple-400 transition-colors flex items-center gap-1"
                    >
                      vamshidhar
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4 text-white">Ready to collaborate?</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just having a chat about technology and innovation.
                </p>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-900 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Vamshidhar Reddy Gudupalli. Built with React and passion.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
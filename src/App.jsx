import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Code, Database, Cloud, Award, Briefcase, GraduationCap, ExternalLink, ChevronRight, Sparkles } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = {
    programming: ['Python', 'Java', 'Scala', 'SQL'],
    bigData: ['Apache Spark', 'Hadoop', 'Apache Kafka', 'Data Pipelines', 'Apache Hive', 'HDFS'],
    cloud: ['Microsoft Azure', 'Docker'],
    mlai: ['TensorFlow', 'Deep Learning', 'NLP', 'Machine Learning', 'API'],
    analytics: ['Power BI', 'Business Intelligence', 'Data Analysis'],
    integrations: ['Amazon Seller Central', 'Oracle EBS', 'NetSuite Fusion Cloud', 'Shopify', 'Salesforce', 'Apify', 'Parsera', 'OpenEHR', 'SAP S/4HANA', 'Google Sheets', 'Google Drive', 'Oracle DB', 'MS SQL'],
    tools: ['Git', 'GitHub', 'CI/CD', 'Shell Scripting']
  };

  const experience = [
    {
      title: 'Associate Business Analyst',
      company: 'BizData360',
      period: 'November 2025 - Present',
      location: 'Bangalore, India',
      points: [
        'Working on API integrations connecting diverse source and target systems',
        'Integrating platforms: Amazon Seller Central, Oracle EBS, NetSuite Fusion Cloud, Shopify, Salesforce',
        'Implementing data pipelines from Apify, Parsera, OpenEHR, SAP S/4HANA, Google Sheets, Google Drive',
        'Managing database connections including Oracle DB, MS SQL for seamless data flow',
        'Ensuring data accuracy and business intelligence across multiple enterprise systems'
      ]
    },
    {
      title: 'AI Data Engineer',
      company: 'Target Corporation',
      period: 'February 2025 - August 2025',
      location: 'Bangalore, India',
      points: [
        'Automated repetitive tasks, improving efficiency and reducing manual effort',
        'Designed and implemented two data pipelines for large-scale data processing',
        'Developed and optimized pipelines using Apache Kafka for real-time data ingestion',
        'Performed data transformations with Scala, Spark, Hadoop, and Hive',
        'Ensured scalability & performance of big data workflows to support analytics & AI use cases'
      ]
    }
  ];

  const projects = [
    {
      title: 'ETL Data Pipeline – Target Corporation',
      tech: ['Scala', 'Apache Spark', 'Hive', 'HDFS', 'Spark SQL'],
      description: 'Designed and developed a scalable ETL pipeline for large-scale data processing at Target Corporation.',
      points: [
        'Implemented transformation logic in Scala with Apache Spark for optimized performance',
        'Integrated Hive for structured data storage and SQL-based querying',
        'Automated workflows and scheduled ETL jobs, reducing manual intervention'
      ]
    },
    {
      title: 'Stock Price Prediction Using Deep Learning',
      tech: ['Python', 'TensorFlow', 'LSTM', 'Django', 'Random Forest'],
      description: 'ML/DL models for analyzing historical stock market data with real-time predictions.',
      points: [
        'Designed models (Random Forest, LSTM, KNN) for stock market analysis',
        'Performed data preprocessing, feature engineering, and normalization',
        'Integrated into Django-based web application for real-time predictions'
      ]
    },
    {
      title: 'Face Recognition Attendance System',
      tech: ['OpenCV', 'Python', 'TensorFlow', 'LBPH Algorithm'],
      description: 'Smart attendance system with real-time face detection and recognition.',
      points: [
        'Built using Local Binary Patterns Histogram (LBPH) algorithm',
        'Automated attendance tracking by mapping faces to student records',
        'Improved accuracy and minimized manual errors'
      ]
    }
  ];

  const certifications = [
    'Microsoft Azure AI-900 (2024)',
    'Accenture Data Analytics & Visualization (2024)',
    'SQL - HackerRank (2024)',
    'Introduction to Generative AI - Google (2024)',
    'Digital Engineering - NASSCOM (2023)',
    'Big Data Analytics - Great Learning (2023)'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          style={{
            left: `${mousePosition.x / 20}px`,
            top: `${mousePosition.y / 20}px`,
            transition: 'all 0.3s ease-out'
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-lg border-b border-slate-800 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-cyan-400 animate-pulse" />
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Charishma Naidu
            </span>
          </div>
          <div className="flex gap-6">
            {['Home', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item.toLowerCase())}
                className={`hover:text-cyan-400 transition-all duration-300 ${
                  activeSection === item.toLowerCase() ? 'text-cyan-400 font-semibold' : ''
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <div className="inline-block p-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-6 animate-spin-slow">
              <div className="bg-slate-900 rounded-full p-8">
                <Code className="w-16 h-16 text-cyan-400" />
              </div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Charishma Naidu
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-slate-300 mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Associate Business Analyst | AI Data Engineer
          </p>
          
          <p className="text-xl text-slate-400 mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Specializing in API Integrations, Big Data Technologies & Machine Learning
          </p>

          <div className="flex gap-4 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=charishmanaidu.03@gmail.com" target="_blank" rel="noopener noreferrer" className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Get In Touch
            </a>
            <a href="https://www.linkedin.com/in/charishma1303" target="_blank" rel="noopener noreferrer" className="border border-cyan-500 hover:bg-cyan-500/10 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              View LinkedIn
            </a>
          </div>

          <div className="flex gap-8 justify-center text-slate-400 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>+91 9321528962</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Bangalore, India</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="w-8 h-8 text-cyan-400" />
            <h2 className="text-4xl font-bold">Experience</h2>
          </div>
          
          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <div key={idx} className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-[1.02]">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-400 mb-2">{exp.title}</h3>
                    <p className="text-xl text-slate-300 mb-1">{exp.company}</p>
                    <p className="text-slate-400">{exp.location}</p>
                  </div>
                  <span className="text-cyan-400 font-semibold mt-2 md:mt-0">{exp.period}</span>
                </div>
                <ul className="space-y-2 mt-4">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300">
                      <ChevronRight className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Database className="w-8 h-8 text-cyan-400" />
            <h2 className="text-4xl font-bold">Technical Skills</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items], idx) => (
              <div key={category} className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-cyan-400 mb-4 capitalize">
                  {category === 'programming' ? 'Programming Languages' :
                   category === 'bigData' ? 'Big Data & Engineering' :
                   category === 'mlai' ? 'ML & AI' :
                   category === 'analytics' ? 'Analytics & BI' :
                   category === 'integrations' ? 'API Integrations & Systems' :
                   category === 'cloud' ? 'Cloud & Containers' :
                   'Tools & DevOps'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span key={i} className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-sm hover:bg-cyan-500/20 transition-all duration-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Code className="w-8 h-8 text-cyan-400" />
            <h2 className="text-4xl font-bold">Featured Projects</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-[1.02]">
                <h3 className="text-xl font-bold text-cyan-400 mb-3">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-slate-300 mb-4">{project.description}</p>
                <ul className="space-y-2">
                  {project.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                      <ChevronRight className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-8 h-8 text-cyan-400" />
              <h2 className="text-3xl font-bold">Education</h2>
            </div>
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300">
              <h3 className="text-xl font-bold text-cyan-400 mb-2">B.Tech in AI & Data Science</h3>
              <p className="text-slate-300 mb-1">Reva University, Bangalore</p>
              <p className="text-slate-400">2021-2025 | CGPA: 8.4/10</p>
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-8 h-8 text-cyan-400" />
              <h2 className="text-3xl font-bold">Certifications</h2>
            </div>
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300">
              <ul className="space-y-3">
                {certifications.map((cert, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-slate-300">
                    <ChevronRight className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800 relative">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>© 2025 Charishma Naidu. All rights reserved.</p>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
          animation-fill-mode: both;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;

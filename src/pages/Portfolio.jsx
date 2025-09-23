import { Container } from "../Components/Container";
import { Headings } from "../Components/Theme/Headings";

import React from 'react';
import { ChevronRight, GraduationCap, Code, Award, ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-72 h-72 lg:w-80 lg:h-80 bg-slate-800 rounded-full flex items-center justify-center">
                  <Code size={80} className="text-purple-400" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Text */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Développeur
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Full Stack
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Passionné par la création d'expériences numériques exceptionnelles. 
              Je transforme vos idées en solutions web innovantes et performantes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center gap-2">
                Voir mes projets
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="/contact" className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-full font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 text-center">
                Me contacter
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Formation Section */}
      <section className="py-20 px-6 bg-black/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <GraduationCap size={40} className="text-purple-400" />
              <h2 className="text-4xl lg:text-5xl font-bold text-white">Ma Formation</h2>
            </div>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Être autodidacte m’a transformé et fait évoluer en un développeur plus performant et passionné</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Formation 1 */}
            <div className="group bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <GraduationCap size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Développeur passionné et autodidacte</h3>
              <p className="text-purple-400 font-semibold mb-2">formations continues et de projets stimulants</p>
              <p className="text-slate-300 mb-4">2022 - 2024</p>
              <p className="text-slate-400 leading-relaxed">
                Spécialisation en développement web et mobile,et gestion de bases de données.
              </p>
            </div>

            {/* Formation 2 */}
            <div className="group bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Code size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Bootcamp Full Stack</h3>
              <p className="text-blue-400 font-semibold mb-2">formations en ligne</p>
              <p className="text-slate-300 mb-4">2020 - 2023</p>
              <p className="text-slate-400 leading-relaxed">
                Formation intensive en JavaScript, React, Node.js, bases de données et déploiement d'applications.
              </p>
            </div>

            {/* Formation 3 */}
            <div className="group bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Certifications</h3>
              <p className="text-green-400 font-semibold mb-2">Diverses plateformes</p>
              <p className="text-slate-300 mb-4">2020 - 2025</p>
              <p className="text-slate-400 leading-relaxed">
                 des certifications sur Coursera en React, Symfony, Tailwind, Python et création d’API
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Réalisations Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Mes Réalisations</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Découvrez quelques-uns de mes projets les plus marquants et innovants
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Projet 1 */}
            <div className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 flex items-center justify-center">
                <Code size={60} className="text-white group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">E-Commerce Platform</h3>
                <p className="text-slate-400 mb-4 leading-relaxed">
                  Plateforme complète avec React, Node.js, MongoDB. Système de paiement intégré et dashboard admin.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">MongoDB</span>
                </div>
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                    <ExternalLink size={16} />
                    Voir le site
                  </button>
                  <button className="flex items-center gap-2 text-slate-400 hover:text-slate-300 transition-colors">
                    <Github size={16} />
                    Code
                  </button>
                </div>
              </div>
            </div>

            {/* Projet 2 */}
            <div className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 flex items-center justify-center">
                <Code size={60} className="text-white group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">App Mobile Fitness</h3>
                <p className="text-slate-400 mb-4 leading-relaxed">
                  Application React Native avec suivi d'activités, plans d'entraînement et communauté sociale.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">React Native</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Firebase</span>
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">Redux</span>
                </div>
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                    <ExternalLink size={16} />
                    Télécharger
                  </button>
                  <button className="flex items-center gap-2 text-slate-400 hover:text-slate-300 transition-colors">
                    <Github size={16} />
                    Code
                  </button>
                </div>
              </div>
            </div>

            {/* Projet 3 */}
            <div className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-green-500 via-emerald-500 to-cyan-500 flex items-center justify-center">
                <Code size={60} className="text-white group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">Dashboard Analytics</h3>
                <p className="text-slate-400 mb-4 leading-relaxed">
                  Tableau de bord en temps réel avec visualisations de données et reporting automatisé.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Vue.js</span>
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm">PostgreSQL</span>
                </div>
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                    <ExternalLink size={16} />
                    Demo live
                  </button>
                  <button className="flex items-center gap-2 text-slate-400 hover:text-slate-300 transition-colors">
                    <Github size={16} />
                    Code
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-700 bg-black/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400 mb-4">
            Prêt à donner vie à votre prochain projet ?
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300">
            Contactez-moi
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
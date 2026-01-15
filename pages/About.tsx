import React from 'react';
import { BookOpen, Users, Globe, Cross, Mail, Phone } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Hero Header */}
      <div className="bg-blue-900 py-16 md:py-24 relative overflow-hidden">
        {/* Using the same hero-bg.jpg for consistency, with a darker overlay for text contrast */}
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-blue-900/90 z-0"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Quem Somos</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Conheça a identidade da Paróquia Luterana de São José, nossa história e quem lidera nossa caminhada de fé.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Identity Section with Logo */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-20 flex flex-col md:flex-row items-center gap-12 border border-slate-100">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-100 rounded-full blur-2xl opacity-50 transform scale-110 group-hover:scale-125 transition-transform duration-500"></div>
              {/* Added bg-slate-50 to provide contrast for the white logo shape */}
              <div className="relative w-64 h-64 bg-slate-50 rounded-full flex items-center justify-center shadow-lg border-4 border-blue-50 group-hover:border-blue-100 transition-colors">
                 <img src="/imagens/logo paróquia sj.png" alt="Logo Paróquia São José" className="w-48 h-48 drop-shadow-md " />
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-2/3 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-50 text-blue-800 rounded-full text-sm font-semibold mb-2">
              <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
              <span>IECLB - Unidos na Fé</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-800">Uma Comunidade de Fé, Esperança e Amor</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              A Paróquia Luterana de São José integra a <strong>Igreja Evangélica de Confissão Luterana no Brasil (IECLB)</strong>. 
              Somos uma igreja que valoriza a graça de Deus não como mérito humano, mas como presente divino que nos liberta para servir.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Atuamos através de nossas comunidades em Campinas, Forquilhas, Picadas e Colônia Santana, 
              sempre buscando ser sal da terra e luz do mundo em nossa cidade.
            </p>
          </div>
        </div>

        {/* Pastoral Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800">Nossa Liderança Pastoral</h2>
            <div className="w-16 h-1 bg-amber-400 mx-auto mt-4 rounded-full"></div>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-lg">
              Homens e mulheres vocacionados por Deus para servir, ensinar e acolher nossa comunidade.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pastor Joelson Martins */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 text-center group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-blue-600"></div>
              <div className="w-40 h-40 mx-auto mb-6 relative">
                <div className="absolute inset-0 bg-blue-100 rounded-full transform group-hover:scale-105 transition-transform duration-300"></div>
                <img
                  src="/imagens/joelson.png"
                  alt="Pastor Joelson Martins"
                  className="w-full h-full object-cover rounded-full relative z-10 border-4 border-white shadow-md group-hover:border-blue-50 transition-colors"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-1">P. Joelson Martins</h3>
              <p className="text-amber-500 font-medium mb-4 text-sm uppercase tracking-wide">Pastor Paroquial</p>
              <div className="flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                 <a href="#" className="p-2 bg-slate-100 rounded-full text-slate-600 hover:bg-blue-600 hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                 </a>
                 <a href="#" className="p-2 bg-slate-100 rounded-full text-slate-600 hover:bg-green-600 hover:text-white transition-colors">
                    <Phone className="w-4 h-4" />
                 </a>
              </div>
            </div>

            {/* Pastora Marta Martins Schnaider */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 text-center group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-blue-600"></div>
              <div className="w-40 h-40 mx-auto mb-6 relative">
                <div className="absolute inset-0 bg-blue-100 rounded-full transform group-hover:scale-105 transition-transform duration-300"></div>
                <img
                  src="/imagens/marta.png"
                  alt="Pastora Marta Martins Schnaider"
                  className="w-full h-full object-cover rounded-full relative z-10 border-4 border-white shadow-md group-hover:border-blue-50 transition-colors"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-1">Pa. Marta Martins</h3>
              <p className="text-amber-500 font-medium mb-4 text-sm uppercase tracking-wide">Pastora</p>
               <div className="flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                 <a href="#" className="p-2 bg-slate-100 rounded-full text-slate-600 hover:bg-blue-600 hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                 </a>
                 <a href="#" className="p-2 bg-slate-100 rounded-full text-slate-600 hover:bg-green-600 hover:text-white transition-colors">
                    <Phone className="w-4 h-4" />
                 </a>
              </div>
            </div>

            {/* Pastor Helton Hélio Kreutzfeld */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 text-center group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-blue-600"></div>
              <div className="w-40 h-40 mx-auto mb-6 relative">
                <div className="absolute inset-0 bg-blue-100 rounded-full transform group-hover:scale-105 transition-transform duration-300"></div>
                <img
                  src="/imagens/helton.jpeg"
                  alt="Pastor Helton Hélio Kreutzfeld"
                  className="w-full h-full object-cover rounded-full relative z-10 border-4 border-white shadow-md group-hover:border-blue-50 transition-colors"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-1">P. Helton Kreutzfeld</h3>
              <p className="text-amber-500 font-medium mb-4 text-sm uppercase tracking-wide">Pastor</p>
               <div className="flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                 <a href="#" className="p-2 bg-slate-100 rounded-full text-slate-600 hover:bg-blue-600 hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                 </a>
                 <a href="#" className="p-2 bg-slate-100 rounded-full text-slate-600 hover:bg-green-600 hover:text-white transition-colors">
                    <Phone className="w-4 h-4" />
                 </a>
              </div>
            </div>
          </div>
        </div>

        {/* Values List (Simplified) */}
        <div className="bg-slate-100 rounded-2xl p-8 border border-slate-200">
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-center space-x-3">
                 <div className="p-2 bg-white rounded-lg text-amber-500 shadow-sm"><BookOpen className="w-5 h-5" /></div>
                 <span className="font-medium text-slate-700">Fidelidade à Palavra</span>
              </div>
              <div className="flex items-center space-x-3">
                 <div className="p-2 bg-white rounded-lg text-amber-500 shadow-sm"><Users className="w-5 h-5" /></div>
                 <span className="font-medium text-slate-700">Comunhão e Acolhimento</span>
              </div>
              <div className="flex items-center space-x-3">
                 <div className="p-2 bg-white rounded-lg text-amber-500 shadow-sm"><Globe className="w-5 h-5" /></div>
                 <span className="font-medium text-slate-700">Sustentabilidade e Cuidado</span>
              </div>
              <div className="flex items-center space-x-3">
                 <div className="p-2 bg-white rounded-lg text-amber-500 shadow-sm"><Cross className="w-5 h-5" /></div>
                 <span className="font-medium text-slate-700">Ética e Transparência</span>
              </div>
           </div>
        </div>

        {/* Closing Quote */}
        <div className="text-center max-w-4xl mx-auto border-t border-slate-200 pt-16 mt-16">
          <blockquote className="text-2xl font-serif text-slate-700 italic mb-6">
            "Justificado pela fé, tenho paz com Deus por meio de nosso Senhor Jesus Cristo."
          </blockquote>
          <cite className="text-slate-500 font-medium not-italic">— Romanos 5:1</cite>
        </div>

      </div>
    </div>
  );
};

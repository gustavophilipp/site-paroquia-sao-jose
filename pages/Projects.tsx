import React from 'react';
import { PROJECTS } from '../constants';
import { Button } from '../components/Button';
import { CheckCircle, Music, BookOpen, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Projects: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-blue-900 mb-6">Fé que Transforma Vidas</h1>
          <p className="text-xl text-blue-800 max-w-3xl mx-auto leading-relaxed">
            Nossos projetos sociais são a expressão prática do amor de Deus. 
            Subsidiados pela paróquia e mantidos por corações generosos, levamos 
            dignidade, educação e arte para quem mais precisa.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {PROJECTS.map((project, index) => (
          <div key={project.id} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
            
            {/* Visual Side */}
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute inset-0 bg-amber-400 rounded-2xl transform translate-x-3 translate-y-3 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
              <img 
                src={project.image} 
                alt={project.name} 
                className="relative rounded-2xl shadow-xl w-full h-96 object-cover z-10"
              />
              {project.id === 'colonia-santana' && (
                <div className="absolute -bottom-6 -right-6 z-20 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3">
                  <div className="bg-red-100 p-2 rounded-full text-red-600">
                    <Music className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase">Destaque</p>
                    <p className="text-sm font-semibold text-gray-800">Aulas de Música</p>
                  </div>
                </div>
              )}
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                <Heart className="h-4 w-4" />
                <span>Projeto Social</span>
              </div>
              
              <h2 className="text-3xl font-bold text-slate-900">{project.name}</h2>
              <h3 className="text-xl text-amber-500 font-medium">{project.subtitle}</h3>
              
              <p className="text-slate-600 text-lg leading-relaxed">
                {project.description}
              </p>

              <ul className="space-y-3">
                {project.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center text-slate-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                 <Button onClick={() => navigate('/contribua')}>
                    Quero Ajudar este Projeto
                 </Button>
              </div>
            </div>
          </div>
        ))}

        {/* Video Highlight Section (Simulated) */}
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">Veja o Impacto em Ação</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Nossas crianças da Colônia Santana louvando e aprendendo. Um pequeno vislumbre do futuro que estamos construindo juntos.
            </p>
            {/* This would be the YouTube Embed in production */}
            <div className="aspect-w-16 aspect-h-9 max-w-3xl mx-auto bg-slate-800 rounded-xl flex items-center justify-center border border-slate-700 h-64 md:h-96">
               <div className="text-center">
                 <BookOpen className="h-12 w-12 text-slate-600 mx-auto mb-2" />
                 <p className="text-slate-500">Vídeo do YouTube (Colônia Santana)</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
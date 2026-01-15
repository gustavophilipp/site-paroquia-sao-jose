import React from 'react';
import { PROJECTS } from '../constants';
import { Button } from '../components/Button';
import { CheckCircle, Music, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Helper function to convert YouTube URL to embed URL
const getYouTubeEmbedUrl = (url: string): string => {
  const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.+)/;
  const match = url.match(youtubeRegex);
  if (match && match[1]) {
    return `https://www.youtube.com/embed/${match[1].split('&')[0]}`;
  }
  return url;
};

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
              {project.videoUrl ? (
                <div className="relative rounded-2xl shadow-xl w-full h-96 z-10 overflow-hidden bg-black">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={getYouTubeEmbedUrl(project.videoUrl)} 
                    title={project.name}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              ) : (
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="relative rounded-2xl shadow-xl w-full h-96 object-cover z-10"
                />
              )}
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
      </div>
    </div>
  );
};

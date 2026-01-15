import React, { useMemo, useState, useEffect } from 'react';
import { MapPin, Clock, ChevronRight, Church } from 'lucide-react';
import { COMMUNITIES } from '../constants';
import { Button } from '../components/Button';

// Helper component to handle image errors gracefully
const CommunityImage = ({ src, alt }: { src: string; alt: string }) => {
  const [error, setError] = useState(false);

  // Reset error state when src changes (important for hot reloading/updates)
  useEffect(() => {
    setError(false);
  }, [src]);

  if (error) {
    return (
      <div className="w-full h-full bg-slate-100 flex flex-col items-center justify-center text-slate-400 p-4 border-2 border-dashed border-slate-200">
        <Church className="w-12 h-12 mb-2 opacity-50" />
        <span className="text-xs text-center font-medium">Sem imagem</span>
        <span className="text-[10px] text-center mt-1 text-slate-300 break-all">{src}</span>
      </div>
    );
  }

  return (
    <img 
      src={src} 
      alt={alt} 
      className="w-full h-full object-contain p-2 bg-white transition-transform duration-500 group-hover:scale-105"
      onError={() => setError(true)}
    />
  );
};

export const Communities: React.FC = () => {
  // Sort communities alphabetically by name
  const sortedCommunities = useMemo(() => {
    return [...COMMUNITIES].sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Nossas Comunidades</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Encontre a comunidade mais próxima de você e venha participar de nossos cultos e encontros.
          </p>
        </div>

        <div className="space-y-6">
          {sortedCommunities.map((community) => (
            <div 
              key={community.id} 
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 overflow-hidden group"
            >
              <div className="flex flex-col md:flex-row p-6 md:p-8 items-center gap-8">
                
                {/* Square Logo/Image Section */}
                <div className="shrink-0 relative">
                  <div className="w-40 h-40 md:w-48 md:h-48 rounded-xl overflow-hidden shadow-inner border border-slate-100 bg-white relative">
                    <CommunityImage 
                      src={community.image} 
                      alt={`Fachada ou Logo ${community.name}`} 
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-grow text-center md:text-left space-y-4 w-full">
                  <h3 className="text-2xl font-bold text-slate-800 group-hover:text-blue-800 transition-colors">
                    {community.name}
                  </h3>

                  <div className="space-y-3">
                    <div className="flex items-start justify-center md:justify-start text-slate-600">
                      <Clock className="h-5 w-5 mr-3 text-amber-500 mt-0.5 shrink-0" />
                      <div className="text-sm">
                        <span className="font-semibold text-slate-700 block mb-1">Horários de Culto:</span>
                        <ul className="space-y-1">
                          {community.schedule.map((time, idx) => (
                            <li key={idx} className="flex items-center justify-center md:justify-start">
                              <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2"></span>
                              {time}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start justify-center md:justify-start text-slate-600">
                      <MapPin className="h-5 w-5 mr-3 text-blue-600 mt-0.5 shrink-0" />
                      <div className="text-sm text-left">
                        <span className="font-semibold text-slate-700 block mb-1">Endereço:</span>
                        <p>{community.address}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Section */}
                <div className="shrink-0 w-full md:w-auto pt-4 md:pt-0 border-t md:border-t-0 border-slate-100">
                  <Button 
                    href={community.mapLink} 
                    target="_blank" 
                    variant="outline" 
                    className="w-full md:w-auto group/btn flex items-center justify-center whitespace-nowrap"
                  >
                    Como Chegar
                    <ChevronRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
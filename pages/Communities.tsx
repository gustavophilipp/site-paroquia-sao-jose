import React from 'react';
import { MapPin, Clock } from 'lucide-react';
import { COMMUNITIES } from '../constants';
import { Button } from '../components/Button';

export const Communities: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Nossas Comunidades</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Encontre a comunidade mais próxima de você e venha participar de nossos cultos e encontros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {COMMUNITIES.map((community) => (
            <div key={community.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-slate-100">
              <div className="h-48 w-full relative">
                <img 
                  src={community.image} 
                  alt={`Fachada da ${community.name}`} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{community.name}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start text-slate-600">
                    <Clock className="h-5 w-5 mr-3 text-amber-500 mt-1 shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-800 block mb-1">Horários de Culto:</span>
                      <ul className="list-disc list-inside text-sm">
                        {community.schedule.map((time, idx) => (
                          <li key={idx}>{time}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start text-slate-600">
                    <MapPin className="h-5 w-5 mr-3 text-amber-500 mt-1 shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-800 block mb-1">Endereço:</span>
                      <p className="text-sm">{community.address}</p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button 
                      href={community.mapLink} 
                      target="_blank" 
                      variant="outline" 
                      className="w-full"
                    >
                      Como Chegar (Google Maps)
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
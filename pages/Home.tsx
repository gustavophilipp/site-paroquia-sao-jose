import React from 'react';
import { Button } from '../components/Button';
import { ArrowRight, Calendar, HeartHandshake } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative bg-blue-900 text-white py-20 lg:py-32"
        style={{ backgroundImage: "url('/imagens/fundo%20site.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* Gradient Overlay - Adjusted to show the photo while keeping text readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/80 to-blue-900/60 z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-800/80 border border-blue-400/50 text-blue-100 text-sm font-semibold mb-6 tracking-wide backdrop-blur-sm">
            IECLB São José
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 leading-tight drop-shadow-md">
            Uma igreja de comunidades <br className="hidden md:block" />
            <span className="text-amber-400">a serviço da vida.</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-white font-medium leading-relaxed drop-shadow-sm">
            Seja bem-vindo(a)! Através da comunhão, do ensino e do serviço ao próximo, buscamos vivenciar e compartilhar o amor de Deus.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              variant="secondary" 
              onClick={() => navigate('/comunidades')}
              className="group"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Ver Horários de Cultos
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-900 bg-blue-900/30 backdrop-blur-sm"
              onClick={() => navigate('/projetos')}
            >
              <HeartHandshake className="mr-2 h-5 w-5" />
              Conhecer Projetos Sociais
            </Button>
          </div>
        </div>
      </section>

      {/* Feature Highlight Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800">Nossa Missão</h2>
            <div className="w-16 h-1 bg-amber-400 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 rounded-2xl hover:shadow-lg transition-shadow border border-slate-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 mb-4">
                <HeartHandshake className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">Comunhão</h3>
              <p className="text-slate-600">
                Fortalecemos laços através do acolhimento em nossas comunidades de Campinas, Forquilhas, Picadas e Colônia Santana.
              </p>
            </div>
            
            <div className="p-8 bg-slate-50 rounded-2xl hover:shadow-lg transition-shadow border border-slate-100">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mb-4">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">Ensino</h3>
              <p className="text-slate-600">
                Oferecemos espaços de aprendizado bíblico e reforço escolar, promovendo esperança através do conhecimento.
              </p>
            </div>

            <div className="p-8 bg-slate-50 rounded-2xl hover:shadow-lg transition-shadow border border-slate-100">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-700 mb-4">
                <ArrowRight className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">Serviço</h3>
              <p className="text-slate-600">
                Atuamos ativamente com projetos sociais que transformam vidas através da música, alimentação e cuidado.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quick CTA */}
      <section className="bg-slate-900 py-16 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Venha fazer parte desta história</h2>
          <p className="mb-8 text-slate-300 text-lg">
            Sua presença e seus dons são fundamentais para nossa caminhada comunitária.
          </p>
          <Button variant="secondary" onClick={() => navigate('/contribua')}>
            Quero ser Voluntário
          </Button>
        </div>
      </section>
    </div>
  );
};

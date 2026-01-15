import React from 'react';
import { Copy, Heart, Users, Utensils, Music } from 'lucide-react';
import { Button } from '../components/Button';

export const Contribute: React.FC = () => {
  const pixKey = "80.460.678/0001-96"; 

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixKey);
    alert('Chave PIX copiada para a área de transferência!');
  };

  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* Header */}
      <div className="bg-amber-500 py-16 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Mãos que Servem, Corações que Amam</h1>
        <p className="text-xl max-w-2xl mx-auto px-4 opacity-90">
          Mantenha viva essa obra. Sua doação alimenta sonhos, sua presença transforma realidades.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-10">
        
        {/* Donation Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100 rounded-bl-full -mr-16 -mt-16 z-0"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-12">
            <div className="flex-1 space-y-6">
              <h2 className="text-2xl font-bold text-slate-800 flex items-center">
                <Heart className="h-6 w-6 text-red-500 mr-2" fill="currentColor" />
                Faça uma Oferta de Amor
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Todos os nossos projetos sociais são subsidiados pela Paróquia de São José e por doações de pessoas como você. 
                Sua oferta ajuda a manter:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-100">
                  <Utensils className="h-6 w-6 text-amber-500 mx-auto mb-2" />
                  <span className="text-sm font-medium text-slate-700">Lanches</span>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-100">
                   <Users className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                  <span className="text-sm font-medium text-slate-700">Acolhimento</span>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-100">
                   <Music className="h-6 w-6 text-green-500 mx-auto mb-2" />
                  <span className="text-sm font-medium text-slate-700">Música</span>
                </div>
              </div>
            </div>

            <div className="flex-1 bg-slate-50 rounded-xl p-6 border border-slate-200 flex flex-col justify-center items-center text-center">
              <p className="text-sm text-slate-500 uppercase tracking-wide font-bold mb-2">Chave PIX (CNPJ)</p>
              <div className="bg-white px-6 py-3 rounded-lg border border-slate-300 font-mono text-xl text-slate-800 mb-4 w-full break-all">
                {pixKey}
              </div>
              <Button onClick={handleCopyPix} variant="primary" className="w-full sm:w-auto">
                <Copy className="h-4 w-4 mr-2" />
                Copiar Chave PIX
              </Button>
              <p className="text-xs text-slate-400 mt-4">Banco do Brasil | Paróquia Luterana de São José</p>
            </div>
          </div>
        </div>

        {/* Volunteer Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-800">Quero ser Voluntário</h2>
            <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
            <p className="text-lg text-slate-600 leading-relaxed">
              Tem um dom para ensinar, contar histórias, cozinhar ou apenas quer doar seu tempo para ouvir alguém? 
              Estamos sempre precisando de mãos dispostas!
            </p>
            <p className="text-slate-600">
              Junte-se a nós nesta missão de servir. Preencha o formulário e entraremos em contato.
            </p>
            <div className="pt-4">
              <Button 
                href="https://forms.gle/CXwv7ynBYowrtCZQA" 
                target="_blank" 
                variant="secondary"
                className="w-full sm:w-auto"
              >
                Preencher Formulário de Voluntariado
              </Button>
            </div>
          </div>
          
          <div className="h-80 rounded-2xl overflow-hidden shadow-lg">
             <img 
               src="https://picsum.photos/id/1059/800/800" 
               alt="Voluntários trabalhando" 
               className="w-full h-full object-cover"
             />
          </div>
        </div>

      </div>
    </div>
  );
};
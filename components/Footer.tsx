import React from 'react';
import { MapPin, Phone, Mail, Instagram, Youtube, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Column 1: Identity */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Paróquia Luterana de São José</h3>
            <p className="text-sm leading-relaxed max-w-xs">
              Uma igreja de comunidades a serviço da vida. Integrante da Igreja Evangélica de Confissão Luterana no Brasil (IECLB).
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-amber-400 transition-colors"><Instagram className="h-6 w-6" /></a>
              <a href="#" className="hover:text-amber-400 transition-colors"><Youtube className="h-6 w-6" /></a>
            </div>
          </div>

          {/* Column 2: Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Fale Conosco</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-amber-500 shrink-0" />
                <span className="text-sm">Av. Brigadeiro Silva Paes, 744,<br/>Campinas, São José - SC</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-amber-500 shrink-0" />
                <span className="text-sm">(48) 3372-1111</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-amber-500 shrink-0" />
                <span className="text-sm">administrador@ieclbsaojose.org.br</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Apoie esta Obra</h3>
            <p className="text-sm mb-4">
              Seus dons e ofertas mantêm nossos projetos sociais vivos.
            </p>
            <Link 
              to="/contribua" 
              className="inline-flex items-center text-amber-400 hover:text-amber-300 font-medium transition-colors"
            >
              <Heart className="h-4 w-4 mr-2" fill="currentColor" />
              Quero contribuir
            </Link>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Paróquia Luterana de São José. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

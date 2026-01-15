import { Community, Project } from './types';

export const COMMUNITIES: Community[] = [
  {
    id: 'campinas',
    name: 'Comunidade de Campinas',
    schedule: ['Todos os domingos às 19:30', '2º e 4º domingo do mês às 09:00'],
    address: 'Rua Adhemar da Silva, 1070, Campinas, São José - SC',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Rua+Adhemar+da+Silva,+1070,+Campinas,+São+José+-+SC',
    image: 'https://picsum.photos/id/122/800/600',
  },
  {
    id: 'forquilhas',
    name: 'Comunidade de Forquilhas',
    schedule: ['Todos os domingos às 19:30'],
    address: 'Forquilhas, São José - SC',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Igreja+Luterana+Forquilhas+São+José+SC',
    image: 'https://picsum.photos/id/188/800/600',
  },
  {
    id: 'picadas',
    name: 'Comunidade de Picadas',
    schedule: ['Todas as terças-feiras às 19:30'],
    address: 'Picadas do Sul, São José - SC',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Igreja+Luterana+Picadas+São+José+SC',
    image: 'https://picsum.photos/id/192/800/600',
  },
  {
    id: 'colonia',
    name: 'Ponto de Pregação Colônia Santana',
    schedule: ['Todos os domingos às 09:00'],
    address: 'Colônia Santana, São José - SC',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Colônia+Santana+São+José+SC',
    image: 'https://picsum.photos/id/206/800/600',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'monte-cristo',
    name: 'Projeto Monte Cristo',
    subtitle: 'Acolhimento Familiar e Alegria',
    description: 'Um espaço sagrado de escuta, diálogo e fortalecimento de laços. Enquanto as crianças vivenciam a alegria da fé, os pais encontram acolhimento.',
    details: [
      'Contação de histórias bíblicas lúdicas',
      'Espaço de escuta para pais',
      'Lanche comunitário',
      'Fortalecimento de vínculos'
    ],
    image: 'https://picsum.photos/id/453/800/600',
  },
  {
    id: 'colonia-santana',
    name: 'Ação Social Colônia Santana',
    subtitle: 'Educação, Música e Esperança',
    description: 'Levamos esperança através do conhecimento e da arte para a zona rural. Acreditamos que a música e o reforço escolar são ferramentas divinas de transformação.',
    details: [
      'Reforço escolar pedagógico',
      'Aulas de musicalização com Maestro',
      'Louvor e histórias',
      'Atendimento em zona rural'
    ],
    image: 'https://picsum.photos/id/447/800/600',
  }
];
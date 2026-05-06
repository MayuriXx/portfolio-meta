/**
 * Portfolio implementation versions
 * Each version demonstrates a different technology stack
 * while maintaining the same design and data structure
 */
export const versions = [
  {
    id: 'flutter',
    name: 'Flutter',
    icon: '🐦',
    color: '#54C5F8',
    status: 'soon', // 'live' when deployed
    url: null,
    github: null,
    description: 'Rendu canvas natif via Flutter Web. Architecture Riverpod, widget tests et golden tests. La version qui sort du lot — un CV rendu par un moteur mobile.',
    tags: ['Dart', 'Flutter Web', 'Riverpod', 'Canvas', 'Golden Tests']
  },
  {
    id: 'vue',
    name: 'Vue.js',
    icon: '💚',
    color: '#2D9E6B',
    status: 'soon',
    url: null,
    github: null,
    description: 'Composition API, Vue Router, Vite. Données centralisées en JSON. Architecture légère et maintenable — la version la plus lisible pour un dev front.',
    tags: ['Vue 3', 'Composition API', 'Vite', 'JSON data']
  },
  {
    id: 'react',
    name: 'React',
    icon: '⚛️',
    color: '#1A8FA8',
    status: 'soon',
    url: null,
    github: null,
    description: 'Hooks, Context API, composants fonctionnels. L\'approche la plus demandée du marché, exécutée avec rigueur.',
    tags: ['React 18', 'Hooks', 'Context API', 'Vite']
  },
  {
    id: 'angular',
    name: 'Angular',
    icon: '🔴',
    color: '#C0392B',
    status: 'soon',
    url: null,
    github: null,
    description: 'Architecture modulaire, services injectables, typage TypeScript strict, RxJS. La version enterprise-grade plébiscitée dans les grands groupes.',
    tags: ['Angular 17', 'TypeScript', 'Services', 'RxJS']
  }
]
System.config({
  transpiler: 'ts',
  typescriptOptions: {
    emitDecoratorMetadata: true,
    experimentalDecorators: true
  },
  packages: {
    ".": {
      main: './app.ts',
      defaultExtension: 'ts'
    },
  },
  meta: {
    'typescript': { 'exports': 'ts' }
  },
  paths: {
    'npm:': 'https://unpkg.com/'
  },
  map: {
    'ts': 'https://unpkg.com/plugin-typescript@8.0.0/lib/plugin.js',
    'typescript': 'https://unpkg.com/typescript@2.9.2/lib/typescript.js'
  }
});

System.import('./src/app')
  .catch(console.error.bind(console));
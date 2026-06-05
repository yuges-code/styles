import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    minify: false,
    lib: {
      entry: [
        path.resolve(__dirname, 'src/main.ts'),
        // path.resolve(__dirname, 'scripts/scan.ts'),
        path.resolve(__dirname, 'scripts/parse.ts'),
      ]
    },
    rollupOptions: {
      external: ['fs', 'path', 'glob', 'fast-glob', 'url', 'module'],
      output: [
        {
          format: 'es',
          entryFileNames: (chunk) =>
            chunk.name === 'main' ? 'styles.js' : 'scripts/[name].js',
        },
        {
          format: 'cjs',
          entryFileNames: (chunk) =>
            chunk.name === 'main' ? 'styles.cjs' : 'scripts/[name].cjs',
        },
      ],
    },
  },
  plugins: [
    
  ],
});

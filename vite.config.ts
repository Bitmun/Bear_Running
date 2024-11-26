import react from '@vitejs/plugin-react';

import * as path from 'path';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: [{ find: '@styles', replacement: path.resolve(__dirname, 'src/styles') }],
  },
});

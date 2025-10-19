import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['./src/index.ts'],
  target: false,
  platform: 'browser',
  exports: true,
  dts: true,
  minify: true,
});

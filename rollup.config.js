import { resolve } from 'path'
import esbuild from 'rollup-plugin-esbuild'

import pkg from './package.json'

const banner = `/*!
* ${pkg.name} v${pkg.version}
* (c) ${new Date().getFullYear()} ${pkg.author?.name ?? 'unknown'}<${pkg.author?.email ?? 'unknown'}>
*/`

export default {
  input: resolve(__dirname, 'src/index.ts'),
  output: [
    {
      file: pkg.main,
      format: 'umd',
      name: pkg.name,
      exports: 'named',
      banner,
    },
    {
      file: pkg.module,
      format: 'esm',
      banner,
    },
  ],
  plugins: [
    esbuild()
  ],
}

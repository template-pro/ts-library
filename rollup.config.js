import { resolve } from 'path'
import { defineConfig } from 'rollup'
import esbuild from 'rollup-plugin-esbuild'
import buble from '@rollup/plugin-buble'
import { terser } from 'rollup-plugin-terser'
import dts from 'rollup-plugin-dts'

import pkg from './package.json'

const moduleName = pkg.name.replace(/^@.*\//, '')
const banner = `/*!
* ${moduleName} v${pkg.version}
* (c) ${new Date().getFullYear()} ${pkg.author.name}<${pkg.author.email}>
*/`

export default [].concat(
  defineConfig({
    input: resolve(__dirname, 'src/index.ts'),
    output: [
      {
        file: pkg.main,
        format: 'umd',
        name: moduleName,
        exports: 'named',
        sourcemap: 'inline',
        banner,
      },
      {
        file: pkg.main.replace('.js', '.min.js'),
        format: 'umd',
        name: moduleName,
        exports: 'named',
        // sourcemap: "inline",
        banner,
        plugins: [terser()],
      },
      {
        file: pkg.module,
        format: 'esm',
        banner,
      },
    ],
    plugins: [
      esbuild(),
      buble(),
    ],
  }),
  defineConfig({
    input: resolve(__dirname, 'src/index.ts'),
    output: [
      {
        file: pkg.types,
        format: 'es',
      },
    ],
    plugins: [dts()],
  }),
)

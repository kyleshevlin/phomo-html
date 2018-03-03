import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import filesize from 'rollup-plugin-filesize'
import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import uglify from 'rollup-plugin-uglify'

function configFactory(dest, format, isUgly = false) {
  return {
    input: 'src/index.js',
    output: {
      exports: 'named',
      file: dest,
      format,
      name: 'phomo-html',
      sourcemap: true
    },
    plugins: [
      resolve({
        extensions: ['.js', '.json']
      }),
      commonjs(),
      json(),
      babel({
        babelrc: false,
        presets: [
          [
            'env',
            {
              modules: false
            }
          ]
        ],
        plugins: ['codegen', 'external-helpers'],
        exclude: 'node_modules/**'
      }),
      isUgly && uglify(),
      filesize()
    ]
  }
}

const config = [
  configFactory('dist/phomo-html.js', 'cjs'),
  configFactory('dist/phomo-html.umd.js', 'umd', true),
  configFactory('dist/phomo-html.module.js', 'es')
]

export default config

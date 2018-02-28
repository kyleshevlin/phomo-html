import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import filesize from 'rollup-plugin-filesize'
import resolve from 'rollup-plugin-node-resolve'

function configFactory(dest, format) {
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
      resolve(),
      commonjs(),
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
        plugins: ['external-helpers'],
        exclude: 'node_modules/**'
      }),
      filesize()
    ]
  }
}

const config = [
  configFactory('dist/phomo-html.js', 'cjs'),
  configFactory('dist/phomo-html.umd.js', 'umd'),
  configFactory('dist/phomo-html.module.js', 'es')
]

export default config

// Contents of the file /rollup.config.js
import typescript from '@rollup/plugin-typescript'
import eslint from '@rollup/plugin-eslint'
import dts from 'rollup-plugin-dts'

const config = [
  {
    input: 'src/index.ts',
    output: {
      file: 'lib/styled-qr-code.js',
      format: 'cjs',
      sourcemap: true,
    },
    plugins: [typescript(), eslint()],
  }, {
    input: 'src/index.ts',
    output: {
      file: 'lib/index.d.ts',
      format: 'es',
    },
    plugins: [dts()],
  },
]

export default config

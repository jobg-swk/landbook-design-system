import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import babel from '@rollup/plugin-babel';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const buildFormatList = ['cjs','es']

export default buildFormatList.map((format)=>({
  input: "components/index.ts",
  output:{
    dir: `dist/${format}`,
    format,
    exports: 'auto',
  },
  external: [/@babel\/runtime/],
  preserveModules: format === 'cjs',
  plugins: [
    peerDepsExternal(),
    resolve({
      extensions,
    }),
    commonjs({
      include: 'node_modules/**'
    }),
    babel({
      include: ['components/**/*'],
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
      extensions
    }),
    terser()
  ],
}))

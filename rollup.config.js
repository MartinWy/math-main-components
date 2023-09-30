import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';


const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const globals = {
    'react': 'React',
    'react-dom': 'ReactDOM'
};

export default {
    input: ['./src/index.ts'],
    external: ['react', 'react-dom'],
    output: [
        {
            file: 'dist/index.esm.js',
            format: 'esm',
            globals,
        },
        {
            file: 'dist/index.cjs.js',
            format: 'cjs',
            globals,
        },
    ],
    plugins: [
        peerDepsExternal(),
        nodeResolve({ extensions }),
        commonjs(),
        typescript(),
        postcss({
            extract: false,
        })
    ],
};
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import { dts } from 'rollup-plugin-dts';

const input = 'src/index.ts';
const external = []; // 如果有第三方库不想被打包进来，可以在这里列出它们的名字

const baseConfig = {
  input,
  external,
  plugins: [
    resolve(),
    commonjs(),
    typescript(),
    postcss({
      // 抽取CSS到单独的文件中
      extract: 'styles.css',
      // 可选配置
      plugins: [
        // 可以添加 PostCSS 插件
        require('autoprefixer')(),
      ],
    }),
  ],
};

// 输出配置数组
const configs = [];

// ES module 输出
configs.push({
  ...baseConfig,
  output: {
    file: 'dist/toast.esm.js',
    format: 'es',
    exports: 'named', // 或者 'auto'
    sourcemap: true,
  },
});

// UMD 输出
configs.push({
  ...baseConfig,
  output: {
    file: 'dist/toast.umd.js',
    format: 'umd',
    name: 'LittleToast', // 在浏览器环境中的全局变量名称
    globals: {},
    sourcemap: true,
    extend: true,
  },
});

// types definition
configs.push({
  input: 'src/index.d.ts',
  output: [{ file: 'dist/toast.d.ts', format: 'es' }],
  plugins: [dts()],
});

export default configs;

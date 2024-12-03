// const path = require('path')

// module.exports = {
//   alias: {
//     '/@/': path.resolve(__dirname, './src')
//   },
//   host: '0.0.0.0',
//   hostname: 'localhost', // 默认是 localhost
//   port: '3000',
//   open: true,
//   base: './', // 生产环境下的公共路径
//   outDir: 'dist', // 打包构建输出路径，默认 dist ，如果路径存在，构建之前会被删除
//   proxy: {} // 本地开发环境通过代理实现跨域，生产环境使用 nginx 转发}
// }


import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

const pathResolve = (dir) => {
	return resolve(__dirname, '.', dir);
};

const alias = {
	'/@': pathResolve('./src/'),
};

const viteConfig = defineConfig(() => {
	return {
		plugins: [
			vue(),
			AutoImport({
        imports: ["vue", "vue-router", "pinia", "@vueuse/core"],//这里是自动引入api的项目
        dts: "./src/auto-imports.d.js",//在这创建.d.ts文件
				resolvers: [ElementPlusResolver()]
			}),
			Components({
				resolvers: [ElementPlusResolver()],
			}),
		],
		resolve: { alias },
		base: './',
		server: {
			host: '0.0.0.0',
			port: 8090,
			open: false,
			proxy: {},
		},
		css: { preprocessorOptions: { css: { charset: false, scss: {
      api: 'modern-compiler'
    } } } },
		build: {},
	};
});

export default viteConfig;



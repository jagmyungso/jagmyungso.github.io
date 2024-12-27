export default {
    root: 'src',
    build: {
        minify: true,
        emptyOutDir: true,
        outDir: '../dist',
        rollupOptions: {
            input: {
                'landing': '/index.html',
                'baby' : '/baby/index.html',
                'company' : '/company/index.html',
            },
            output: {
                entryFileNames: "[name]/[name]-[hash].js",
                assetFileNames: `global/[name]-[hash].[ext]`
            },
        },
        assetsDir: 'global',
    }
  }
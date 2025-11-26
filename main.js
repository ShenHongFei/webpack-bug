import Webpack from 'webpack'

let webpack = Webpack({
    mode: 'production',
    
    devtool: false,
    
    experiments: {
        outputModule: true,
    },
    
    entry: {
        'bundle.mjs': './entry.js',
        ... process.argv[2] === 'normal' ? { } : { 'other.mjs': './other.js' }
    },
    
    target: ['node23', 'es2024'],
    
    output: {
        filename: '[name]',
        globalObject: 'globalThis',
        module: true,
        library: {
            type: 'module'
        },
        chunkLoading: false
    },
    
    optimization: {
        minimize: false
    },
    
    cache: false
})


await new Promise((resolve, reject) => {
    webpack.run((error, stats) => {
        if (error)
            reject(error)
        else if (stats.hasErrors()) {
            console.log(stats.toString(webpack.options.stats))
            reject(new Error('build failed'))
        } else
            resolve(stats)
    })
})


await new Promise((resolve, reject) => {
    webpack.close(error => {
        if (error)
            reject(error)
        else
            resolve()
    })
})

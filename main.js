import Webpack from 'webpack'

let webpack = Webpack({
    devtool: false,
    
    experiments: {
        outputModule: true,
    },
    
    entry: {
        'bundle-js.js': './entry.js',
        'bundle-ts.js': './entry.ts',
    },
    
    target: ['node23', 'es2024'],
    
    output: {
        filename: '[name]',
        globalObject: 'globalThis',
        module: true,
        library: {
            type: 'module',
        },
        chunkLoading: false
    },
    
    optimization: {
        minimize: false
    },
    
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
                // https://github.com/TypeStrong/ts-loader
                options: {
                    configFile: './tsconfig.json',
                    onlyCompileBundledFiles: true,
                    transpileOnly: true,
                    compilerOptions: {
                        module: 'ESNext',
                        moduleResolution: 'Bundler',
                        declaration: false,
                        noEmit: false,
                        allowImportingTsExtensions: false,
                    }
                }
            },
        ]
    }
})


await new Promise((resolve, reject) => {
    webpack.run((error, stats) => {
        if (error)
            reject(error)
        else if (stats.hasErrors()) {
            console.log(stats.toString(webpack.options.stats))
            reject(new Error(`${this.name} build failed`))
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


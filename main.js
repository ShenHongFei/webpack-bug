import Webpack from 'webpack'

let webpack = Webpack({
    entry: {
        'bundle.js': './entry.ts'
    },
    
    infrastructureLogging: {
        debug: /PackFileCache/
    },
    
    cache: {
        type: 'filesystem',
        compression: false,
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
                    compilerOptions: {
                        module: 'ESNext',
                        moduleResolution: 'Bundler',
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


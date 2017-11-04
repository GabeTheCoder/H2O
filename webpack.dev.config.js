
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

const autoprefixer = require('autoprefixer')

// MARK: Script Loaders

const jsLoader = {
    test: /\.js$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
    query: {
        presets: ['env', 'stage-2', 'react']
    }
}

const jsxLoader = {
    test: /\.jsx$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
    query: {
        presets: ['env', 'stage-2', 'react']
    }
}

// MARK: Style Loaders

const cssLoader = {
    test: /\.css/,
    use: ExtractTextPlugin.extract({
        use: [
            { loader: 'css-loader' },
            { loader: 'postcss-loader', options: { plugins: [autoprefixer()] } }
        ]
    })
}

// MARK: Image Loaders

const frontendImageLoader = {
    test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/], 
    loader: 'file-loader', 
    options: { 
        name: '/images/[name].[ext]' 
    }
}

const backendImageLoader = {
    test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/], 
    loader: 'file-loader', 
    options: { 
        name: '/public/images/[name].[ext]', 
        publicPath: url => url.replace('public/', '') 
    }
}

// MARK: Frontend Configuration

const frontendConfiguration = {
    entry: './frontend/index.js',
    output: { 
        path: __dirname + '/static/public', 
        filename: 'index.js' 
    },
    module: { 
        rules: [frontendImageLoader, cssLoader, jsLoader, jsxLoader] 
    },
    plugins: [
        new ExtractTextPlugin({ filename: 'css/[name].css' })
    ]
}

// MARK: Backend Configuration

const backendConfiguration = {
    entry: './backend/index.js',
    target: 'node',
    output: { 
        path: __dirname + '/static', 
        filename: 'index.js' 
    },
    module: { 
        rules: [backendImageLoader, cssLoader, jsLoader, jsxLoader] 
    },
    externals: [nodeExternals()],
    plugins: [
        new ExtractTextPlugin({ filename: 'public/css/[name].css' })
    ]
}

module.exports = [frontendConfiguration, backendConfiguration]
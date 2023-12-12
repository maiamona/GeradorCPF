const path = require('path');//commonJS - sistemas de modulos

module.exports ={//tudo que estiver nesse objeto sera exportado fora
mode: 'production', //'development' - desenvolvimento, 'production' - produção
entry: './src/main.js',
output:{ 
    path: path.resolve(__dirname, 'public', 'assets', 'js'),
filename: 'bundle.js'
},
module: {
    rules:[{
       exclude:/node_modules/, 
    test: /\.js$/, 
   use:{
      loader: 'babel-loader',
      options:{
        presets: ['@babel/env']
      }
   }
    },{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
},
devtool: 'source-map'
};
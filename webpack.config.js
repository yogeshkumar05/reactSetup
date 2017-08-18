module.exports={
    entry:'./src/index.js',
    output:{
        path:__dirname,
        filename:'bundle.js'
    },
    devServer:
    {
        inline:true,
        host:"0.0.0.0",
        port:1234
    },
    module:
    {
        loaders:
        [
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:'babel-loader',
                query:
                {
                    presets:['es2015', 'react']
                }
            },


        ]
    }
}
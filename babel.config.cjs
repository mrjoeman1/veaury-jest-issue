module.exports = api => {
    if (api.env('test')) {
        return {
            presets: [
                [
                    "babel-preset-vite"
                ],
                [
                    '@babel/preset-env',
                    {
                        targets: {
                            node: 'current'
                        }
                    }
                ]
            ]
        };
    }
}

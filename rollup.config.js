import scss from 'rollup-plugin-scss'

export default [{
    input: '#src/js/main.js',
    output: {

        file: 'js/main.js',
        format: 'iife'
    },
}, {
    input: '#src/scss/style.scss',
    output: {
        file: 'css/style',
        format: 'esm'
    },
    plugins: [
        scss() // will output compiled styles to output.css
    ]
},
];
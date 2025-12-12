module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        root: ['.'],
        alias: {
          '@': './src',
          '@App': './src/App',
          '@entities': './src/entities',
          '@helpers': './src/helpers',
          '@pages': './src/pages',
          '@shared': './src/shared',
          '@widgets': './src/widgets',
        },
        transformFunctions: ['require', 'import']
      }
    ]
  ],
  env: {
    development: {
      plugins: [
        ['module-resolver', {
          alias: {
            '^react-native$': 'react-native-web'
          }
        }]
      ]
    }
  }
};
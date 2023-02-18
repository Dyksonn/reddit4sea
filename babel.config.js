module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module-resolver', {
        root: ['./src'],
        alias: {
          '@screens': './src/screens',
          '@assets': './src/assets',
          '@components': './src/components',
          '@service': './src/service',
          '@store': './src/store'
        }
      }]
    ]
  };
};

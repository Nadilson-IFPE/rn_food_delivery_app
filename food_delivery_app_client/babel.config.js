module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      'nativewind/babel',
      ['tailwindcss-react-native/babel', { platform: 'native' }],
      /* [
        'babel-plugin-root-import',
        {
          root: __dirname,
          rootPathPrefix: '@',
          rootPathSuffix: './src',
        },
      ], */
    ],
    env: {
      production: {
        plugins: [
          'nativewind/babel',
          ['tailwindcss-react-native/babel', { platform: 'native' }],
          /*  [
            'babel-plugin-root-import',
            {
              root: __dirname,
              rootPathPrefix: '@',
              rootPathSuffix: './src',
            },
          ], */
        ],
      },
    },
  };
};

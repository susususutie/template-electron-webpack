// const DEV = process.env.NODE_ENV === 'development';

module.exports = {
  presets: [
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
  ],
  // plugins: [
  //   ...(DEV ? ['react-refresh/babel'] : []),
  //   [
  //     '@babel/plugin-transform-runtime',
  //     {
  //       corejs: 3,
  //       useESModules: true,
  //       version: "^7.21.0"
  //     },
  //   ],
  // ],
};

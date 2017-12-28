exports.config = {
  namespace: 'material-webcomponents',
  generateDistribution: true,
  bundles: [
    { components: ['my-component'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}

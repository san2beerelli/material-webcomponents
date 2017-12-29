exports.config = {
  namespace: 'material-webcomponents',
  generateDistribution: true,
  bundles: [
    { components: [
      'mwc-button',
      'mwc-card-actions',
      'mwc-card-content',
      'mwc-card-header',
      'mwc-card-media',
      'mwc-card',
      'mwc-checkbox',
      'mwc-dialog-body',
      'mwc-dialog-footer',
      'mwc-dialog-header',
      'mwc-dialog',
      'mwc-drawer',
      'mwc-fab',
      'mwc-grid-list',
      'mwc-grid-list-tile',
      'mwc-icon-toggle',
      'mwc-list',
      'mwc-list-item',
      'mwc-menu',
      'mwc-menu-item',
      'mwc-paper',
      'mwc-progress',
      'mwc-radio',
      'mwc-select',
      'mwc-slider',
      'mwc-snackbar',
      'mwc-switch',
      'mwc-tabbar',
      'mwc-textfield',
      'mwc-theme',
      'mwc-toolbar',
      'mwc-typography'
      ] }
  ],
   sassConfig:{
      "includePaths":[
        "./node_modules"
      ]
    }
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}

'use strict';

module.exports = cartridgeName => ({
    name: cartridgeName,
    version: '0.0.1',
    description: 'New overlay cartridge',
    main: 'index.js',
    scripts: {
        lint: 'sgmf-scripts --lint js && sgmf-scripts --lint css',
        'lint:fix': 'sgmf-scripts --lint js --fix && sgmf-scripts --lint css --fix',
        upload: 'sgmf-scripts --upload -- ',
        uploadCartridge: 'sgmf-scripts --uploadCartridge ' + cartridgeName,
        'compile:js': 'sgmf-scripts --compile js',
        'compile:scss': 'sgmf-scripts --compile css'
    },
    devDependencies: {
        eslint: '^3.2.2',
        'eslint-config-airbnb-base': '^5.0.1',
        'eslint-plugin-import': '^1.12.0',
        stylelint: '^7.1.0',
        'stylelint-config-standard': '^12.0.0',
        'stylelint-scss': '^1.3.4',
        istanbul: '^0.4.4',
        mocha: '^5.2.0',
        sinon: '^1.17.4',
        chai: '^3.5.0',
        proxyquire: '1.7.4',
        'sgmf-scripts': '^2.0.0',
        'css-loader': '^0.28.11',
        'node-sass': '^4.9.0',
        'postcss-loader': '^2.1.5',
        'sass-loader': '^7.0.3'
    },
    browserslist: [
        'last 2 versions',
        'ie >= 10'
    ]
});

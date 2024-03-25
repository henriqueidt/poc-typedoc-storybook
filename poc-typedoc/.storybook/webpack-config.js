const path = require('path');

const aliases = {
  '@components': path.resolve('./src/components'),
  '@stories': path.resolve('./src/stories'),
};

module.exports = async config => {
  configAliases(config);

  return config;
};

function configAliases(config) {
  config.resolve.alias = { ...config.resolve.alias, ...aliases };
}


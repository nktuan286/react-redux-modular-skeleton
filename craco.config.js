const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@modules': path.resolve(__dirname, 'src/modules/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
      '@config': path.resolve(__dirname, 'src/config/')
    }
  }
};

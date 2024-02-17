const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  // Thêm cài đặt cho react-native-screens vào đây
  resolver: {
    // Thêm tên module của react-native-screens vào danh sách các module
    // Cần phải được giải quyết trong dự án của bạn.
    // Trong trường hợp này, tên module là 'react-native-screens'.
    // Nếu tên module của bạn khác, hãy thay đổi thành tên đó.
    extraNodeModules: {
      'react-native-screens': require.resolve('react-native-screens'),
    },
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);

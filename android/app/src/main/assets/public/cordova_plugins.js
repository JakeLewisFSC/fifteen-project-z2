
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "cordova-plugin-ble-central.ble",
          "file": "plugins/cordova-plugin-ble-central/www/ble.js",
          "pluginId": "cordova-plugin-ble-central",
        "clobbers": [
          "ble"
        ]
        },
      {
          "id": "phonegap-plugin-barcodescanner.BarcodeScanner",
          "file": "plugins/phonegap-plugin-barcodescanner/www/barcodescanner.js",
          "pluginId": "phonegap-plugin-barcodescanner",
        "clobbers": [
          "cordova.plugins.barcodeScanner"
        ]
        },
      {
          "id": "cordova-plugin-badge.Badge",
          "file": "plugins/cordova-plugin-badge/www/badge.js",
          "pluginId": "cordova-plugin-badge",
        "clobbers": [
          "cordova.plugins.notification.badge"
        ]
        },
      {
          "id": "cordova-plugin-local-notification.LocalNotification",
          "file": "plugins/cordova-plugin-local-notification/www/local-notification.js",
          "pluginId": "cordova-plugin-local-notification",
        "clobbers": [
          "cordova.plugins.notification.local"
        ]
        },
      {
          "id": "cordova-plugin-device.device",
          "file": "plugins/cordova-plugin-device/www/device.js",
          "pluginId": "cordova-plugin-device",
        "clobbers": [
          "device"
        ]
        },
      {
          "id": "cordova-plugin-local-notification.LocalNotification.Core",
          "file": "plugins/cordova-plugin-local-notification/www/local-notification-core.js",
          "pluginId": "cordova-plugin-local-notification",
        "clobbers": [
          "cordova.plugins.notification.local.core",
          "plugin.notification.local.core"
        ]
        },
      {
          "id": "cordova-plugin-googleplus.GooglePlus",
          "file": "plugins/cordova-plugin-googleplus/www/GooglePlus.js",
          "pluginId": "cordova-plugin-googleplus",
        "clobbers": [
          "window.plugins.googleplus"
        ]
        },
      {
          "id": "cordova-plugin-statusbar.statusbar",
          "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
          "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
          "window.StatusBar"
        ]
        },
      {
          "id": "cordova-plugin-local-notification.LocalNotification.Util",
          "file": "plugins/cordova-plugin-local-notification/www/local-notification-util.js",
          "pluginId": "cordova-plugin-local-notification",
        "merges": [
          "cordova.plugins.notification.local.core",
          "plugin.notification.local.core"
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-plugin-badge": "0.8.8",
      "cordova-plugin-ble-central": "1.2.5",
      "cordova-plugin-googleplus": "8.5.0",
      "cordova-plugin-local-notification": "0.9.0-beta.2",
      "phonegap-plugin-barcodescanner": "8.1.0",
      "cordova-plugin-device": "2.0.2",
      "cordova-plugin-statusbar": "2.4.2",
      "cordova-plugin-whitelist": "1.3.3"
    };
    // BOTTOM OF METADATA
    });
    
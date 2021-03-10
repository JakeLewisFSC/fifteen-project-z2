#ifdef __OBJC__
#import <UIKit/UIKit.h>
#else
#ifndef FOUNDATION_EXPORT
#if defined(__cplusplus)
#define FOUNDATION_EXPORT extern "C"
#else
#define FOUNDATION_EXPORT extern
#endif
#endif
#endif

#import "APPBadge.h"
#import "BLECentralPlugin.h"
#import "BLECommandContext.h"
#import "CBPeripheral+Extensions.h"
#import "CDVDevice.h"
#import "APPLocalNotification.h"
#import "APPNotificationContent.h"
#import "APPNotificationOptions.h"
#import "UNNotificationRequest+APPLocalNotification.h"
#import "UNUserNotificationCenter+APPLocalNotification.h"

FOUNDATION_EXPORT double CordovaPluginsVersionNumber;
FOUNDATION_EXPORT const unsigned char CordovaPluginsVersionString[];


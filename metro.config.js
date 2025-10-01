// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// 1. إضافة دعم wasm و JSON إلى الأصول
config.resolver.assetExts.push("wasm");
// أضف 'json' إلى امتدادات المصدر (sourceExts) إذا كنت تستوردها كـ modules
config.resolver.sourceExts.push("json"); // <--- إضافة تهيئة JSON هنا

// 2. إضافة رؤوس COEP و COOP
config.server.enhanceMiddleware = (middleware) => {
  return (req, res, next) => {
    res.setHeader("Cross-Origin-Embedder-Policy", "credentialless");
    res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
    middleware(req, res, next);
  };
};

module.exports = config;

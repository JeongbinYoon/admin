const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/culture", {
      target: "http://www.culture.go.kr",
      pathRewrite: {
        "^/culture": "",
      },
      changeOrigin: true,
    })
  );

  //   app.use(
  //     createProxyMiddleware("/다른context", {
  //       target: "https://다른호스트",
  //       pathRewrite: {
  //         "^/지우려는패스": "",
  //       },
  //       changeOrigin: true,
  //     })
  //   );
};
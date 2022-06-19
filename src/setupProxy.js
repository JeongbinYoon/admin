const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/localhost", {
      target: "http://localhost:8080",
      pathRewrite: {
        "^/localhost": "",
      },
      changeOrigin: true,
    })
  );

  app.use(
    createProxyMiddleware("/localhost/product", {
      target: "http://localhost:8080/product",
      pathRewrite: {
        "^/localhost": "",
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

var http = require('http');
var httpProxy = require('http-proxy');
var express = require('express');
var app = express();
var proxy = httpProxy.createProxyServer();

proxy.on('proxyReq', function(proxyReq, req, res, options) {
  proxyReq.path += ('?access_token=' + 'someToken');
});

app.all("*", function(req, res) {
  proxy.web(req, res, {
    changeOrigin: true,
    target: APIUrl
  });
});

app.listen(8000);

console.log('proxy enabled on port 8000')
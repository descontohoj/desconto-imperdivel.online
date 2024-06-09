
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.pt-BR.9e580747f8035cf42d93.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/507.latest.pt-BR.c32f1ca6d9e4f3edd4bc.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/49.latest.pt-BR.c9bde3f89a701314f8ba.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/180.latest.pt-BR.df921c2edcb5dfe99d5a.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.pt-BR.3bf540fa4954e62d5ff3.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/Information.latest.pt-BR.525e616abc615ad4849d.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/507.latest.pt-BR.4fd7e3f7bb313fda8aea.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.pt-BR.ea4e0b588d831fb573d7.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/119.latest.pt-BR.c44e401a4a91432c1f22.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0846/3741/7789/files/sofanacaixa_logotipo_line_site_x320.png?v=1709579920"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  
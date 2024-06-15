
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.pt-BR.0c64db93671288770558.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2115.latest.pt-BR.bf3a1903fe2c14f1ed48.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/892.latest.pt-BR.b9f6037cb251f3857873.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4085.latest.pt-BR.9f43ba93f8b7ea7298cd.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.pt-BR.125238604265dbb76a37.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2542.latest.pt-BR.e8b98a9ed829efc0c730.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/3344.latest.pt-BR.c39a8edddee1b8b59f3f.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/8070.latest.pt-BR.8ff27283522475e94436.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2080.latest.pt-BR.5117e670600bcaf49bb5.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4143.latest.pt-BR.66d83879e405ebe10fcc.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/9962.latest.pt-BR.fd7e4677355a426fcd6f.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/3395.latest.pt-BR.c7c9fb092b1a8964b27c.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2594.latest.pt-BR.cd31ced301d35cd73b82.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5449.latest.pt-BR.b71382d5457a858d9113.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.latest.pt-BR.ac37c970b45f8c65d4a2.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/2115.latest.pt-BR.e73fe840dd244856c60b.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.pt-BR.f878cbc70c40091e73ed.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6268.latest.pt-BR.638b07883971b82241e1.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

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
          if (res) preconnect(res, next);
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
  
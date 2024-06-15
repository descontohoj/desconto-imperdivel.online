
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.en.449baaa3cd5de0547bfb.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2115.latest.en.bf3a1903fe2c14f1ed48.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/892.latest.en.b9f6037cb251f3857873.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4085.latest.en.9f43ba93f8b7ea7298cd.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.73628a1b97e802440a41.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2542.latest.en.e8b98a9ed829efc0c730.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/3344.latest.en.c39a8edddee1b8b59f3f.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/8070.latest.en.8ff27283522475e94436.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2080.latest.en.5117e670600bcaf49bb5.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4143.latest.en.bf89daaad137ee20fcc3.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/9962.latest.en.6fd0808f6ef6931780e0.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/3395.latest.en.2a87edd30532907646f1.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2594.latest.en.fce14a31cdc11f5d6234.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5449.latest.en.f9abd197addf86f903ad.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.latest.en.291aa5856b1adc486ae4.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/2115.latest.en.e73fe840dd244856c60b.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.f878cbc70c40091e73ed.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6268.latest.en.638b07883971b82241e1.css"];
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
  
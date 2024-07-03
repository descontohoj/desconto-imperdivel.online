
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.pt-BR.d132fc0878f21d3d915b.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2276.latest.pt-BR.4ce24876729015b4b969.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6386.latest.pt-BR.a195dc32f3dbe34d6aa5.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4085.latest.pt-BR.d3bc65d7a91c6d71a13d.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.pt-BR.22a68344ff9aa0258863.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2542.latest.pt-BR.e8b98a9ed829efc0c730.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/9317.latest.pt-BR.ea1b54561e1cad3bf9e1.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/8070.latest.pt-BR.8ff27283522475e94436.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2080.latest.pt-BR.5117e670600bcaf49bb5.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/8933.latest.pt-BR.251cd0723048da204352.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/9962.latest.pt-BR.de29f4733a38920f7a59.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5137.latest.pt-BR.74d2400f63dc76041598.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2594.latest.pt-BR.2e7ee61d11295651abba.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5449.latest.pt-BR.4ea35d2f117ce9151a1d.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.latest.pt-BR.33999b3a7e182dc85da5.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/2276.latest.pt-BR.57ef3369c9cd93bde4db.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.pt-BR.19558d19ece777c39c33.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6268.latest.pt-BR.8039276cabb7faecfb04.css"];
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
  
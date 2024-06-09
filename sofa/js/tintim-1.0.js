(function () {
    var tt = window.tt || {}

    tt.init = function () {
        if (this.accountCode) {
            this.saveParams();
            this.addParamsToLinks();
        }
    }

    tt.addParamsToLinks = function () {
        // Add params to all hrefs
        const links = document.querySelectorAll('a[href]');

        for (const link of links) {
            const url = new URL(link.href);

            // Get cookies that exists
            const cookies = document.cookie.split('; ').reduce((obj, cookie) => {
                var [name, value] = cookie.split('=');
                if (name.startsWith("tt_")){
                    name = name.replace("tt_", "")
                    obj[name] = value;
                }
                return obj;
            }, {});

            // Add cookies if not exists
            for (const [name, value] of Object.entries(cookies)) {
                if (!url.searchParams.has(name)) {
                    url.searchParams.append(name, value);
                }
            }

            link.href = url.toString();
        }
    }

    tt.saveParams = function () {
        // Get all params and add to cookies
        const queryParams = new URLSearchParams(window.location.search);
        const validParams = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "campaignid", "adsetid", "fbclid", "tintim_fbid", "adset", "adid", "gclid", "utm_term", "adgroupid", "targetid", "adcampaign", "groupid", "gad_source", "utm_id", "__hsfp", "__hssc", "__hstc", "__s", "_hsenc", "_openstat", "dclid", "fbclid", "gclid", "hsCtaTracking", "mc_eid", "mkt_tok", "ml_subscriber", "ml_subscriber_hash", "msclkid", "oly_anon_id", "oly_enc_id", "rb_clickid", "s_cid", "vero_conv", "vero_id", "wickedid", "yclid"]

        for (const param of queryParams.entries()) {
            if (validParams.includes(param[0])) {
                document.cookie = `tt_${param[0]}=${param[1]};`;
            }
        }
    }

    tt.init();
})();
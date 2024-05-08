import { appWithTranslation } from 'next-i18next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from 'next/script';
import '@/styles/globals.css';

function App({ Component, pageProps }) {
  return (
    <>
      {/* Messenger Plugin de chat */}
      <div id="fb-root"></div>
      <div id="fb-customer-chat" className="fb-customerchat"></div>

      <Component {...pageProps} />
      <SpeedInsights />
      <Analytics />
      {/* Google Tag Manager - gtag.js */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-K5VXJ9SQTY"
        strategy="afterInteractive"
        async
      />
      {/* Google Analytics */}
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-K5VXJ9SQTY');
          `,
        }}
      />
      {/* TikTok Pixel */}
      <Script
        id="tiktok-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function (w, d, t) {
              w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"];
              ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};
              for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);
              ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e};
              ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};
              ttq.load('COG14SRC77U2K6E2DMV0');
              ttq.page();
            }(window, document, 'ttq');
          `,
        }}
      />
      {/* Google Tag Manager - gtag.js */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-1B2H5H35RB"
        strategy="afterInteractive"
        async
      />
      {/* Google Analytics */}
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1B2H5H35RB');
          `,
        }}
      />
      {/* Metricool */}
      <Script
        id="metricool-tracker"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            function loadScript(a){
              var b = document.getElementsByTagName("head")[0],
                  c = document.createElement("script");
              c.type = "text/javascript";
              c.src = "https://tracker.metricool.com/resources/be.js";
              c.onreadystatechange = a;
              c.onload = a;
              b.appendChild(c);
            }
            loadScript(function(){
              beTracker.t({hash:"6d136cf1310b4a4e481c718b5044eed"});
            });
          `,
        }}
      />
      {/* HubSpot Embed Code */}
      <Script
        id="hs-script-loader"
        src="//js.hs-scripts.com/6797997.js"
        async
        defer
      />
      {/* Google Tag Manager - gtag.js */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-787782364"
        strategy="afterInteractive"
        async
      />
      {/* Google Analytics */}
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-787782364');

            // Event snippet for Cliente Potencial conversion page
            gtag('event', 'conversion', {'send_to': 'AW-787782364/2inICKbUqK8BENy10vcC'});
          `,
        }}
      />
      {/* SDK de Facebook Messenger */}
      <Script
        id="facebook-sdk"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.fbAsyncInit = function() {
              FB.init({
                xfbml            : true,
                version          : 'v12.0'
              });
            };

            (function(d, s, id) {
              var js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) return;
              js = d.createElement(s); js.id = id;
              js.src = 'https://connect.facebook.net/es_LA/sdk/xfbml.customerchat.js';
              fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
          `,
        }}
      />
      {/* Configuración del chatbox */}
      <Script
        id="facebook-chatbox-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var chatbox = document.getElementById('fb-customer-chat');
            chatbox.setAttribute("page_id", "185162308789540");
            chatbox.setAttribute("attribution", "biz_inbox");
          `,
        }}
      />
      {/* Hotjar Tracking Code */}
      <Script
        id="hotjar-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(h,o,t,j,a,r){
              h.hj = h.hj || function(){(h.hj.q = h.hj.q || []).push(arguments)};
              h._hjSettings = {hjid:4950303, hjsv:6};
              a = o.getElementsByTagName('head')[0];
              r = o.createElement('script'); r.async = 1;
              r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
              a.appendChild(r);
            })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
          `
        }}
      />
    </>
  );
}

export default appWithTranslation(App);
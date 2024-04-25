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
            !function(w, d, t){
              w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];
              ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"];
              ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};
              for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);
              ttq.load('CGQ3SGRC77U5U41DLFT0');
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
    </>
  );
}

export default appWithTranslation(App);
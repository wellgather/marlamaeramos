import { useEffect } from 'react';

declare global {
  interface Window {
    fd: any;
    FlodeskObject: string;
  }
}

export default function NewsletterForm() {
  useEffect(() => {
    const existingScript = document.querySelector('script[src*="flodesk"]');
    if (!existingScript) {
      (function (w: any, d, t, h, s, n) {
        w.FlodeskObject = n;
        const fn = function () {
          (w[n].q = w[n].q || []).push(arguments);
        };
        w[n] = w[n] || fn;
        const f = d.getElementsByTagName(t)[0];
        const v = '?v=' + Math.floor(new Date().getTime() / (120 * 1000)) * 60;
        const sm = d.createElement(t) as HTMLScriptElement;
        sm.async = true;
        sm.type = 'module';
        sm.src = h + s + '.mjs' + v;
        f.parentNode!.insertBefore(sm, f);
        const sn = d.createElement(t) as HTMLScriptElement;
        sn.async = true;
        (sn as any).noModule = true;
        sn.src = h + s + '.js' + v;
        f.parentNode!.insertBefore(sn, f);
      })(window, document, 'script', 'https://assets.flodesk.com', '/universal', 'fd');
    }

    const tryInit = () => {
      if (typeof window.fd === 'function') {
        window.fd('form', {
          formId: '69fa042fb8d8b7417c4907b4',
          containerEl: '#fd-form-69fa042fb8d8b7417c4907b4',
        });
      } else {
        setTimeout(tryInit, 200);
      }
    };
    tryInit();
  }, []);

  return <div id="fd-form-69fa042fb8d8b7417c4907b4"></div>;
}

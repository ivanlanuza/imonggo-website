import "../styles/globals.css";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    window.intercomSettings = {
      api_base: "https://api-iam.intercom.io",
      app_id: "w09kh1lv",
    };

    // Intercom code snippet
    (function () {
      var w = window;
      var ic = w.Intercom;
      if (typeof ic === "function") {
        ic("reattach_activator");
        ic("update", w.intercomSettings);
      } else {
        var d = document;
        var i = function () {
          i.c(arguments);
        };
        i.q = [];
        i.c = function (args) {
          i.q.push(args);
        };
        w.Intercom = i;
        var l = function () {
          var s = d.createElement("script");
          s.type = "text/javascript";
          s.async = true;
          s.src = "https://widget.intercom.io/widget/w09kh1lv";
          var x = d.getElementsByTagName("script")[0];
          x.parentNode.insertBefore(s, x);
        };
        if (document.readyState === "complete") {
          l();
        } else if (w.attachEvent) {
          w.attachEvent("onload", l);
        } else {
          w.addEventListener("load", l, false);
        }
      }
    })();

    // Call boot method
    window.Intercom("boot", {
      app_id: "w09kh1lv",
    });
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      window.Intercom("update");
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <div>
      <Head>
        <title>imonggo - World&apos;s Easiest Point of Sale</title>
        <meta
          name="description"
          content="Imonggo is great for small and medium retail businesses."
        />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

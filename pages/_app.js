import "../styles/globals.css";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    window.intercomSettings = {
      app_id: "w09kh1lv",
      name: "<%= @current_user.name %>", // Full name
      email: "<%= @current_user.email %>", // Email address
      user_hash:
        "<%= OpenSSL::HMAC.hexdigest('sha256', 'vNPLBMEdCqQZ8eNzTzEFanz_S4DTs1Y9GAUWEzEv', @current_user.email) %>",
      account_name: "<%= @current_account.name%>",
      subscription_type: "<%= @current_account.subscription_type%>",
      branch_count: " <%= @current_account.regular_branches.count%>",
      products_count: "<%= @current_account.products_count %>",
      invoices_count: "<%= @current_account.invoices_count%>",
      user_role: "<%= @current_user.role.name%>",
      cluster_id: "<%=CONFIG['cluster_id']%>",
      created_at: "<%= @current_account.created_at.to_i%>",
      trial_start_date: "<%= trial_start_date%>",
      premium_start_date: "<%=@current_account.premium_start_date%>",
      trial_expired_at: "<%=@current_account.trial_expired_at%>",
    };

    // Intercom code snippet
    (function () {
      var w = window;
      var ic = w.Intercom;
      if (typeof ic === "function") {
        ic("reattach_activator");
        ic("update", intercomSettings);
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
        function l() {
          var s = d.createElement("script");
          s.type = "text/javascript";
          s.async = true;
          s.src = "https://widget.intercom.io/widget/w09kh1lv";
          var x = d.getElementsByTagName("script")[0];
          x.parentNode.insertBefore(s, x);
        }
        if (w.attachEvent) {
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

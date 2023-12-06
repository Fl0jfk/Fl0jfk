"use client"

import { useEffect } from "react";
import ReactGA from "react-ga";
import { Router } from "next/router";

const Analytics: React.FC = () => {
  const analyticsTrackingID = process.env.NEXT_PUBLIC_ANALYTICS_ID;

  useEffect(() => {
    const hasAcceptedCookies = document.cookie.includes("_ga");
    if (!hasAcceptedCookies && analyticsTrackingID) {
      ReactGA.initialize(analyticsTrackingID, {
        // Add any additional options if needed
      });

      console.log("Google Analytics initialized");

      Router.events.on("routeChangeComplete", ReactGA.pageview);

      // @ts-ignore
      window._axcb = window._axcb || [];
      // @ts-ignore
      window._axcb.push((axeptio) => {
        axeptio.on("cookies:complete", (choices: any) => {
          console.log("Axeptio cookies:complete event", choices);

          if (choices.google_analytics) {
            ReactGA.set({ anonymizeIp: false });
          } else {
            ReactGA.set({ anonymizeIp: true });
          }
        });
      });
    
      return () => {
        Router.events.off("routeChangeComplete", ReactGA.pageview);
      };
    }
  }, [analyticsTrackingID]);

  return null;
};

export default Analytics;




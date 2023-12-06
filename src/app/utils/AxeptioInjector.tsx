"use client"

import { useEffect } from "react";

declare global {
  interface Window {
    _axcb?: any[];
  }
}

const initializeAxeptio = () => {
  // @ts-ignore
  window._axcb = window._axcb || [];
  // @ts-ignore
  window._axcb.push((axeptio) => {
    axeptio.on("cookies:complete", (choices: any) => {
    });
  });
};

const AxeptioInjector = () => {
  useEffect(() => {
    const hasAcceptedCookies = document.cookie.includes("_ga");
    const isAxeptioScriptLoaded = document.head.querySelector("[src='https://static.axept.io/sdk-slim.js']");
    if (!hasAcceptedCookies && !isAxeptioScriptLoaded) {
      const el = document.createElement("script");
      el.src = "https://static.axept.io/sdk-slim.js";
      el.type = "text/javascript";
      el.async = true;
      el.setAttribute("data-id", "656f63b43dacbe63ad90b34c");

      document.head.appendChild(el);
      initializeAxeptio();
    }
  }, []);

  return null;
};

export default AxeptioInjector;



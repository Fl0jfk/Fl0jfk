"use client"

import { useEffect } from "react";

declare global {
    interface Window {
        _axcb?: any[];
    }
}

const AxeptioInjector = () => {
    useEffect(() => {
        if (!window._axcb) {
            const el = document.createElement("script");
            el.setAttribute("src", "https://static.axept.io/sdk-slim.js");
            el.setAttribute("type", "text/javascript");
            el.setAttribute("async", "true");
            el.setAttribute("data-id", "656f63b43dacbe63ad90b34c");

            if (document.body !== null) {
                document.body.appendChild(el);
            }
        }
    }, []);

    // This component doesn't render anything (return null)
    return null;
};

export default AxeptioInjector;

"use client"

import { useEffect } from "react";

const AxeptioInjector = () => {
    useEffect(() => {
        const el = document.createElement("script");
        el.setAttribute("src", "https://static.axept.io/sdk-slim.js");
        el.setAttribute("type", "text/javascript");
        el.setAttribute("async", "true");
        el.setAttribute("data-id", "656f63b43dacbe63ad90b34c");
        if (document.body !== null) {
            document.body.appendChild(el);
        }
    }, []);
    return null;
};
export default AxeptioInjector;
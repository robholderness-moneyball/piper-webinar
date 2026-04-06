"use client";

import { useEffect, useId } from "react";

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (options: {
          region: string;
          portalId: string;
          formId: string;
          target: string;
          redirectUrl?: string;
        }) => void;
      };
    };
  }
}

interface Props {
  formId: string;
  portalId?: string;
  redirectUrl?: string;
  className?: string;
}

export function HubSpotForm({
  formId,
  portalId = "5442952",
  redirectUrl,
  className,
}: Props) {
  const targetId = useId().replace(/:/g, "");

  useEffect(() => {
    if (!formId) return;

    const containerId = `hs-form-${targetId}`;
    const container = document.getElementById(containerId);
    if (!container) return;

    function createForm() {
      window.hbspt?.forms.create({
        region: "na1",
        portalId,
        formId,
        target: `#hs-form-${targetId}`,
        ...(redirectUrl && { redirectUrl }),
      });
    }

    if (window.hbspt) {
      createForm();
      return;
    }

    const existingScript = document.querySelector(
      'script[src="//js.hsforms.net/forms/embed/v2.js"]'
    );

    if (existingScript) {
      existingScript.addEventListener("load", createForm);
      return () => existingScript.removeEventListener("load", createForm);
    }

    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.type = "text/javascript";
    script.onload = createForm;
    document.body.appendChild(script);

    return () => {
      // Don't remove the script — other forms on the page may need it
    };
  }, [formId, portalId, redirectUrl, targetId]);

  if (!formId) {
    return (
      <div
        className={`p-6 border border-dashed border-[#E5E7EB] rounded-xl text-center text-[#6B7280] text-sm ${className}`}
      >
        HubSpot Form ID not configured.
      </div>
    );
  }

  return <div id={`hs-form-${targetId}`} className={className} />;
}

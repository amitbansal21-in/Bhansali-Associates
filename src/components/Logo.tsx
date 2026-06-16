import React from "react";
import { SITE_CONFIG } from "../constants/config";
import "./Logo.css";

interface LogoProps {
  inverse?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ inverse = false }) => {
  const logoUrl = inverse ? SITE_CONFIG.logoInverseSrc : SITE_CONFIG.logoSrc;

  return (
    <div className={`logo-typography ${inverse ? "logo-inverse" : "logo-main"}`}>
      {logoUrl && (
        <img
          src={logoUrl}
          alt=""
          width="42"
          height="42"
          className="logo-img-mark"
          loading="eager"
        />
      )}
      <span className="logo-brand-text">
        <span className="logo-brand-first">Bhansali</span>
        <span className="logo-brand-second"> Associates</span>
      </span>
    </div>
  );
};

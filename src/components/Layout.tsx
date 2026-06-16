import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import "./Layout.css";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout-wrapper">
      {/* Accessibility Skip Link */}
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      {/* Global Navigation Header */}
      <Header />

      {/* Main content area */}
      <main id="main-content" className="layout-main">
        {children}
      </main>

      {/* Global Premium Footer */}
      <Footer />
    </div>
  );
};

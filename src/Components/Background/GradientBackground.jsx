import React from "react";
import "./GradientBackground.css";

// Fixed, blurred gradient blobs sit behind every section so the glass panels have something to refract.
export const GradientBackground = () => {
  return (
    <section className="gradient-bg" aria-hidden="true">
      <span className="gradient-bg__blob gradient-bg__blob--1" />
      <span className="gradient-bg__blob gradient-bg__blob--2" />
      <span className="gradient-bg__blob gradient-bg__blob--3" />
    </section>
  );
};

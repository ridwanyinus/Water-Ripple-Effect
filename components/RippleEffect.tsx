"use client";
import React, { useEffect } from "react";
import $ from "jquery";
import "jquery.ripples";

interface RippleEffectProps {
  className?: string;
  // children: React.ReactNode;
}

const RippleEffect: React.FC<RippleEffectProps> = ({ className }) => {
  useEffect(() => {
    // Initialize jQuery Ripples effect
    $(".ripple-container").ripples({
      resolution: 512,
      dropRadius: 20,
      perturbance: 0.04,
    });
  }, []);

  return <div className={`ripple-container ${className}`}></div>;
};

export default RippleEffect;

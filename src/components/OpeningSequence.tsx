'use client';

import React, { useEffect, useState } from 'react';

type OpeningSequenceProps = {
  children: React.ReactNode;
};

export default function OpeningSequence({ children }: OpeningSequenceProps) {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duration = reduced ? 400 : 1800;
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, duration);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div
        className={`opening-overlay ${showOverlay ? 'opening-on' : 'opening-off'}`}
        aria-hidden="true"
      >
        <div className="opening-bolt bolt-1" />
        <div className="opening-bolt bolt-2" />
        <div className="opening-bolt bolt-3" />
        <div className="opening-pulse" />
        <div className="opening-caption">RAVE</div>
      </div>

      <div className={`opening-content ${showOverlay ? 'opening-hidden' : 'opening-visible'}`}>
        {children}
      </div>
    </>
  );
}

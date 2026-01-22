'use client';

import React, { useEffect, useRef, useState } from 'react';
import { eventConfig } from '@/config/event';

export default function AudioModule() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioConfig = eventConfig.AUDIO;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = true;
    audio.volume = 0.75;
    audio.play().catch(() => {
      setIsPlaying(false);
    });

    const handleCanPlay = () => setIsReady(true);
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const enableAudio = () => {
      audio.muted = false;
      audio.volume = 0.85;
      audio.play().catch(() => {
        setIsPlaying(false);
      });
    };

    window.addEventListener('pointerdown', enableAudio, { once: true });
    window.addEventListener('touchstart', enableAudio, { once: true });
    window.addEventListener('keydown', enableAudio, { once: true });

    return () => {
      window.removeEventListener('pointerdown', enableAudio);
      window.removeEventListener('touchstart', enableAudio);
      window.removeEventListener('keydown', enableAudio);
    };
  }, []);

  if (!audioConfig?.SRC) {
    return null;
  }

  return (
    <div className="sr-only" aria-live="polite">
      {isReady ? 'Audio activo.' : 'Cargando audio.'}
      <audio ref={audioRef} src={audioConfig.SRC} preload="metadata" loop autoPlay playsInline />
    </div>
  );
}

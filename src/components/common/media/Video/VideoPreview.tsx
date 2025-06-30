"use client";

import clsx from "clsx";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import VideoPlayer from "./VideoPlayer";
import { IoMdClose, IoMdPlay } from "react-icons/io";

export default function VideoPreview({ videoId, className }: { videoId: string; className?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // avoid SSR mismatch
  }, []);

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <>
      {/* Thumbnail Preview */}
      <div className={clsx("relative w-full cursor-pointer group aspect-video", className)} onClick={() => setIsOpen(true)}>
        <img src={thumbnailUrl} alt="Video thumbnail" className="w-full h-full object-cover rounded-lg" />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-50 group-hover:opacity-100 transition duration-200">
          <div className="bg-white p-4 rounded-full shadow-lg flex items-center justify-center">
            <IoMdPlay className="text-black text-3xl translate-x-0.5" />
          </div>
        </div>
      </div>

      {/* Modal rendered via Portal */}
      {isMounted &&
        isOpen &&
        createPortal(
          <div className="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center" onClick={() => setIsOpen(false)}>
            <div className="w-full max-w-3xl relative" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setIsOpen(false)} className="absolute top-2 right-2 text-white text-2xl z-10 cursor-pointer">
                <IoMdClose />
              </button>
              <VideoPlayer videoId={videoId} autoplay mute={false} controls />
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

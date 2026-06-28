'use client';

import { useState } from 'react';

export default function Pic({ src, alt, className = '' }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={`cursor-pointer ${className}`} onClick={() => setIsOpen(true)}>
        <img src={src} alt={alt} className="w-full h-full object-cover rounded-lg" />
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setIsOpen(false)}
        >
          <img
            src={src}
            alt={alt}
            className="max-w-[95vw] max-h-[95vh] object-contain scale-200"
          />
        </div>
      )}
    </>
  );
}

'use client';

import { API_BASE } from '@/lib/api';

import { useEffect, useState } from 'react';

export default function AskButton() {
  const [link, setLink] = useState('');

  useEffect(() => {
    fetch(`${API_BASE}/api/links/ask`)
      .then(res => res.json())
      .then(data => {
        if (data.data && data.data[0]?.attributes) {
          setLink(data.data[0].attributes.link);
        }
      })
      .catch(console.error);
  }, []);

  const handleClick = () => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <button
      onClick={handleClick}
      className="btn-glow w-full px-6 py-3 rounded-lg bg-button text-white hover:bg-button-hover transition-colors"
      style={{
        backgroundColor: '#3c3c3cd9',
        transition: '0.4s',
        boxShadow: '0 0 20px rgba(192, 192, 192, 0.0)'
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = '#A0A0A0e8';
        e.target.style.boxShadow = '0 0 25px rgba(192, 192, 192, 0.5)';
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = '#3c3c3cd9',
        e.target.style.boxShadow = '0 0 20px rgba(192, 192, 192, 0.0)';
      }}
    >
      Не нашел свой вопрос (?)
    </button>
  );
}
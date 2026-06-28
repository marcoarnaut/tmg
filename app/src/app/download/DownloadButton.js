'use client';

export default function DownloadButton({ link }) {

  const handleClick = () => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <button
      onClick={handleClick}
      className="btn-glow px-6 py-3 rounded-lg bg-button text-white transition-all duration-300"
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
      Скачать
    </button>
  );
}
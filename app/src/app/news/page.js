import { fetchEvents } from '@/lib/api';
import Pic from './pic';

const API_BASE = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://127.0.0.1:1337';

function formatRelativeDate(dateStr) {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now - date;
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffHours < 1) return 'Только что';
  if (diffHours < 5) return `${diffHours} час${diffHours === 1 ? '' : 'а'} назад`;
  if (diffHours < 24) return `${diffHours} часов назад`;
  if (diffDays === 1) return 'Вчера';
  return date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short', year: 'numeric' }).replace('. ', '.');
}

export const dynamic = 'force-dynamic';

export default async function News() {
  let events = await fetchEvents();
  let news = events?.data || [];
  news = news.slice().reverse();

  return (
    <main className="flex flex-col items-center py-16 px-4 bg-page min-h-screen">
      <div className="w-full max-w-4xl flex flex-col gap-8">
        {news && news.map((item, i) => (
          <div key={i} className="rounded-lg border border-[#424242] bg-card p-8">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-semibold text-white">
                {item.attributes?.Title || 'Failed to fetch'}
              </h2>
              <span className="text-sm text-gray-400">
                {formatRelativeDate(item.attributes?.createdAt || item.createdAt)}
              </span>
            </div>
            {item.attributes?.Imgs?.data?.length > 0 && <div className="flex gap-4 mb-6">
              {item.attributes.Imgs.data.map((d, j) => {
                const rawUrl = d.attributes.formats.thumbnail.url || '';
                const src = `${API_BASE}${rawUrl}`;
                return src ? (
                  <Pic
                    key={j}
                    src={src}
                    alt={`News ${i + 1} image ${j + 1}`}
                    className="w-32 h-32 min-w-32"
                  />
                ) : (
                  <div key={j} className="w-32 h-32 min-w-32 bg-white rounded-lg"></div>
                );
              })}
            </div>}
            <p className="text-white">
              {item.attributes?.Desc || item.Desc || 'Failed to fetch'}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
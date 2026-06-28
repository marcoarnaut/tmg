import { fetchDownloads } from '@/lib/api';
import DownloadButton from './DownloadButton';

export const dynamic = 'force-dynamic';

export default async function Download() {
  const downloads = await fetchDownloads();
  const items = downloads?.data || [];

  return (
    <main className="flex flex-col items-center py-16 px-4 bg-page min-h-screen">
      <div className="w-full max-w-4xl flex flex-col gap-0">
        {items && items.map((item, i) => (
          <div
            key={i}
            className={`
              ${i === 0 ? 'rounded-t-lg' : ''}
              ${i === items.length - 1 ? 'rounded-b-lg' : ''}
              border border-[#424242] bg-card p-8
            `}
          >
            <h2 className="text-2xl font-semibold text-white mb-4">
              {item.attributes?.Title || item.Title || 'Failed to fetch'}
            </h2>
            <p className="text-white mb-6">
              {item.attributes?.Desc || item.Desc || 'Failed to fetch'}
            </p>
            <DownloadButton link={item.attributes?.Link || item.Link}></DownloadButton>
          </div>
        ))}
      </div>
    </main>
  );
}
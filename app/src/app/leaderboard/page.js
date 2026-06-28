import { fetchLabel, fetchTopKrasoti, fetchTopSloznosti } from '@/lib/api';

export const dynamic = 'force-dynamic';

function LeaderboardTable({ entries }) {
  if (!entries || entries.length === 0) {
    return (
      <div className="h-64 overflow-y-auto bg-leaderboard rounded-lg p-2 no-scrollbar">
        <div className="flex justify-between items-center p-2">
          <span className="text-white">Нет данных</span>
          <span className="text-white">-</span>
        </div>
      </div>
    );
  }
  return (
    <div className="h-64 overflow-y-auto bg-leaderboard rounded-lg p-2 no-scrollbar">
      {entries.map((entry, i) => (
        <div key={i} className="flex justify-between items-center p-2 hover:bg-leaderboard-hover">
          <span className="text-white">{entry.attributes?.levelname || entry.levelname || '—'}</span>
          <span className="text-white">{entry.attributes?.authorname || entry.authorname || '—'}</span>
        </div>
      ))}
    </div>
  );
}

export default async function Leaderboard() {
  const [titles, topkrasoti, topsloznosti] = await Promise.all([
    fetchLabel('leaderboard-1-title'),
    fetchTopKrasoti(),
    fetchTopSloznosti(),
  ]);

  const krasotiEntries = topkrasoti?.data || [];
  const sloznostiEntries = topsloznosti?.data || [];

  return (
    <main className="flex flex-col items-center py-16 px-4 bg-page min-h-screen">
      <div className="w-full max-w-4xl flex flex-col gap-0">
        <div className="rounded-t-lg border border-[#424242] bg-card p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Топ по сложности</h2>
          <LeaderboardTable entries={sloznostiEntries} />
        </div>

        <div className="h-px bg-[#5a5a5a]"></div>

        <div className="rounded-b-lg border border-[#424242] bg-card p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Топ по красоте</h2>
          <LeaderboardTable entries={krasotiEntries} />
        </div>
      </div>
    </main>
  );
}
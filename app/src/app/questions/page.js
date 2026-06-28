import { fetchAsks } from '@/lib/api';
import AskButton from './AskButton';

export const dynamic = 'force-dynamic';

export default async function Questions() {
  const asks = await fetchAsks();
  const questions = asks?.data || [];

  return (
    <main className="flex flex-col items-center py-16 px-4 bg-page min-h-screen">
      <div className="w-full max-w-4xl flex flex-col gap-6">
        {questions && questions.map((q, i) => (
          <div key={i} className="rounded-lg border border-[#424242] bg-card p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              {q.attributes?.Title || q.Title || 'Failed to fetch'}
            </h2>
            <p className="text-white">
              {q.attributes?.Desc || q.Desc || 'Failed to fetch'}
            </p>
          </div>
        ))}

        <AskButton link/>
      </div>
    </main>
  );
}
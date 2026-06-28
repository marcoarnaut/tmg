import { fetchLabel, fetchPicWithBase, fetchStaff } from '@/lib/api';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const [mainText, mainImg, leaderboardDesc, downloadDesc, questionsDesc, newsDesc, staff] = await Promise.all([
    fetchLabel('home-main-text'),
    fetchPicWithBase('test'), // fetchPicWithBase('home-main-img'),
    fetchLabel('home-leaderboard-desc'),
    fetchLabel('home-download-desc'),
    fetchLabel('home-questions-desc'),
    fetchLabel('home-news-desc'),
    fetchStaff()
  ]);

  return (
    <main className="flex flex-col items-center py-16 px-4 bg-page min-h-screen">
      <div className="w-full max-w-4xl rounded-lg border border-[#424242] bg-card p-8 mb-8">
        <div className="flex gap-6 mb-6">
          {mainImg ? (
            <img src={mainImg} alt="Main" className="w-48 h-48 min-w-48 object-cover rounded-lg" />
          ) : (
            <div className="w-48 h-48 min-w-48 bg-white rounded-lg"></div>
          )}
          <div className="flex-1">
            <p className="text-white leading-relaxed">
              {mainText || 'Failed to fetch'}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-4xl h-px bg-[#5a5a5a] mb-8"></div>

      <div className="w-full max-w-4xl rounded-lg border border-[#424242] bg-card p-8 mb-8">
        <h2 className="text-2xl font-semibold text-white mb-6">Посетите другие страницы</h2>
        <div className="flex flex-col gap-0">
          <div className="flex justify-between items-center py-4">
            <div>
              <h3 className="text-xl font-medium text-white">Лидерборд</h3>
              <p className="text-sm text-gray-300">{leaderboardDesc || 'Failed to fetch'}</p>
            </div>
            <a href="/leaderboard" className="btn-glow px-6 py-2 rounded-lg bg-button text-white hover:bg-button-hover transition-colors">
              Перейти
            </a>
          </div>
          <div className="h-px bg-[#5a5a5a]"></div>
          <div className="flex justify-between items-center py-4">
            <div>
              <h3 className="text-xl font-medium text-white">Скачать</h3>
              <p className="text-sm text-gray-300">{downloadDesc || 'Failed to fetch'}</p>
            </div>
            <a href="/download" className="btn-glow px-6 py-2 rounded-lg bg-button text-white hover:bg-button-hover transition-colors">
              Перейти
            </a>
          </div>
          <div className="h-px bg-[#5a5a5a]"></div>
          <div className="flex justify-between items-center py-4">
            <div>
              <h3 className="text-xl font-medium text-white">Вопросы</h3>
              <p className="text-sm text-gray-300">{questionsDesc || 'Failed to fetch'}</p>
            </div>
            <a href="/questions" className="btn-glow px-6 py-2 rounded-lg bg-button text-white hover:bg-button-hover transition-colors">
              Перейти
            </a>
          </div>
          <div className="h-px bg-[#5a5a5a]"></div>
          <div className="flex justify-between items-center py-4">
            <div>
              <h3 className="text-xl font-medium text-white">Новости</h3>
              <p className="text-sm text-gray-300">{newsDesc || 'Failed to fetch'}</p>
            </div>
            <a href="/news" className="btn-glow px-6 py-2 rounded-lg bg-button text-white hover:bg-button-hover transition-colors">
              Перейти
            </a>
          </div>
        </div>
      </div>

      {staff.data && <div className="w-full max-w-4xl h-px bg-[#5a5a5a] mb-8"></div>}
      
      {staff.data && <div className="w-full max-w-4xl rounded-lg border border-[#424242] bg-card p-8">
        <h2 className="text-2xl font-semibold text-white mb-6">Команда</h2>
        <div className="flex flex-col gap-4">
          {(staff.data || []).map((u, i) => {
            return (
              <div key={i} className={`${i != staff.length - 1 ? 'border-b border-[#5a5a5a] pb-4' : ''}`}>
                <p className="text-lg font-medium text-white">{u.attributes?.nickname}</p>
                <p className="text-gray-400">{u.attributes?.position}</p>
              </div>
            );
          })}
        </div>
      </div>}
    </main>
  );
}
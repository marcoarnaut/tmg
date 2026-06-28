import { Source_Code_Pro } from "next/font/google";
import "./globals.css";

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-source-code",
});

export const metadata = {
  title: "TMG GDPS",
  description: "/",
  icons: {
    icon: "/logo_tmggdps.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sourceCodePro.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#555555] text-white">
        <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-[#424242] bg-header">
          <div className="container mx-auto flex h-full items-center justify-between px-4">
            <div className="flex items-center gap-8">
              <a href="/" className="flex items-center">
                <img src="/logo_tmggdps.png" alt="Logo" className="h-10 w-auto" />
              </a>
            </div>
            <nav className="flex items-center gap-4">
              <a href="/" className="header-btn px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-button rounded-lg">
                Главная
              </a>
              <a href="/leaderboard" className="header-btn px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-button rounded-lg">
                Лидерборд
              </a>
              <a href="/download" className="header-btn px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-button rounded-lg">
                Скачать
              </a>
              <a href="/questions" className="header-btn px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-button rounded-lg">
                Вопросы
              </a>
              <a href="/news" className="header-btn px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-button rounded-lg">
                Новости
              </a>
            </nav>
          </div>
        </header>
        <div className="pt-16 bg-page">{children}</div>
      </body>
    </html>
  );
}
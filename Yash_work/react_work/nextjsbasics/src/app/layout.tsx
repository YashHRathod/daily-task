// import './globals.css';
import { ReactNode } from 'react';
import Header from './component/Header';
import LoginButton from './component/Routertest';
import Profile from './component/Profile';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">

        {/* Navbar */}
        <Header />

        <main className="flex-1 px-6 py-4">
          {children}
        </main>

        <footer className="border-t bg-amber-950">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">

            <LoginButton />

            <span className="text-sm text-gray-600">
              @ 2026 Your Company
            </span>

            <Profile />

          </div>
        </footer>

      </body>
    </html>
  );
}

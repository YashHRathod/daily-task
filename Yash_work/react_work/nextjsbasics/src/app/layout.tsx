import Link from 'next/link';
import './globals.css';
import { ReactNode } from 'react';
import Header from './component/Header';
import LoginButton from './component/Routertest';
import Profile from './component/Profile';


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Navbar */}

        <Header />
        
        <main>{children}</main>

        <footer>
          <div className="ml-10">
            <LoginButton />
          </div>
          <div className="ml-10">Footer © 2026</div>
         <div><Profile/></div> 
        </footer>
        
      </body>
    </html>
  );
}

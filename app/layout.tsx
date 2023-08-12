import TopBar from './components/TopBar';
import { Providers } from './providers';
import './globals.css';
import SideBar from './components/SideBar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='dark]'>
      <body>
        <Providers>
          <div className='flex'>
            <div>
          <SideBar />
            </div>
            <div className='w-full '>
          <TopBar /> 
          {children}
            </div>

          </div>
        </Providers>
      </body>
    </html>
  );
}

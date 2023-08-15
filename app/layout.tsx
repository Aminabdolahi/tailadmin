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
    <html lang='en' className=' justify-center  '>
      <body>
        <Providers >
          <div className='flex'>
            <div >
          <SideBar />
            </div>
            <div className='w-full '>
          <TopBar /> 
          <div className='flex items-center justify-center '>

          {children}
          </div>
            </div>

          </div>
        </Providers>
      </body>
    </html>
  );
}

import '@/assets/globals.css'
import Navbar from '@/components/navbar';

export const metadata = {
  title: "My Blog",
  description: "This is my blog",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>

  );
}

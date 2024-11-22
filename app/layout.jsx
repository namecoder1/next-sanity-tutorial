import '@/assets/globals.css'

export const metadata = {
  title: "My Blog",
  description: "This is my blog",
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>
        {children}
      </body>
    </html>
  );
}

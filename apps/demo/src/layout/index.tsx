import Footer from '@/components/footer';
import Nav from '@/components/navigation';
import '@/styles/index.css';

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#ad1457" />
        <link rel="icon" href="/mw.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title id="title">modern-web-components</title>
      </head>
      <body class="bg-gradient-to-tl from-gray-500/5 via-transparent">
        <header>
          <Nav />
        </header>
        <main class="mxaautoin-h-screen mamaxww-6xl20 relative pt-10 lg:py-6 lg:pt-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

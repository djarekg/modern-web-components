import Footer from '@/components/footer';
import Nav from '@/components/navigation';
import '@/styles/index.css';

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <html lang="en" class="dark">
      <head>
        <meta name="theme-color" content="#ad1457" />
        <link rel="icon" href="/mw.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title id="title">modern-web-components</title>
      </head>
      <body class="bg-white dark:bg-black">
        <Nav />
        <main class="grid h-screen w-screen place-content-center">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

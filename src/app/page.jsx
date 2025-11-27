import { Hero, Header, Footer } from '@/ui';

export default function Home() {
  return (
    <div className='font-roboto'>
      <header className="fixed top-0 left-0 w-full z-50">
        <Header></Header>
      </header>
      <main>
        <Hero></Hero>
      </main>
      <footer className="bottom-0 w-full">
        <Footer />
      </footer>
    </div>
  );
}

import Navbar from "./components/Navbar";
import ArticleHero from "./components/ArticleHero";
import ArticleCard from "./components/ArticleCard";
import { ArticleCarousel } from "./components/ArticleCarousel";
import { ArticleSection } from "./components/ArticleSection";
import { MostReadSection } from "./components/MostReadSection";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main>
        <ArticleHero />
        <ArticleCard />
        <ArticleCarousel />
        <ArticleSection />
        <MostReadSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

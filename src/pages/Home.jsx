import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import Features from "../components/Features";
import Dashboard from "../components/Dashboard";
import Statistics from "../components/Statistics";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import FadeIn from "../components/FadeIn";

function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
          <Hero />
       

        <FadeIn>
          <Brands />
        </FadeIn>

        <FadeIn>
          <Features />
        </FadeIn>

        <FadeIn>
          <Dashboard />
        </FadeIn>

        <FadeIn>
          <Statistics />
        </FadeIn>

        <FadeIn>
          <Testimonials />
        </FadeIn>

        <FadeIn>
          <FAQ />
        </FadeIn>

        <FadeIn>
          <CTA />
        </FadeIn>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Home;
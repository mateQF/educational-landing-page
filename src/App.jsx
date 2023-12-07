import About from "./components/About";
import Contact from "./components/Contact";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Reviews from "./components/Reviews";

const App = () => {
  return (
    <div>
      <Header />

      <main>
        <section>
          <Home />
        </section>

        <section id="#about">
          <About />
        </section>

        <section id="#courses">
          <Courses />
        </section>

        <section id="#reviews">
          <Reviews />
        </section>

        <section id="#contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;

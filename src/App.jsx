import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import TwinMind from "./components/TwinMind";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import AIChatbot from "./components/AIChatbot";
import Footer from "./components/Footer";
function App() {

  return (

    <div className="bg-slate-950 min-h-screen">

      <Navbar />


      <main>

        <Hero />


        <div className="space-y-32">

          <About />

          <Skills />
          <Projects />
<TwinMind /><Certifications />

<Contact /><AIChatbot /><Footer />
        </div>


      </main>


    </div>

  );

}


export default App;
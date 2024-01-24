import { FunctionComponent } from "react";
import { Topbar } from "./components/Topbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Schedule } from "./components/Schedule";
import { Why } from "./components/Why";
import { Customer } from "./components/Customers";
import { Footer } from "./components/Footer";
const App: FunctionComponent = () => {
  return (
    <main>
      <Topbar />
      <Hero />
      <About />
      <Services />
      <Schedule />
      <Why />
      <Customer />
      <Footer />
    </main>
  );
};

export default App;

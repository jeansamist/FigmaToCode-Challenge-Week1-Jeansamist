import { FunctionComponent } from "react";
import { Topbar } from "./components/Topbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
const App: FunctionComponent = () => {
  return (
    <main>
      <Topbar />
      <Hero />
      <About />
      <Services />
    </main>
  );
};

export default App;

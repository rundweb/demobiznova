import HomeComponents from "./components/HomeComponents";
import NavbarComponents from "./components/NavbarComponents";

const App = () => {
  return <div className="overflow-hidden font-open-sans">
    <NavbarComponents/>
    <HomeComponents/>
  </div>;
};

export default App;

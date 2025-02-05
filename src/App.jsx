import { Outlet } from "react-router-dom";
import NavBar from "./compo/NavBar";
import Footer from "./compo/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;

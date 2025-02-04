import { Outlet } from "react-router-dom";
import NavBar from "./compo/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;

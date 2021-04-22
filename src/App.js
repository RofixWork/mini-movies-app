import "./App.css";
import { CssBaseline } from "@material-ui/core";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <CssBaseline />
      <Nav />
      <Sidebar />
      <Hero />
    </>
  );
}

export default App;

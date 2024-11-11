import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <Outlet />
    </ThemeProvider>
  );
};
export default App;

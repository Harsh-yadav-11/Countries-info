import "./Header.css";
import moon from "../assets/image/moon222.png";
import sun from "../assets/image/sun1-removebg-preview.png";
import { useTheme } from "../hooks/useTheme";

export default function Header() {
  const [isDark, setIsDark] = useTheme();

  const imgSrc = isDark ? sun : moon;

  const toggleDarkMode = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    localStorage.setItem("isDarkMode", newDarkMode);
  };

  return (
    <header className={`header-container ${isDark ? "dark" : ""}`}>
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the world?</a>
        </h2>
        <p>
          <button className="h-btn" onClick={toggleDarkMode}>
            <img className="logo-img" src={imgSrc} alt="Toggle dark mode" />
          </button>
        </p>
      </div>
    </header>
  );
}

import React, { useState, useEffect } from "react";

const DarkModeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check for stored theme preference in localStorage on component mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);

    // Save the theme to localStorage
    if (newDarkMode) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <label className="inline-flex items-center cursor-pointer">
      {/* Hidden checkbox that drives the toggle functionality */}
      <input
        type="checkbox"
        checked={isDarkMode}
        onChange={toggleDarkMode}
        className="sr-only peer"
      />
      {/* Toggle switch UI */}
      <div className="relative w-11 h-6 bg-gray-200 rounded-full peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:bg-blue-600 transition-colors">
        <div
          className={`absolute top-[2px] left-[2px] w-5 h-5 bg-white border border-gray-300 rounded-full transition-transform ${
            isDarkMode ? "translate-x-5" : ""
          } dark:border-gray-600`}
        ></div>
      </div>
      {/* Toggle label text */}
      <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-600">
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </span>
    </label>
  );
};

export default DarkModeToggle;

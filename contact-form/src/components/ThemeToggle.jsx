import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <Button
      variant="outline"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? <Sun size={18} /> : <Moon size={18} />}
    </Button>
  );
}

export default ThemeToggle;
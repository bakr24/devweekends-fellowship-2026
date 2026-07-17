import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <header className="border-b bg-white dark:bg-slate-900 dark:border-slate-700">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-red-600">
          Contact Form
        </h1>

        <ThemeToggle />
      </div>
    </header>
  );
}

export default Navbar;
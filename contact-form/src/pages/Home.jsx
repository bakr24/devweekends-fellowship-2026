import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";

function Home() {
  return (
    <>
      <Navbar />

      <main className="flex min-h-[85vh] items-center justify-center bg-slate-100 px-4 dark:bg-slate-900">
        <ContactForm />
      </main>
    </>
  );
}

export default Home;
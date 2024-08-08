import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <Hero/>
      <main className="flex-grow container mx-auto px-6 py-2">
          <About />
      </main>
      <footer className="bg-gray-800 text-white text-center py-4 mt-6">
        © 2024 KYR. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;

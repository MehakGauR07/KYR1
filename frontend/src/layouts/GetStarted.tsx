import Header from "../components/Header";
import Hero from "../components/Hero";
import Form from "../components/Form";
const GetStarted = () => {
    return (
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Header showGetStarted={false}/>
        <Hero/>
        <main className="flex-grow container mx-auto px-6 py-2">
          <Form/>
        </main>
        <footer className="bg-gray-800 text-white text-center py-4 mt-6">
        © 2024 KYR. All rights reserved.
      </footer>
      </div>
    );
  };
  
  export default GetStarted;
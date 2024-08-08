const About = () => {
  return (
    <div className="container mx-auto px-4">
      

      {/* Detailed Information Section */}
      <div className="bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Why Knowing Your Rights Matters</h2>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li className="mb-2"><strong>Protect Yourself:</strong> Being aware of your rights helps you safeguard your personal freedoms and defend yourself against injustices.</li>
          <li className="mb-2"><strong>Make Informed Decisions:</strong> Knowledge enables you to make decisions that are in your best interest, whether it’s in your personal life, at work, or in the community.</li>
          <li><strong>Promote Justice:</strong> An informed society is a just society. By knowing your rights, you contribute to a fair and equitable community.</li>
        </ul>
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">What You’ll Find Here</h2>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li className="mb-2"><strong>Legal Rights:</strong> Information on your rights in various legal contexts, including criminal law, civil law, and human rights.</li>
          <li className="mb-2"><strong>Workplace Rights:</strong> Understand your rights as an employee, including labor laws, workplace discrimination, and more.</li>
          <li className="mb-2"><strong>Consumer Rights:</strong> Learn about your rights as a consumer, including product safety, warranties, and fair trade practices.</li>
          <li><strong>Educational Resources:</strong> Access a wealth of resources, including articles, guides, and FAQs to help you understand your rights in different situations.</li>
        </ul>
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Commitment</h2>
        <p className="text-lg text-gray-700 mb-4">
          We are committed to providing accurate, up-to-date information and resources to help you understand and exercise your rights. Whether you’re facing a legal issue, a workplace dilemma, or simply want to be informed, KYR is here to support you.
        </p>
        <a href="#" className="inline-block px-6 py-3 mb-4 mt-5 bg-[#d42755] text-2xl text-white font-semibold rounded-lg shadow-md hover:bg-[#b51d48] transition duration-300">
          Get Started
        </a>
        <p className="text-lg text-gray-700">
          Explore our resources, read our articles, and empower yourself with knowledge. If you have any questions or need further assistance, don’t hesitate to reach out to us.
        </p>
      </div>
    </div>
  );
};

export default About;

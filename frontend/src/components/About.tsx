const About = () => {
  return (
    <div className="container mx-auto px-4 py-12 bg-stone-100" id='cn'>
      {/* Detailed Information Section */}
      <div className="bg-white shadow-lg rounded-lg p-10 md:p-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Knowing Your Rights Matters</h2>
        <ul className="list-disc list-inside mb-8 text-gray-700 space-y-4 text-lg">
          <li>
            <strong>Protect Yourself:</strong> Being aware of your rights helps you safeguard your personal freedoms and defend yourself against injustices.
          </li>
          <li>
            <strong>Make Informed Decisions:</strong> Knowledge enables you to make decisions that are in your best interest, whether it’s in your personal life, at work, or in the community.
          </li>
          <li>
            <strong>Promote Justice:</strong> An informed society is a just society. By knowing your rights, you contribute to a fair and equitable community.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">What You’ll Find Here</h2>
        <ul className="list-disc list-inside mb-8 text-gray-700 space-y-4 text-lg">
          <li>
            <strong>Legal Rights:</strong> Information on your rights in various legal contexts, including criminal law, civil law, and human rights.
          </li>
          <li>
            <strong>Workplace Rights:</strong> Understand your rights as an employee, including labor laws, workplace discrimination, and more.
          </li>
          <li>
            <strong>Consumer Rights:</strong> Learn about your rights as a consumer, including product safety, warranties, and fair trade practices.
          </li>
          <li>
            <strong>Educational Resources:</strong> Access a wealth of resources, including articles, guides, and FAQs to help you understand your rights in different situations.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Commitment</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          We are committed to providing accurate, up-to-date information and resources to help you understand and exercise your rights. Whether you’re facing a legal issue, a workplace dilemma, or simply want to be informed, KYR is here to support you.
        </p>

        <p className="text-lg text-gray-900 mb-6 leading-relaxed">
          Explore our resources, read our articles, and empower yourself with knowledge. If you have any questions or need further assistance, don’t hesitate to reach out to us.
        </p>

        {/* Call-to-Action Button */}
        <div className="text-center mt-8">
          <a
            href="/get-started"
            className="inline-block px-8 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white text-2xl font-semibold rounded-lg shadow-lg hover:shadow-2xl hover:from-pink-600 hover:to-red-600 transition duration-300"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

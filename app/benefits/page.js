export default function Benefits() {
  return (
    <main className="container mx-auto py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1
            className="text-3xl font-bold mb-6"
            style={{ color: "var(--secondary)" }}
          >
            WHY CHOOSE CODEX BILLING?
          </h1>
          <div
            className="w-16 h-1 mx-auto mb-6"
            style={{ backgroundColor: "var(--tertiary)" }}
          ></div>
        </div>

        {/* Benefits Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Benefit 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <h2
              className="text-xl font-semibold mb-3"
              style={{ color: "var(--secondary)" }}
            >
              Proven Expertise
            </h2>
            <p className="text-gray-700">
              With a seasoned team trained in U.S. healthcare billing, coding,
              and compliance, we bring deep understanding and technical
              excellence to every claim we handle.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <h2
              className="text-xl font-semibold mb-3"
              style={{ color: "var(--secondary)" }}
            >
              Flexibility & Customization
            </h2>
            <p className="text-gray-700">
              We tailor our services to your needs. Whether you&apos;re using
              TherapyNotes, Tebra, Allscripts, or any EHR/PM system, we
              integrate smoothly and support your workflow.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <h2
              className="text-xl font-semibold mb-3"
              style={{ color: "var(--secondary)" }}
            >
              Accuracy & Efficiency
            </h2>
            <p className="text-gray-700">
              Our systems and staff ensure high claim acceptance rates and fast
              turnaround. We stay up-to-date with payer policies and coding
              guidelines to keep your revenue flowing.
            </p>
          </div>

          {/* Benefit 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <h2
              className="text-xl font-semibold mb-3"
              style={{ color: "var(--secondary)" }}
            >
              Security You Can Trust
            </h2>
            <p className="text-gray-700">
              We follow strict HIPAA compliance and data protection protocols.
              Your patient data and financial information are handled with the
              highest level of confidentiality and care.
            </p>
          </div>

          {/* Benefit 5 */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <h2
              className="text-xl font-semibold mb-3"
              style={{ color: "var(--secondary)" }}
            >
              Transparent Communication
            </h2>
            <p className="text-gray-700">
              With Codex Billing, you&apos;re never in the dark. We provide
              regular reporting, open communication, and dedicated support to
              keep you informed and confident in your revenue cycle.
            </p>
          </div>

          {/* Benefit 6 */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <h2
              className="text-xl font-semibold mb-3"
              style={{ color: "var(--secondary)" }}
            >
              Cost-Effective Solutions
            </h2>
            <p className="text-gray-700">
              By outsourcing to Codex Billing, you reduce overhead, avoid costly
              errors, and only pay for what you need—making it a smart
              investment for any practice.
            </p>
          </div>
        </div>

        {/* Closing Statement - No card styling */}
        <div className="mt-12 pt-8 text-center">
          <p className="text-gray-700 mb-4">
            At Codex Billing, we&apos;re not just a service provider—we&apos;re
            your billing partner. We believe in building long-term relationships
            based on trust, performance, and results.
          </p>
          <p className="text-gray-700 font-semibold">
            Let us handle the billing, so you can focus on what matters most:
            caring for your patients.
          </p>
        </div>
      </div>
    </main>
  );
}

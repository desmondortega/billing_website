import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center min-h-[55vh] py-6 px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-5xl">
          <div className="flex-1 max-w-md">
            <h1
              className="text-3xl font-semibold mb-6"
              style={{ color: "var(--secondary)" }}
            >
              Professional Medical Billing Solutions for US Healthcare Providers
            </h1>
            <p className="text-black text-base leading-relaxed">
              Codex Billing delivers accurate, efficient medical billing
              services for US providers. Maximize revenue, reduce denials, and
              streamline operations with our expert team. Let us handle your
              billing for seamless success!
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative">
              {/* Decorative blob 1 - tertiary color */}
              <div
                className="absolute z-0"
                style={{
                  backgroundColor: "var(--tertiary)",
                  top: "-40px",
                  left: "-50px",
                  width: "300px",
                  height: "300px",
                  borderRadius: "65% 35% 70% 30% / 55% 45% 55% 45%",
                  transform: "rotate(5deg)",
                  opacity: 0.4,
                }}
              ></div>

              {/* Decorative blob 2 - secondary color */}
              <div
                className="absolute z-0"
                style={{
                  backgroundColor: "var(--secondary)",
                  bottom: "10px",
                  right: "-30px",
                  width: "280px",
                  height: "280px",
                  borderRadius: "55% 45% 60% 40% / 50% 60% 40% 50%",
                  transform: "rotate(-10deg)",
                  opacity: 0.3,
                }}
              ></div>

              <Image
                src="/home_page_main_trans.png"
                alt="Professional Medical Billing"
                width={420}
                height={320}
                className="max-w-full h-auto rounded-xl relative z-10"
                priority
              />
              <div
                className="absolute inset-x-0 bottom-0 h-1/2 rounded-b-xl z-20"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 70%, rgba(255,255,255, 0.99) 100%",
                }}
              ></div>
            </div>
          </div>
        </div>
      </main>

      {/* Second Section with gray background */}
      <section
        className="w-full py-16"
        style={{ backgroundColor: "rgb(232, 232, 232)" }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-5xl mx-auto">
            {/* Image on the left */}
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <Image
                  src="/home_page_about_us.jpeg"
                  alt="About Our Billing Services"
                  width={500} // Increased from 420
                  height={400} // Increased from 320
                  className="max-w-full h-auto rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* Text on the right */}
            <div className="flex-1 max-w-md">
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "var(--tertiary)" }}
              >
                Why Choose Us?
              </h3>

              <h2
                className="text-3xl font-semibold mb-4"
                style={{ color: "var(--secondary)" }}
              >
                About Us
              </h2>
              <div
                className="w-16 h-1 mb-3"
                style={{ backgroundColor: "var(--tertiary)" }}
              ></div>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                Codex Billing delivers secure, flexible, and end-to-end medical
                billing solutions tailored for healthcare providers across the
                U.S. With years of experience in Revenue Cycle Management (RCM),
                we help practices streamline workflows, reduce denials, and
                boost reimbursements.
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                Our expert team understands that no two practices are alike,
                which is why we customize our services to fit your specialty,
                size, and systems. Whether you're a solo provider, group clinic,
                or expanding organization, Codex Billing works as an extension
                of your back office—ensuring accuracy, transparency, and
                efficiency every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section - What We Do */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-5xl mx-auto">
            {/* Image on the left */}
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <Image
                  src="/RCM.png"
                  alt="Codex Billing Team"
                  width={500}
                  height={400}
                  className="relative z-10 max-w-full h-auto drop-shadow-xl"
                  style={{
                    filter: "drop-shadow(0 10px 8px rgb(0 0 0 / 0.15))",
                    borderRadius: "50%",
                  }}
                />
              </div>
            </div>

            {/* Text on the right */}
            <div className="flex-1 max-w-md">
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "var(--tertiary)" }}
              >
                WHAT WE DO
              </h3>

              <h2
                className="text-3xl font-semibold mb-4"
                style={{ color: "var(--secondary)" }}
              >
                Comprehensive Revenue Cycle Management
              </h2>
              <div
                className="w-16 h-1 mb-3"
                style={{ backgroundColor: "var(--tertiary)" }}
              ></div>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                At Codex Billing, we offer comprehensive Revenue Management
                Services designed to optimize every step of your practice's
                financial cycle. Our trusted solutions are built on years of
                experience, helping healthcare providers improve cash flow,
                reduce denials, and gain financial clarity.
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                With specialized knowledge across multiple medical fields and
                systems, we tailor our services to fit your unique workflow.
                From eligibility checks to claims follow-up and reporting, every
                process is streamlined for results. Backed by a proven track
                record, Codex Billing ensures that your revenue cycle is managed
                with precision, transparency, and consistent performance—so you
                can focus on patient care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fourth Section - Our Services */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3
              className="text-lg font-semibold mb-2"
              style={{ color: "var(--tertiary)" }}
            >
              OUR SERVICES
            </h3>
            <h2
              className="text-3xl font-semibold mb-4"
              style={{ color: "var(--secondary)" }}
            >
              All kind of Medical Billing Solution for you
            </h2>
            <div
              className="w-16 h-1 mx-auto mb-3"
              style={{ backgroundColor: "var(--tertiary)" }}
            ></div>
          </div>

          {/* First row of service cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 max-w-5xl mx-auto">
            {/* Service Card 1 */}
            <div className="bg-white p-6 rounded-lg border border-transparent hover:border-gray-300 hover:shadow-xl transition-all duration-300">
              <div className="mb-4 flex justify-center">
                <div
                  className="w-16 h-16 flex items-center justify-center rounded-full border-2"
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "var(--secondary)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    style={{ color: "var(--secondary)" }}
                  >
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                    <path
                      fillRule="evenodd"
                      d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <h4
                className="text-xl font-semibold mb-2 text-center"
                style={{ color: "var(--secondary)" }}
              >
                Medical Billing Services
              </h4>
              <p className="text-gray-600 text-center">
                We handle claims submission, payment posting, and patient
                billing to ensure accurate reimbursements and reduce denials for
                providers.
              </p>
            </div>

            {/* Service Card 2 - Medical Coding Services */}
            <div className="bg-white p-6 rounded-lg border border-transparent hover:border-gray-300 hover:shadow-xl transition-all duration-300">
              <div className="mb-4 flex justify-center">
                <div
                  className="w-16 h-16 flex items-center justify-center rounded-full border-2"
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "var(--secondary)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    style={{ color: "var(--secondary)" }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <h4
                className="text-xl font-semibold mb-2 text-center"
                style={{ color: "var(--secondary)" }}
              >
                Medical Coding Services
              </h4>
              <p className="text-gray-600 text-center">
                Our certified coders assign accurate CPT, ICD-10, and HCPCS
                codes to ensure proper documentation, compliance, and optimized
                reimbursements.
              </p>
            </div>

            {/* Service Card 3 - Credentialing Services */}
            <div className="bg-white p-6 rounded-lg border border-transparent hover:border-gray-300 hover:shadow-xl transition-all duration-300">
              <div className="mb-4 flex justify-center">
                <div
                  className="w-16 h-16 flex items-center justify-center rounded-full border-2"
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "var(--secondary)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    style={{ color: "var(--secondary)" }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <h4
                className="text-xl font-semibold mb-2 text-center"
                style={{ color: "var(--secondary)" }}
              >
                Credentialing Services
              </h4>
              <p className="text-gray-600 text-center">
                We verify provider credentials, ensuring compliance with
                regulations and standards, to facilitate smooth enrollment with
                insurance panels.
              </p>
            </div>
          </div>

          {/* Second row of service cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* First card in second row - Verification of Benefits Services */}
            <div className="bg-white p-6 rounded-lg border border-transparent hover:border-gray-300 hover:shadow-xl transition-all duration-300">
              <div className="mb-4 flex justify-center">
                <div
                  className="w-16 h-16 flex items-center justify-center rounded-full border-2"
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "var(--secondary)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    style={{ color: "var(--secondary)" }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <h4
                className="text-xl font-semibold mb-2 text-center"
                style={{ color: "var(--secondary)" }}
              >
                Verification of Benefits Services
              </h4>
              <p className="text-gray-600 text-center">
                We verify patient insurance coverage, copays, and eligibility to
                prevent billing surprises and ensure smooth financial workflows
                before appointments.
              </p>
            </div>

            {/* Second card in second row - Virtual Medical Scribe Services */}
            <div className="bg-white p-6 rounded-lg border border-transparent hover:border-gray-300 hover:shadow-xl transition-all duration-300">
              <div className="mb-4 flex justify-center">
                <div
                  className="w-16 h-16 flex items-center justify-center rounded-full border-2"
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "var(--secondary)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    style={{ color: "var(--secondary)" }}
                  >
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path
                      fillRule="evenodd"
                      d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <h4
                className="text-xl font-semibold mb-2 text-center"
                style={{ color: "var(--secondary)" }}
              >
                Virtual Medical Scribe Services
              </h4>
              <p className="text-gray-600 text-center">
                Our virtual scribes seamlessly integrate with your practice to
                document patient encounters in real-time, allowing providers to
                focus on patient care.
              </p>
            </div>

            {/* Third card in second row - Revenue Cycle Management Services */}
            <div className="bg-white p-6 rounded-lg border border-transparent hover:border-gray-300 hover:shadow-xl transition-all duration-300">
              <div className="mb-4 flex justify-center">
                <div
                  className="w-16 h-16 flex items-center justify-center rounded-full border-2"
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "var(--secondary)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    style={{ color: "var(--secondary)" }}
                  >
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <h4
                className="text-xl font-semibold mb-2 text-center"
                style={{ color: "var(--secondary)" }}
              >
                Revenue Cycle Management Services
              </h4>
              <p className="text-gray-600 text-center">
                We manage the complete revenue cycle—from scheduling to
                collections—to maximize income, improve cash flow, and reduce
                administrative burdens.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import Image from "next/image";

export default function Services() {
  return (
    <main className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Subtitle */}
        <h3
          className="text-lg font-semibold mb-2"
          style={{ color: "var(--tertiary)" }}
        >
          SERVICES
        </h3>

        {/* Main Title */}
        <h1
          className="text-3xl font-bold mb-6"
          style={{ color: "var(--secondary)" }}
        >
          Comprehensive Billing Solutions Tailored to Your Needs
        </h1>

        {/* Decorative Line */}
        <div
          className="w-16 h-1 mx-auto mb-6"
          style={{ backgroundColor: "var(--tertiary)" }}
        ></div>

        {/* Main Text */}
        <p className="text-gray-700 leading-relaxed mb-12">
          At <strong>Codex Billing</strong>, we provide a full range of
          healthcare revenue solutions designed to simplify your operations and
          maximize profitability. Our <strong>Medical Billing Services</strong>{" "}
          ensure timely, accurate claim submission and faster reimbursements,
          while our Medical Coding Services deliver precise CPT, HCPCS, and
          ICD-10 coding for compliance and optimal revenue. We offer efficient{" "}
          <strong>Credentialing Services</strong> to get you enrolled with
          insurance networks quickly, and thorough{" "}
          <strong>Verification of Benefits (VOB)</strong> to prevent billing
          issues before they start. Our Virtual Medical Scribe Services reduce
          documentation burden so you can focus more on patients. With our
          proven <strong>Revenue Cycle Management expertise</strong>, Codex
          Billing becomes your trusted partner in achieving financial success.
        </p>

        {/* Services arranged in two rows of three */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
          {/* Service 1 - Medical Billing Services */}
          <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors duration-300">
            <div
              className="w-16 h-16 flex items-center justify-center rounded-full border-2 mb-3"
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
            <h4
              className="text-lg font-semibold text-center"
              style={{ color: "var(--secondary)" }}
            >
              Medical Billing
            </h4>
          </div>

          {/* Service 2 - Medical Coding Services */}
          <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors duration-300">
            <div
              className="w-16 h-16 flex items-center justify-center rounded-full border-2 mb-3"
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
            <h4
              className="text-lg font-semibold text-center"
              style={{ color: "var(--secondary)" }}
            >
              Medical Coding
            </h4>
          </div>

          {/* Service 3 - Credentialing Services */}
          <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors duration-300">
            <div
              className="w-16 h-16 flex items-center justify-center rounded-full border-2 mb-3"
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
            <h4
              className="text-lg font-semibold text-center"
              style={{ color: "var(--secondary)" }}
            >
              Credentialing
            </h4>
          </div>

          {/* Service 4 - Verification of Benefits */}
          <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors duration-300">
            <div
              className="w-16 h-16 flex items-center justify-center rounded-full border-2 mb-3"
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
            <h4
              className="text-lg font-semibold text-center"
              style={{ color: "var(--secondary)" }}
            >
              Benefits Verification
            </h4>
          </div>

          {/* Service 5 - Virtual Medical Scribe */}
          <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors duration-300">
            <div
              className="w-16 h-16 flex items-center justify-center rounded-full border-2 mb-3"
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
            <h4
              className="text-lg font-semibold text-center"
              style={{ color: "var(--secondary)" }}
            >
              Virtual Medical Scribe
            </h4>
          </div>

          {/* Service 6 - Revenue Cycle Management */}
          <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors duration-300">
            <div
              className="w-16 h-16 flex items-center justify-center rounded-full border-2 mb-3"
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
            <h4
              className="text-lg font-semibold text-center"
              style={{ color: "var(--secondary)" }}
            >
              Revenue Cycle Management
            </h4>
          </div>
        </div>
      </div>
    </main>
  );
}

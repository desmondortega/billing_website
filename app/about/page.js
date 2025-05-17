import Image from "next/image";

export default function About() {
  return (
    <main className="container mx-auto py-12 px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
        {/* Left side - Image */}
        <div className="flex-1 w-full md:w-1/2">
          <div
            className="relative flex justify-center items-center"
            style={{ minHeight: "400px" }}
          >
            {/* Blob 1 - top left */}
            <div
              className="absolute z-0"
              style={{
                backgroundColor: "var(--tertiary)",
                top: "0%",
                left: "5%",
                width: "60%",
                height: "60%",
                borderRadius: "70% 30% 60% 40% / 40% 50% 60% 50%",
                opacity: 0.4,
                transform: "rotate(10deg)",
              }}
            ></div>

            {/* Blob 2 - top right */}
            <div
              className="absolute z-0"
              style={{
                backgroundColor: "var(--secondary)",
                top: "10%",
                right: "5%",
                width: "55%",
                height: "50%",
                borderRadius: "40% 60% 30% 70% / 60% 40% 70% 30%",
                opacity: 0.3,
                transform: "rotate(-15deg)",
              }}
            ></div>

            {/* Blob 3 - bottom left */}
            <div
              className="absolute z-0"
              style={{
                backgroundColor: "var(--secondary)",
                bottom: "5%",
                left: "10%",
                width: "50%",
                height: "55%",
                borderRadius: "55% 45% 70% 30% / 40% 60% 40% 60%",
                opacity: 0.3,
                transform: "rotate(-5deg)",
              }}
            ></div>

            {/* Blob 4 - bottom right */}
            <div
              className="absolute z-0"
              style={{
                backgroundColor: "var(--tertiary)",
                bottom: "0%",
                right: "0%",
                width: "60%",
                height: "60%",
                borderRadius: "35% 65% 40% 60% / 60% 30% 70% 40%",
                opacity: 0.4,
                transform: "rotate(15deg)",
              }}
            ></div>

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

        {/* Right side - Text content */}
        <div className="flex-1 w-full md:w-1/2">
          <div className="mb-2">
            <div
              className="w-16 h-1 mb-6"
              style={{ backgroundColor: "var(--tertiary)" }}
            ></div>
            <h1
              className="text-3xl font-bold mb-4"
              style={{ color: "var(--secondary)" }}
            >
              About Us
            </h1>
            <h2 className="text-xl font-semibold mb-6 text-gray-700">
              Your Trusted Partner in Medical Revenue Cycle Management
            </h2>
          </div>

          <div className="space-y-4 text-gray-700">
            <p className="leading-relaxed">
              At <strong>Codex Billing</strong>, we specialize in providing
              comprehensive, secure, and flexible medical billing solutions
              tailored to meet the unique needs of healthcare providers across
              the U.S. With years of hands-on experience in{" "}
              <strong>Revenue Cycle Management (RCM)</strong>, our team brings
              deep industry knowledge and a commitment to helping practices
              streamline operations, <strong>reduce denials</strong>, and{" "}
              <strong>maximize reimbursements</strong>.
            </p>

            <p className="leading-relaxed">
              We understand that every medical practice is different—that's why
              our services are designed to adapt to your specialty, size, and
              workflow. Whether you're a solo practitioner, group clinic, or a
              growing healthcare network, <strong>Codex Billing</strong> is
              equipped to be a seamless extension of your back office.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

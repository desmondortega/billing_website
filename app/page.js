import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center min-h-[60vh] py-8 px-4">
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
                  top: "-30px",
                  left: "-100px",
                  width: "250px",
                  height: "250px",
                  borderRadius: "60% 40% 50% 50% / 40% 50% 50% 60%",
                  transform: "rotate(10deg)",
                }}
              ></div>

              {/* Decorative blob 2 - secondary color */}
              <div
                className="absolute z-0"
                style={{
                  backgroundColor: "var(--secondary)",
                  bottom: "-20px",
                  right: "-70px",
                  width: "200px",
                  height: "200px",
                  borderRadius: "50% 60% 40% 70% / 60% 30% 70% 40%",
                  transform: "rotate(-15deg)",
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
                  width={420}
                  height={320}
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
    </div>
  );
}

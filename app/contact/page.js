import Image from "next/image";

export default function Contact() {
  return (
    <main className="container mx-auto py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start">
          {/* Contact Form - Left Side */}
          <div className="flex-1 w-full max-w-md">
            <div className="mb-8">
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "var(--tertiary)" }}
              >
                CONTACT US
              </h3>

              <h1
                className="text-3xl font-bold mb-6"
                style={{ color: "var(--secondary)" }}
              >
                Get in Touch
              </h1>
              <div
                className="w-16 h-1 mb-6"
                style={{ backgroundColor: "var(--tertiary)" }}
              ></div>
            </div>

            {/* Contact Form */}
            <form className="space-y-6">
              {/* Name Field - No label */}
              <div>
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-opacity-50"
                  style={{
                    focusColor: "var(--tertiary)",
                    focusRing: "var(--tertiary)",
                  }}
                />
              </div>

              {/* Email Field - No label */}
              <div>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-opacity-50"
                  style={{
                    focusColor: "var(--tertiary)",
                    focusRing: "var(--tertiary)",
                  }}
                />
              </div>

              {/* Message Field - No label */}
              <div>
                <textarea
                  id="message"
                  placeholder="Message"
                  rows={5}
                  className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-opacity-50"
                  style={{
                    focusColor: "var(--tertiary)",
                    focusRing: "var(--tertiary)",
                  }}
                ></textarea>
              </div>

              {/* Send Button */}
              <div>
                <button
                  type="submit"
                  className="px-8 py-3 rounded-md text-white font-medium transition-colors duration-300 hover:opacity-90"
                  style={{ backgroundColor: "var(--tertiary)" }}
                >
                  Send
                </button>
              </div>
            </form>
          </div>

          {/* Image - Right Side */}
          <div className="flex-1 flex items-start justify-center mt-8 md:mt-[140px]">
            <div className="relative">
              <Image
                src="/code_blue.png"
                alt="Codex Billing"
                width={450}
                height={550}
                className="max-w-full h-auto rounded-2xl shadow-lg"
                style={{
                  objectFit: "contain",
                  maxHeight: "550px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

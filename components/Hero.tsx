import Image from "next/image";
import AnimatedLoginModal from "./ui/Login";

export default function Hero() {
  return (
    <div className="bg-[#0A0A0A] h-screen w-full overflow-hidden flex flex-col">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-[#0D0B14] shadow-md z-50">
        <div className="container mx-auto flex items-center justify-between px-16 py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-white" />
            <span className="text-xl font-bold text-white">Connect Cash</span>
          </div>
          {/* Login Button */}
          <AnimatedLoginModal />
        </div>
      </header>

      {/* Hero Content */}
      <div className="flex-1 container mx-auto flex items-center px-16 mt-20">
        <div className="grid md:grid-cols-2 items-center gap-6 w-full">
          {/* Left Content */}
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full px-4 py-2 text-sm mb-8">
              <span className="text-white">KEEP YOUR MONEY SAFE</span>
              <span className="ml-2">⚡</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mb-6">
              Best <span className="text-[#C1FF00]">crypto</span> <br />
              investing <span className="text-[#C1FF00]">platform</span> <br />
              <span className="text-gray-400">for your future.</span>
            </h1>

            {/* Description */}
            <div className="flex items-start space-x-4 text-gray-400 max-w-lg mb-10">
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-[#C1FF00]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
              </div>
              <p className="text-sm">
                Polkadot unites and secures a growing ecosystem of specialized
                blockchains called parachains. Apps and services on Polkadot can
                ecosystem of specialized called.
              </p>
            </div>

            {/* Bottom Section */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold text-white">
                  Your <span className="text-[#C1FF00]">trusted</span> partner of <br />
                  <span className="text-gray-300">cryptocurrency.</span>
                </h2>
              </div>
              <div className="text-gray-400">
                <p>
                  Polkadot unites and secures a growing ecosystem of specialized
                  blockchains called parachains. Apps and services on Polkadot
                  can ecosystem of specialized called.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content (Image) */}
          <div className="flex justify-center">
            <div className="relative w-[400px] h-[600px] md:w-[400px] md:h-[650px] ml-8">
              <Image
                src="/mobile.png" // Path to your image in the public folder
                alt="Hero Section Image"
                layout="fill"
                objectFit="contain" // Ensures the image stays proportional
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

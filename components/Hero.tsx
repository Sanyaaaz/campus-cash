export default function Hero() {
    return (
      <div className="bg-[#0A0A0A] min-h-screen w-full overflow-hidden">
        <div className="container mx-auto px-4 py-12 relative">
          {/* Main Content */}
          <div className="max-w-3xl mx-auto">
            {/* Safe Money Badge */}
            <div className="inline-flex items-center bg-[#1A1A1A] rounded-full px-4 py-2 text-sm mb-8">
              <span className="text-white">KEEP YOUR MONEY SAFE</span>
              <span className="ml-2">⚡</span>
            </div>
  
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8 text-left -ml-4">
              Best <span className="text-[#C1FF00]">crypto</span> <br />
              investing <span className="text-[#C1FF00]">platform</span> <br />
              <span className="text-gray-400">for your future.</span>
            </h1>
  
            {/* Description */}
            <div className="flex items-start space-x-4 text-gray-400 max-w-lg mb-20">
              <div className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center flex-shrink-0">
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
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-4xl font-bold text-white">
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
        </div>
      </div>
    );
  }
  
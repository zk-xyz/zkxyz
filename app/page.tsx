import { ArrowRight, Leaf, Database, Eye, Users } from 'lucide-react'
import { Space_Grotesk } from 'next/font/google'
 
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['400', '700']
})

export default function Home() {
  return (
    <main className={`min-h-screen bg-[#1a0826] ${spaceGrotesk.className} overflow-hidden`}>
      {/* Radiating Lines Background */}
      <div className="fixed inset-0 w-full h-full">
        <div className="radiating-lines" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <header className="py-12 sm:py-16 lg:py-20 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold 
            bg-gradient-to-r from-orange-400 via-purple-400 to-blue-400
            text-transparent bg-clip-text mb-4 relative z-10">
            zkplant
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-purple-200 relative z-10 max-w-2xl mx-auto
            drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
            Preserving the future&apos;s flora in the heart of technology
          </p>
        </header>

        {/* Terminal Section */}
        <div className="w-full max-w-[90vw] lg:max-w-full mx-auto mb-16 sm:mb-20 relative">
          <div className="vintage-monitor">
            <div className="vintage-screen">
              <div className="screen-content">
                <div className="h-8 sm:h-10 bg-gradient-to-r from-purple-950 to-black 
                  border-b border-purple-500/30 relative z-10
                  flex items-center px-4">
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-orange-500/70" />
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-purple-500/70" />
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-blue-500/70" />
                  </div>
                </div>
                <div className="terminal-content">
                  <iframe
                    src={process.env.NEXT_PUBLIC_ELIZA_URL || "https://eliza-client.onrender.com"}
                    allow="clipboard-read; clipboard-write"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16 sm:mb-20">
          <div className="retro-card group">
            <Leaf className="w-10 h-10 sm:w-12 sm:h-12 mb-4 text-orange-400 
              drop-shadow-[0_0_10px_rgba(251,146,60,0.5)]" />
            <h3 className="text-lg sm:text-xl font-bold text-orange-400 mb-2">Digital Seed Vault</h3>
            <p className="text-sm sm:text-base text-purple-200/70">Secure storage for the world&apos;s rarest plant genetic data</p>
          </div>
          <div className="retro-card group">
            <Database className="w-10 h-10 sm:w-12 sm:h-12 mb-4 text-blue-400
              drop-shadow-[0_0_10px_rgba(96,165,250,0.5)]" />
            <h3 className="text-lg sm:text-xl font-bold text-blue-400 mb-2">Data Center Greenhouse</h3>
            <p className="text-sm sm:text-base text-purple-200/70">Cultivating mutated flora in the heart of our servers</p>
          </div>
          <div className="retro-card group">
            <Eye className="w-10 h-10 sm:w-12 sm:h-12 mb-4 text-purple-400
              drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
            <h3 className="text-lg sm:text-xl font-bold text-purple-400 mb-2">Virtual Botanical Tours</h3>
            <p className="text-sm sm:text-base text-purple-200/70">Explore our unique collection of tech-adapted plants</p>
          </div>
          <div className="retro-card group">
            <Users className="w-10 h-10 sm:w-12 sm:h-12 mb-4 text-orange-400
              drop-shadow-[0_0_10px_rgba(251,146,60,0.5)]" />
            <h3 className="text-lg sm:text-xl font-bold text-orange-400 mb-2">Digital Gardeners</h3>
            <p className="text-sm sm:text-base text-purple-200/70">Join our community of botanical data cultivators</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center pb-16 sm:pb-20 relative">
          <a 
            href="https://github.com/zk-xyz/zkxyz" 
            className="inline-flex items-center px-6 sm:px-8 py-2.5 sm:py-3 rounded-full
              bg-gradient-to-r from-orange-500 to-purple-500
              text-white font-medium text-base sm:text-lg
              hover:from-orange-600 hover:to-purple-600
              transition-all duration-300
              shadow-[0_0_20px_-5px_rgba(168,85,247,0.5)]
              hover:shadow-[0_0_25px_-5px_rgba(168,85,247,0.7)]
              relative z-10"
          >
            Explore Our Digital Garden <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </a>
        </div>
      </div>
    </main>
  )
}


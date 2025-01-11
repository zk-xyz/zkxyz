import { ArrowRight, Shield, Lock, Zap } from 'lucide-react'
import { Space_Grotesk } from 'next/font/google'
 
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['400', '700']
})

export default function Home() {
  return (
    <main className={`min-h-screen bg-black p-4 sm:p-8 overflow-x-hidden ${spaceGrotesk.className}`}>
      <div className="container mx-auto relative">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-6xl sm:text-8xl font-bold 
            bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 
            text-transparent bg-clip-text mb-4">
            zkxyz
          </h1>
          <p className="text-xl neon-text">
            Experience the future of zero-knowledge proofs
          </p>
        </header>
        
        {/* Terminal Container */}
        <div className="cyber-frame cyber-glow w-full aspect-video 
          backdrop-blur-sm bg-black/30 overflow-hidden mb-16 relative">
          <div className="absolute top-0 left-0 right-0 h-8 z-10
            bg-gradient-to-r from-blue-500/10 to-purple-500/10 
            border-b border-chrome/20" />
          <iframe
            src={process.env.NEXT_PUBLIC_ELIZA_URL || "https://eliza-client.onrender.com"}
            className="w-full h-full"
            style={{ 
              minWidth: '100%',
              border: 'none',
            }}
            allow="clipboard-read; clipboard-write"
          />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="feature-card">
            <Shield className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-blue-400">Secure by Design</h3>
            <p>Built with security-first principles and audited protocols</p>
          </div>
          <div className="feature-card">
            <Zap className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-purple-400">Lightning Fast</h3>
            <p>Optimized proof generation and verification</p>
          </div>
          <div className="feature-card">
            <Lock className="w-12 h-12 text-pink-400 mb-4" />
            <h3 className="text-pink-400">Privacy Preserved</h3>
            <p>Keep your data private while proving its validity</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-16">
          <a href="https://github.com/zk-xyz/zkxyz" className="cta-button">
            View on GitHub <ArrowRight className="ml-2 h-6 w-6" />
          </a>
        </div>

        {/* Ambient Light Effect */}
        <div className="ambient-bg" />
      </div>
    </main>
  )
}


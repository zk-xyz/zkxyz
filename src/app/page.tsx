import { Space_Grotesk } from 'next/font/google'
 
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['700']
})

export default function Home() {
  return (
    <main className="min-h-screen bg-black/90 p-4 sm:p-8 overflow-x-hidden">
      <div className="container mx-auto relative">
        {/* Header */}
        <h1 className={`${spaceGrotesk.className} text-6xl sm:text-8xl font-bold 
          bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 
          text-transparent bg-clip-text mb-12 text-center`}>
          zkxyz
        </h1>
        
        {/* Terminal Container */}
        <div className="cyber-frame cyber-glow w-full aspect-[16/9] 
          backdrop-blur-sm bg-black/30 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-8 z-10
            bg-gradient-to-r from-blue-500/10 to-purple-500/10 
            border-b border-chrome/20" />
          <iframe
            src={process.env.NEXT_PUBLIC_ELIZA_URL || "https://eliza-client.onrender.com"}
            className="w-full h-full"
            style={{ 
              minWidth: '1024px',
              border: 'none',
              transform: 'scale(1)',
              transformOrigin: 'top left'
            }}
            allow="clipboard-read; clipboard-write"
          />
        </div>

        {/* Ambient Light Effect */}
        <div className="fixed -top-1/2 -left-1/2 w-full h-full 
          bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 
          blur-3xl pointer-events-none" />
      </div>
    </main>
  )
}
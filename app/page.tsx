import Image from 'next/image'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import EmailSignup from './components/EmailSignup'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black relative">
      <Image
        src="/background.svg"
        alt="Background"
        fill
        style={{ objectFit: 'cover' }}
        priority
      />
      <Navigation />
      <div className="z-10 flex flex-col items-center justify-center gap-8">
        <Image
          src="/title.svg"
          alt="Silhouette Title"
          width={516}
          height={201}
          priority
        />
        <Image
          src="/coming_soon.svg"
          alt="Coming Soon"
          width={320}
          height={81}
          priority
        />
        <EmailSignup />
      </div>
      <Footer />
    </main>
  )
}


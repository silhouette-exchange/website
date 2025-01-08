import Image from 'next/image'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-custom-dark relative">
            <Navigation />

            <div
                className="z-10 flex flex-col items-center justify-center gap-8"
                style={{
                    transform: `translateY(-100px)`,
                }}
            >
                <div className="relative">
                    <Image
                        src="/title.svg"
                        alt="Silhouette Title"
                        width={916}
                        height={1000}
                        priority
                    />
                </div>
                <Image
                    src="/coming_soon.svg"
                    alt="Coming Soon"
                    width={320}
                    height={81}
                    priority
                />
            </div>

            {/* <div className="z-10 flex flex-col items-center justify-start gap-20">
                <Image
                    src="/title.svg"
                    alt="Silhouette Title"
                    width={916}
                    height={401}
                    priority
                />
                <Image
                    src="/coming_soon.svg"
                    alt="Coming Soon"
                    width={320}
                    height={81}
                    priority
                />
            </div> */}

            <Footer />

            {/* Background Image Container */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 overflow-hidden z-0">
                <Image
                    src="/background.svg"
                    alt="Background"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                />
            </div>
            {/* Gradient Overlay for Smooth Transition */}
            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent z-[-1]" />
        </main>
    )
}


import Image from 'next/image'
import Link from 'next/link'

export default function Navigation() {
    return (
        <nav className="w-full flex justify-between items-center p-4 z-10">
            <Image
                src="/logo-nav.svg"
                width={1500}
                height={85}
                className="w-auto"
            />
            <div className="flex gap-4">
                <Link href="https://t.me/silhouette_exchange" target="_blank" rel="noopener noreferrer">
                    <Image src="/telegram-icon.svg" alt="Telegram" width={32} height={32} />
                </Link>
                <Link href="https://x.com/silhouette_ex" target="_blank" rel="noopener noreferrer">
                    <Image src="/x-icon.svg" alt="X (Twitter)" width={32} height={32} />
                </Link>
            </div>
        </nav>
    )
}


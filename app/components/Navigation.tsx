import Image from 'next/image'
import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="w-full flex justify-between items-center p-4 z-10">
      <div className="text-white text-2xl font-bold">Silhouette</div>
      <div className="flex gap-4">
        <Link href="https://t.me/silhouette" target="_blank" rel="noopener noreferrer">
          <Image src="/telegram-icon.svg" alt="Telegram" width={32} height={32} />
        </Link>
        <Link href="https://twitter.com/silhouette" target="_blank" rel="noopener noreferrer">
          <Image src="/x-icon.svg" alt="X (Twitter)" width={32} height={32} />
        </Link>
      </div>
    </nav>
  )
}


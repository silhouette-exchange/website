import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="w-full z-10">
      <Image
        src="/footer.svg"
        alt="Footer"
        width={1440}
        height={80}
        className="w-full"
      />
    </footer>
  )
}


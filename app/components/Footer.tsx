import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="w-full z-10">
            <Image
                src="/footer.svg"
                alt="Footer"
                width={1000}
                height={55}
                className="w-auto mx-auto"
            />
        </footer>
    )
}


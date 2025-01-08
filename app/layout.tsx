import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Silhouette',
    description: 'Private Trading on Hyperliquid',
    icons: {
        icon: '/silhouette_logo.svg', // Path to your SVG icon
    },
}


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}

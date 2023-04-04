import './globals.css'


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  metadataBase: process.env.VERCEL_URL
    ? new URL('https://' + process.env.VERCEL_URL)
    : new URL('http://localhost:3000'),
  twitter: {
    card: 'summary_large_image',
    site: '@nextjs',
    creator: '@huozhi',
    title: 'Create Next App',
    description: 'Generated by create next app',
  },
  alternates: {
    canonical: './',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

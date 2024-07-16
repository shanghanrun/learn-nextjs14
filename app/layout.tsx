import { Metadata } from "next"
import Navigation from "./components/navigation"

export const metadata: Metadata={
	title:{
		template:"%s | Next Movies",
		default:"Loading...",
	},
	description:"Generate by Next.js"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}

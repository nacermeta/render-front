import Test from './somthing/Test'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Test />
      </body>
    </html>
  )
}

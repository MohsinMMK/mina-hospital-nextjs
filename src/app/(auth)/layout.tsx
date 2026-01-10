export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Auth pages have their own layout without the main header/footer
  return <>{children}</>
}

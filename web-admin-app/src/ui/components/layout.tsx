interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <div>twerwe</div>
      <main>{children}</main>
    </>
  )
}
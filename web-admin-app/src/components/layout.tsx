interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      ttest
      <main>{children}</main>
    </>
  )
}
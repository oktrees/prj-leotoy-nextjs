
import type { AppProps } from 'next/app'

export default function Layout({ children }: AppProps) {
  return (
    <>
      ttest
      <main>{children}</main>
    </>
  )
}
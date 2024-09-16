import RootLayout from "../layout"
import "@/styles/main.scss"

export default function App({ Component, pageProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  )
}
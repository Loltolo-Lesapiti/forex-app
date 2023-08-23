import Header from "./pages/header/page"
import Footer from "./pages/footer/page"
import Main from "./pages/main/page"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <Main />
      <Footer />
    </main>
  )
}

import Container from "./components/layout/Container"
import Footer from "./components/layout/Footer"
import Hashtags from "./components/layout/HashtagList"


function App() {
  
  return (
    <>
      <div className="app">
        <Hashtags />
        <Container />
        <Footer />
      </div>
    </>
  )
}

export default App

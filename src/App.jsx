import "./App.css"
import { Header, Main, Group, Footer } from "./components/index.js"
/* 
import logo from "./logo.svg"
<img src={logo} className="App-logo" alt="logo" />
*/
const App = () => (
  <div className="page">
    <Header />
    <Main />
    <Group />
    <Footer />
  </div>
)

export { App }

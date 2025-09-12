import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./components/Home";
import Header from "./components/Header";
import CoinDetails from "./components/CoinDetails";
import Exchanges from "./components/Exchanges";
import Coins from "./components/Coins";
import Footer from "./components/Footer"
import XcryptoAuth from "./components/XcryptoAuth";
import InsightsPage from "./components/InsightsPage"

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/coins" element={<Coins/>}/>
        <Route path="/exchanges" element={<Exchanges/>}/>
        <Route path="/coin/:id" element={<CoinDetails/>}/>
                <Route path="/authform" element={<XcryptoAuth/>}/>
<Route path="/InsightsPage" element={<InsightsPage/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;

import Navbar from './components/Navbar'
import Staff from './components/Staff'
import Notice from './components/Notice'
import TripToHome from './components/TripToHome'
import Footer from './components/Footer';

// simulate api data
import triphomedata from "./apijson/triphomedata"


function App() {
 const trip = triphomedata.map(item => {
  return (
    <TripToHome 
      key = {item.id}
      {...item}
    />
  )
 })
 const staff = triphomedata.map(item => {
  return (
    <Staff 
      key = {item.id}
      {...item}
    />
  )
 })
  

  return (
    <>
    <Navbar />
    {staff}
    <Notice />
    {trip}
    <Footer />
    </>
  )
}

export default App

import '../styles/globals.css'
import NavBar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return(
    <>
      <NavBar/>
      <Component {...pageProps} className="bg-accent"/>
    
    </> 
  )
}

export default MyApp

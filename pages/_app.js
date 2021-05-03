import '../styles/globals.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import 'pure-react-carousel/dist/react-carousel.es.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

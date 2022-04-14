import '../styles/index.css';
import {ToDosProvider} from '../contexts/ToDosContext';

function MyApp({ Component, pageProps }) {
  return (
    <ToDosProvider>
      <div className="container mx-auto my-10 max-w-xl">
        <Component {...pageProps} />
      </div>
    </ToDosProvider>
  );
}

export default MyApp

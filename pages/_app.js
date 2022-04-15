import '../styles/index.css';
import {ToDosProvider} from '../contexts/ToDosContext';
import { UserProvider } from '@auth0/nextjs-auth0';

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <ToDosProvider>
        <div className="container mx-auto my-10 max-w-xl">
          <Component {...pageProps} />
        </div>
      </ToDosProvider>
    </UserProvider>
  );
}

export default MyApp

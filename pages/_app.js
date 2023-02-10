import '../styles/globals.css'
import { useRouter } from 'next/router'
import Layout from "../components/layout"

function MyApp({ Component, pageProps: { ...pageProps } }) {
  const router = useRouter();

  const getContent = () => {
    
    return (
      <>
            <Layout>
              <div className="max-w-7xl ml-4 sm:px-6 lg:px-8">
                <Component {...pageProps} />
              </div>
            </Layout>
        
      </>
    );
  };

  return <>{getContent()}</>;
}

export default MyApp
import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="w-screen">
      <Component {...pageProps} /> 
    </div>
)}

export default MyApp;

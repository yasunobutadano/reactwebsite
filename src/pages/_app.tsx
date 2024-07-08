import React from 'react'; // ここで一度だけインポート
import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';
import '../styles/index.css';
import '../js/fontAwesome';


const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;

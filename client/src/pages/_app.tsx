import Axios from 'axios';

import Layout from '../components/Layout'

import '../styles/app.scss'

Axios.defaults.baseURL = 'http://localhost:3001'
Axios.defaults.headers.get['Content-Type'] = 'application/json';
Axios.defaults.headers.post['Content-Type'] = 'application/json';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

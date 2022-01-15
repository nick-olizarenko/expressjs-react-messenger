import Layout from '../components/Layout'

import '../styles/app.scss'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

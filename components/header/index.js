import Image from 'next/image'
import Link from 'next/link'

import styles from './SiteHeader.module.scss'
import logo from './logo.png'

export default function SiteHeader() {
  const fooValue = 'test'

  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.logo}><Image src={logo} alt="" /></div>
          <Link href='/'>Home</Link>
          <Link href={{ pathname: '/catalog', query: { foo: fooValue } }}>Catalog</Link>
        </div>
        <div className={styles.right}>{<a href="" className="cta">Sign In</a>}</div>
      </div>
    </>
  )
}

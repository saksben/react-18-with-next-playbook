import Image from 'next/image'
import { useRouter } from 'next/router'

import products from '../catalog/products.json'
import styles from './Product.module.scss'
import { currencyFormat } from '../../utils/numericFormatters'

function Product() {
  const router = useRouter()
  const { productId } = router.query
  const product = products.find(p => p._id === productId)

  if (!productId)
    return null

  return (
    <div className={styles.product}>
      <div className={styles.title}>
        {product.title}: {currencyFormat(product.price)}
      </div>
      <div className={styles.image}>
        <Image
          src={(`/images/albums/${product.imageName}`)}
          width={750}
          height={750}
          alt={product.name}
        />
      </div>
    </div>
  )
}

export default Product

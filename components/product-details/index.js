import Image from 'next/image'
import Link from 'next/link'

import styles from './ProductDetails.module.scss';
import { currencyFormat } from '../../utils/numericFormatters'

const ProductDetails = ({ product, addToCart }) => {
  return (
    <div className={styles.product}>
      <div className={styles.image}>
        <button className={`button ${styles.addToCart}`} onClick={() => addToCart(product)}>Add to Cart</button>
        <Image
          src={(`/images/albums/${product.imageName}`)}
          width={400}
          height={400}
          alt={product.name}
        />
      </div>
      <div className={styles.title}><Link href={`/product/${product._id}`}>{product.title}</Link></div>
      <div className={styles.price}>{currencyFormat(product.price)}</div>
    </div>
  );
};

export default ProductDetails;

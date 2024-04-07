import Image from "next/image";

import {
  divinity,
  synchronicity,
  theUndertaking,
  asTheSunSpeaks,
} from "../public/images/albums";
import heroBanner from "../public/images/hero-banner.png";
import soundwaves from "../public/images/soundwaves.jpg";
import soundwavesSmall from "../public/images/soundwaves-small.jpg";

import styles from "./HomePage.module.scss";

function HomePage() {
  return (
    <>
      <div className={styles.heroImage}>
        <Image src={heroBanner} layout="fill" objectFit="cover" />
      </div>
      <div className={styles.cta}>
        <span className={styles.image}>
          <Image layout="fixed" width="200" height="200" src={divinity} />
        </span>
        <span className={styles.image}>
          <Image
            layout="fixed"
            height="200"
            width="200"
            src={synchronicity}
            alt=""
          />
        </span>
        <div className={styles.ctaText}>
          <div className={styles.ctaMainText}>
            Your <em>Album</em> and <em>Artist</em> Name
          </div>
          <div className={`${styles.ctaSubText}`}>
            <div>
              on <em>Custom</em> Album Designs
            </div>
          </div>
          <button className="buton cta">Shop Now</button>
        </div>
        <span className={styles.image}>
          <Image
            layout="fixed"
            height="200"
            width="200"
            src={theUndertaking}
            alt=""
          />
        </span>
        <span className={styles.image}>
          <Image
            layout="fixed"
            height="200"
            width="200"
            src={asTheSunSpeaks}
            alt=""
          />
        </span>
      </div>
      <div className={styles.soundwavesImage}>
        <Image src={soundwavesSmall} layout="responsive" />
      </div>
    </>
  );
}

export default HomePage;

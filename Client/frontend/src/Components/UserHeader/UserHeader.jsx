import { useCallback } from "react";
import styles from "./UserHeader.module.css";
import farmimg from '../../Asset/Image/Famlogo.jpg'
const FrameComponent10 = () => {
  const onMarketTextClick = useCallback(() => {
    // Please sync "market-user" to the project
  }, []);

  const onAboutProductsTextClick = useCallback(() => {
    // Please sync "About-product-user" to the project
  }, []);

  const onFarmersTextClick = useCallback(() => {
    // Please sync "Farmers-user" to the project
  }, []);

  const onRectangleClick = useCallback(() => {
    // Please sync "profile-user" to the project
  }, []);

  const onUserTextClick = useCallback(() => {
    // Please sync "profile-user" to the project
  }, []);

  return (
    <header className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.preview11Wrapper}>
        <img
          className={styles.preview11}
          loading="lazy"
          alt=""
          src={farmimg}
        />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.homeWrapper}>
          <div className={styles.home}>Home</div>
        </div>
        <div className={styles.categoryWrapper}>
          <div className={styles.category}>Category</div>
        </div>
        <div className={styles.marketWrapper}>
          <div className={styles.market} onClick={onMarketTextClick}>
            Market
          </div>
        </div>
        <div className={styles.aboutProductsWrapper}>
          <div
            className={styles.aboutProducts}
            onClick={onAboutProductsTextClick}
          >
            About products
          </div>
        </div>
        <div className={styles.farmersWrapper}>
          <div className={styles.farmers} onClick={onFarmersTextClick}>
            Farmers
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameWrapper}>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameItem} onClick={onRectangleClick} />
              <div className={styles.user} onClick={onUserTextClick}>
                User
              </div>
            </div>
          </div>
          <div className={styles.contactUs}>Contact Us</div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent10;

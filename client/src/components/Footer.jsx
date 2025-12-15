import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          {/* Brand Section */}
          <div className={`${styles.section} ${styles.brand}`}>
            <div className={styles.logo}>
              <span className={styles.logoText}>FrameIt</span>
            </div>
            <p className={styles.tagline}>
              AR-powered virtual try-on platform for eyewear.
            </p>
          </div>

          {/* Quick Links */}
          <div className={`${styles.section} ${styles.links}`}>
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/try-on">Try On</Link></li>
              <li><Link to="/cart">Cart</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className={`${styles.section} ${styles.links}`}>
            <h4>Contact</h4>
            <ul>
              <li>
                Email:{" "}
                <a href="mailto:support@frameit.com?subject=FrameIt%20Support">
                  support@frameit.com
                </a>
              </li>
              <li>Location: Cairo, Egypt</li>
            </ul>
          </div>

          {/* About */}
          <div className={`${styles.section} ${styles.links}`}>
            <h4>About</h4>
            <ul>
              <li>Virtual Eyewear Try-On</li>
              <li>Augmented Reality Experience</li>
              <li>Real-Time Visualization</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © 2024 FrameIt. All rights reserved.
          </p>

          <div className={styles.bottomLinks}>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

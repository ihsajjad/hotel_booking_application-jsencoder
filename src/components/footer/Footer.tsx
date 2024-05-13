import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span>2024 &copy; All copyrights reserve of HotelBA</span>
      <ul>
        <li>Privacy Policy</li>
        <li>Terms and Conditions</li>
        <li>Career</li>
      </ul>
    </footer>
  );
};

export default Footer;

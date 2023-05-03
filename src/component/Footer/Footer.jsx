import { Link } from "react-router-dom";
import {SiFacebook} from 'react-icons/si'
import {BsInstagram} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.mainBox}>
      <div className={styles.innerBox}>
        <div className={styles.left}>
          <Link to={"/"}>
            <img
              src="https://1000logos.net/wp-content/uploads/2021/07/Michigan-State-Spartans-logo.png"
              alt="spartanFitness"
            />
          </Link>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className={styles.icons}>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><SiFacebook/></a>
            <a href="https://www.instagram.com" target="_blank"  rel="noreferrer"><BsInstagram/></a>
            <a href="https://www.twitter.com" target="_blank"  rel="noreferrer"><AiFillTwitterCircle/></a>            
            </div>
        </div>
        <div style={{ display: "flex" }}>
          <ul className={styles.footList}>
            <h4>Healthy living</h4>
            <li>Loreum</li>
            <li>Loreum ipsum</li>
            <li>Loreum</li>
          </ul>
          <ul className={styles.footList}>
            <h4>Services</h4>
            <li>Loreum</li>
            <li>Loreum ipsum</li>
            <li>Loreum</li>
          </ul>
          <ul className={styles.footList}>
            <h4>Programms</h4>
            <li>Loreum</li>
            <li>Loreum ipsum</li>
            <li>Loreum</li>
          </ul>
        </div>
      </div>
      <hr />
      <div style={{ display: "flex", justifyContent: "center" }}>
        @2023 all copy rights reserved
      </div>
    </div>
  );
}

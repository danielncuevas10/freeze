import { useState } from "react";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#home" onClick={() => setOpen(false)}>
          <h1 className={styles.logo}>freeze</h1>
        </a>

        <button
          className={`${styles.toggle} ${open ? styles.open : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`${styles.nav} ${open ? styles.show : ""}`}>
          <a href="#home" onClick={() => setOpen(false)}>
            Home
          </a>
          <a href="#nase-usluge" onClick={() => setOpen(false)}>
            Naše usluge
          </a>
          <a href="#nas-rad" onClick={() => setOpen(false)}>
            Naš rad
          </a>
          <a href="#cjenovnik" onClick={() => setOpen(false)}>
            Cjenovnik
          </a>
          <a href="#zasto-odabrati-nas" onClick={() => setOpen(false)}>
            Zašto odabrati baš nas
          </a>
          <div className={styles.btn}>
            <a href="#zakazite-termin" onClick={() => setOpen(false)}>
              Zakažite termin
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

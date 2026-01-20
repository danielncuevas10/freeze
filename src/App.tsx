import styles from "./App.module.scss";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar.tsx";
import { MainButton } from "./components/Buttons/MainButton.tsx";
import ServicesCard from "./components/Services/CardServices.tsx";
import { serviceCategories } from "./data/prices.data";
import { service } from "./data/services.data.ts";
import PriceCard from "./components/Services/Prices";
import pic1 from "./assets/hairstyles/pic1.png";
import pic2 from "./assets/hairstyles/pic2.png";
import pic3 from "./assets/hairstyles/pic3.png";
import pic4 from "./assets/hairstyles/pic4.png";
import hair5 from "./assets/hairstyles/hair5.png";
import hair6 from "./assets/hairstyles/hair6.png";
import hair7 from "./assets/hairstyles/hair7.png";
import hair8 from "./assets/hairstyles/hair8.png";
import Trust1 from "./assets/icons/whyUs/Trust1.svg";
import Trust2 from "./assets/icons/whyUs/Trust2.svg";
import Trust3 from "./assets/icons/whyUs/Trust3.svg";
import clock from "./assets/icons/contact/clock.svg";
import location from "./assets/icons/contact/location.svg";
import phone from "./assets/icons/contact/phone.svg";
import insta from "./assets/icons/contact/instagram.svg";
import facebook from "./assets/icons/contact/facebook.svg";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <Navbar />
      <section id="home">
        <div className={styles.heroSection}>
          <div className={styles.heroText}>
            <h1>Transformirajte svoj izgled</h1>
            <p>
              Stručno šišanje i farbanje kose u luksuznom, modernom okruženju
            </p>
          </div>
          <a href="#zakazite-termin" style={{ textDecoration: "none" }}>
            <MainButton text="Rezervišite odmah" variant="primary" />
          </a>

          <a href="#nase-usluge" style={{ textDecoration: "none" }}>
            <MainButton text="Prikaži više" variant="secondary" />
          </a>
        </div>
      </section>

      <section id="nase-usluge">
        <div className={styles.services}>
          <h1>Naše usluge</h1>
          <p>
            Od preciznih šišanja do živih boja, nudimo sveobuhvatne frizerske
            usluge
          </p>
          <div className={styles.servicesList}>
            {service.map((service) => (
              <ServicesCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section id="nas-rad">
        <div className={styles.work}>
          <h1>Naš rad</h1>
          <p>Pogledajte transformacije koje stvaramo svaki dan</p>

          <div className={styles.hairstylesGrid}>
            <img src={pic1} />
            <img src={pic2} />
            <img src={pic3} />
            <img src={pic4} />

            {isVisible && (
              <>
                <img src={hair5} />
                <img src={hair6} />
                <img src={hair7} />
                <img src={hair8} />
              </>
            )}
          </div>

          {!isVisible && (
            <MainButton
              text="Prikaži više"
              variant="primary"
              onClick={() => setIsVisible(true)}
            />
          )}
        </div>
      </section>

      <section id="cjenovnik">
        <div className={styles.prices}>
          <h1>Cjenovnik</h1>
          <p>
            Znamo da želite znati cijene, zato smo transparentni kako biste
            mogli imati izuzetnu uslugu.
          </p>

          <div className={styles.carouselContainer}>
            <div className={styles.carouselScroller}>
              {serviceCategories.map((category) => (
                <div
                  key={category.categoryName}
                  className={styles.carouselItem}
                >
                  <PriceCard
                    categoryName={category.categoryName}
                    services={category.services}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="zasto-odabrati-nas">
        <div className={styles.whyUs}>
          <h1>Zašto odabrati baš nas?</h1>
          <p>Gdje se vrhunska stručnost susreće s umjetnošću kose.</p>
          <div className={styles.trustCards}>
            <div className={styles.trustCard}>
              <img src={Trust1} />
              <h3>Iskustvo i stručnost</h3>
              <p>
                Naš tim čine iskusni frizeri koji su majstori u svojoj struci,
                posvećeni pružanju vrhunskih usluga.
              </p>
            </div>
            <div className={styles.trustCard}>
              <img src={Trust2} />
              <h3>Personalizirani pristup</h3>
              <p>
                Svaki klijent je jedinstven. Slušamo vaše želje i prilagođavamo
                usluge kako bismo ispunili vaše specifične potrebe.
              </p>
            </div>
            <div className={styles.trustCard}>
              <img src={Trust3} />
              <h3>Kvalitetni proizvodi</h3>
              <p>
                Koristimo samo najbolje proizvode za njegu kose kako bismo
                osigurali zdravlje i ljepotu vaše kose.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="zakazite-termin">
        <div className={styles.appointment}>
          <h1>Zakažite termin</h1>
          <p>Spremni za vašu transformaciju? Kontaktirajte nas još danas.</p>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <img src={clock} />
              <div className={styles.contactTitle}>
                <h4>Radno vrijeme</h4>
                <p>
                  Ponedjeljak - petak: 9 am - 6 pm <br />
                  Subota: 9 am - 5 pm <br />
                  Nedjelja: Zatvoreno
                </p>
              </div>
            </div>
            <div className={styles.contactItem}>
              <img src={location} />
              <div className={styles.contactTitle}>
                <h4>Lokacija</h4>
                <p>Alipašina 53, Sarajevo 71000, Bosnia & Herzegovina</p>
              </div>
            </div>
            <div className={styles.contactItem}>
              <img src={phone} />
              <div className={styles.contactTitle}>
                <h4>Broj telefona</h4>
                <a href="tel:+38733863391" className={styles.phoneLink}>
                  +387 33 863 391
                </a>
              </div>
            </div>
          </div>
          <a href="tel:+38733863391" className={styles.phoneLink}>
            <MainButton text="Rezervišite odmah" variant="primary" />
          </a>
        </div>
      </section>

      <div className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLeft}>
            <h1>freeze</h1>
            <p>
              Transformišite svoj izgled uz stručnjaka u luksuznom okruženju
              koje zaslužujete.
            </p>
            <a href="tel:+38733863391" className={styles.phoneLink}>
              +387 33 863 391
            </a>
          </div>
          <div className={styles.footerRight}>
            <div className={styles.socialIcons}>
              <img src={insta} />
              <img src={facebook} />
            </div>
          </div>
        </div>
        <h6>
          © 2026 freeze. All rights reserved.
          <br /> Developed by The Cave.
        </h6>
      </div>
    </>
  );
}

export default App;

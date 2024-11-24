import Link from "next/link";
import styles from "./section.css";

const Section = () => {
    return (
        <section className={styles.heroSection}>
            <div className={styles.content}>
                <div className={styles.leftDivs}>
                    <div className={styles.box}>Div 1</div>
                    <div className={styles.box}>Div 2</div>
                    <div className={styles.box}>Div 3</div>
                    <div className={styles.box}>Div 4</div>
                </div>
                <div className={styles.rightContent}>
                    <h1 className={styles.largeText}>Yirik Harfli Matn</h1>
                    <p className={styles.smallText}>Kichik harfli matn</p>
                    <Link href="/catalog1" className={styles.catalogLink}>Katalogga o'tish</Link>
                </div>
            </div>
        </section>
    );
};

export default Section;
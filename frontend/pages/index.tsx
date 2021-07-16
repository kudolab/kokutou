import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>kokutou</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>黒糖</h1>

        <p className={styles.description}>オンライン音像定位実験</p>

        <div className={styles.grid}>
          <Link href="/subject" passHref>
            <div className={styles.card}>
              <h2>被験者選択ページ &rarr;</h2>
              <p>aaaaaaaa</p>
            </div>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>Powered by {"kudolab"}</footer>
    </div>
  );
}

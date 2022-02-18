import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mark 1</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello there, I am <a href="https://github.com/Devkant21">Devkant Swargiary</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://dev21.hashnode.dev/react-boilerplate-generation" className={styles.card}>
            <h2>React Boilerplate Generation &rarr;</h2>
            <p>Boilerplate generation through the ES7 extension (dsznajder).</p>
          </a>

          <a href="https://dev21.hashnode.dev/hoisting-in-javascript" className={styles.card}>
            <h2>Hoisting in Javascript &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://dev21.hashnode.dev/secrets-module-in-python"
            className={styles.card}
          >
            <h2>secrets module in Python &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://dev21.hashnode.dev/virtual-environment-walkthrough-and-flask-installation"
            className={styles.card}
          >
            <h2>Virtual Environment walkthrough and Flask installation  &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://twitter.com/devkant21"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home

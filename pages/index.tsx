import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MyNavbar from '../components/Navbar'
import MyFooter from '../components/Footer'
import Link  from 'next/link'

const Home : NextPage = () => {
// const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mark 1</title>
        <meta name="description" content="programming blogs, frontend" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MyNavbar />
      

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello there, I am <a href="https://github.com/Devkant21">Devkant Swargiary</a>
        </h1>

        <p className={styles.description}>
          Web Developer and Open Source Enthusiast{' '}
          {/* <code className={styles.code}>pages/index.tsx</code> */}
        </p>
        <h2>Tools & Libraries
            <ul>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>ReactJS</li>
              <li>NextJS</li>
              <li>TailwindCSS</li>
              <li>Bootstrap</li>
              <li>Python</li>
              <li>Flask</li>
              <li>Django</li>
              <li>GIT</li>
              </ul>
        </h2>

        <div className={styles.grid}>
          <a href="https://dev21.hashnode.dev/react-boilerplate-generation" className={styles.card}>
            <h2>React Boilerplate Generation &rarr;</h2>
            <p>Boilerplate generation through the ES7 extension (dsznajder).</p>
          </a>

          <a href="https://dev21.hashnode.dev/hoisting-in-javascript" className={styles.card}>
            <h2>Hoisting in Javascript &rarr;</h2>
            <p>In Javascript (JS), variables and functions can be accessed before initializing it without any error anywhere in the program. This is known as Hoisting.</p>
          </a>

          <a
            href="https://dev21.hashnode.dev/secrets-module-in-python"
            className={styles.card}
          >
            <h2>secrets module in Python &rarr;</h2>
            <p>The secrets module is useful for generating random numbers which might be used as a password, security tokens etc. for the application.</p>
          </a>

          <a
            href="https://dev21.hashnode.dev/virtual-environment-walkthrough-and-flask-installation"
            className={styles.card}
          >
            <h2>Virtual Environment walkthrough and Flask installation  &rarr;</h2>
            <p>
            Virtual environment enables the user to install packages and libraries and work on theprojects without impacting the global environment.
            </p>
          </a>
        </div>
      </main>
      <Link href="/blog">
          <a>Published Articles</a>
      </Link>
      <MyFooter />
    </div>
  )
}

export default Home

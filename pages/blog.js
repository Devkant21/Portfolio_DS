import Head from 'next/head'
import styles from '../styles/Home.module.css'


const blog = () => {
    return(
        <div className={styles.container}>
        <Head>
          <title>Mark 1</title>
          <meta name="description" content="programming blogs, frontend" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
            <h1>
                My Blogs
            </h1>
            <p>Purpose of the blog is to understand and mitigate the errors which impedes the software production</p>

            <div className={styles.grid}>

            <a href="https://dev21.hashnode.dev/error-malformed-postcss-configuration-nextjs" className={styles.card}>
              <h2>Error: Malformed PostCSS Configuration - NextJS &rarr;</h2>
              <p>PostCSS.config.js file configuration issues using the NextJS and TailwindCSS</p>
            </a>

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
        </div>
    );
}

export default blog;



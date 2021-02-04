import Head from 'next/head'
import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Welcome to <a href="https://nextjs.org">Page 2!</a>
				</h1>
			</main>

			<div>
				<Link href="/page3">
					<a href="/page3">Go to page 3</a>
				</Link>
				<br/>
				<Link href="/page2">
					<a href="/page2">Go to page 2</a>
				</Link>
				<br/>
				<Link href="/">
					<a href="/">Go to main page</a>
				</Link>
			</div>
<br/>
<br/>
<hr/>
			<div>
				<button onClick={() => buttonClick()}>
					Throw an error
				</button>
			</div>

			<br/>

			<footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{' '}
					<img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
				</a>
			</footer>
		</div>
	)
}

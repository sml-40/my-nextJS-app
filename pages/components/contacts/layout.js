import Link from "next/link";
import styles from "styles/Home.module.css";

//** Menu Component Here */
function Menu() {
	return (
		<ul>
			<Link href="/">Home</Link>&nbsp;
			<Link href="/components/contacts">Contacts</Link>
		</ul>
	);
}

export default function Layout({ children }) {
	return (
		<div className={styles.container}>
			{/* insert Menu here */}
			<Menu />
			{children}
		</div>
	);
}

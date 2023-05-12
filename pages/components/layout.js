import Link from "next/link";
import styles from "../../styles/Home.module.css";

//** Menu Component Here */
function Menu() {
	return (
		<ul>
			<li>
				<Link href="/">Home</Link>&nbsp;
			</li>
			<li>
				<Link href="/about">About</Link>&nbsp;
			</li>
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

import Link from "next/link";
import contacts from "@/pages/api/contacts";
import Layout from "../layout";

export default function Contacts() {
	return (
		<Layout>
			<h1>Contacts</h1>
			<ul>
				{contacts.map((contact) => (
					<li key={contact.id}>
						<Link href={`/contacts/${contact.id}`}>
							<a>{contact.name}</a>
						</Link>
					</li>
				))}
			</ul>
		</Layout>
	);
}

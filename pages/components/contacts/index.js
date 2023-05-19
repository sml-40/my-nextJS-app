import Link from "next/link";
import contacts from "pages/api/contacts.js";
import Layout from "./layout";

export default function Contacts() {
	return (
		<Layout>
			<ul>
				{contacts.map((contact) => {
					return (
						<li>
							<Link href={`contacts/${contact.id}`}>{contact.name}</Link>
						</li>
					);
				})}
			</ul>
		</Layout>
	);
}

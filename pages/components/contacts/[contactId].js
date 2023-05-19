import Layout from "./layout";
import { useRouter } from "next/router";
import contacts from "pages/api/contacts.js";

export default function Contact() {
	const router = useRouter();
	const { contactId } = router.query;
	const contact = contacts.find((contact) => contact.id === contactId);
	// console.log(`contact ID = ${contact.id}`);
	// console.log(`contact Name = ${contact.name}`);
	const [first, last] = contact?.name.split(" ");
	console.log(`first = ${first}`);
	console.log(`last = ${last}`);
	const fullName = `${first} ${last}`;
	console.log(`fullName = ${fullName}`);
	return (
		<Layout>
			<a
				href="#"
				onClick={() => router.back()}>
				Back
			</a>
			<h2>
				Contact: {last.toUpperCase()}, {first}
			</h2>
		</Layout>
	);
}

import Layout from "../layout";
import contacts from "@/pages/api/contacts";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Contact() {
	const router = useRouter();
	const { contactId } = router.query;
	const contact = contacts.find((contact) => contact.id === contactId);
	return (
		<Layout>
			<h1>Contact</h1>
			<p>{contact.name}</p>
			<p>{contact.email}</p>
			<p>{contact.phone}</p>
			<p>{contact.website}</p>
			<p>{contact.address}</p>
			<p>{contact.company}</p>
			<p>{contact.jobTitle}</p>
			<p>{contact.notes}</p>
			<Link href="/contacts">
				<a>Back to Contacts</a>
			</Link>
		</Layout>
	);
}

import Layout from "../layout";
import { useRouter } from "next/router";
import contacts from "pages/api/contacts.js";

export default function Contact() {
	const router = useRouter();
	const { contactId } = router.query;
	const contact = contacts.find((contact) => contact.id === contactId);
	console.log(`contact = ${contact.id}`);
	return <h1>Contact</h1>;
}

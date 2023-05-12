import Layout from "../layout";
import contacts from "@/pages/api/contacts";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Contact() {
	const router = useRouter();
	const { contactId } = router.query;
	const contact = contacts.find((contact) => contact.id === contactId);
	const [first, last] = contact?.name.split(" ");
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

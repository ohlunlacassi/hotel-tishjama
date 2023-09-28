import ServiceCard from "@/components/ServiceCard";
import { useRouter } from "next/router";
import Link from "next/link";

export default function ServiceDetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <p>Here are the details of the luxury service you selected.</p>
      <ServiceCard id={id} />
      <Link href="/">← back</Link>
    </>
  );
}

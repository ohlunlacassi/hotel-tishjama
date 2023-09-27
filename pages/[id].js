import ServiceCard from "@/components/ServiceCard";
import { useRouter } from "next/router";
import Link from "next/link";

export default function ServiceDetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <ServiceCard id={id} />
      <Link href="/">← back</Link>
    </>
  );
}

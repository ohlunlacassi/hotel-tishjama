import ServiceCard from "@/components/ServiceCard";
import { useRouter } from "next/router";

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

import ServiceCard from "@/components/ServiceCard";
import { useRouter } from "next/router";
import Link from "next/link";
import Paragraph from "@/components/Layout/Paragraph";

export default function ServiceDetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Paragraph>
        Here are the details of the luxury service you selected.
      </Paragraph>
      <ServiceCard id={id} />
      <Link href="/">← back</Link>
    </>
  );
}

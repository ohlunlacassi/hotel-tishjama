import ServiceCard from "@/components/ServiceCard";
import { useRouter } from "next/router";
import Paragraph from "@/components/Layout/Paragraph";
import ActionLink from "@/components/Layout/ActionLink";

export default function ServiceDetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Paragraph>
        Here are the details of the luxury service you selected.
      </Paragraph>
      <ServiceCard id={id} />
      <br />
      <ActionLink href="/">← Services</ActionLink>
    </>
  );
}

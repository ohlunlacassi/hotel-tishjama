import ServiceCard from "@/components/ServiceCard";
import { useRouter } from "next/router";
import { deleteService } from "@/lib/api";
import ActionLink from "@/components/Layout/ActionLink";
import ActionButton from "@/components/Layout/ActionButton";
import Flex from "@/components/Layout/Flex";

export default function ServiceDetailsPage({ user }) {
  const router = useRouter();
  const { id } = router.query;

  async function onDelete(id) {
    if (!confirm("Are you sure you want to delete this service?")) {
      return;
    }
    await deleteService(id);
    router.push("/SPD");
  }

  return (
    <>
      <ServiceCard id={id} user={user} />
      <br />
      <Flex style={{ justifyContent: "space-between" }}>
        <ActionLink href="/SPD">← Services</ActionLink>
        <ActionLink href={`/SPD/services/${id}/edit`}>✏️ Edit</ActionLink>
        <ActionButton type="danger" onClick={() => onDelete(id)}>
          ❌ delete
        </ActionButton>
      </Flex>
    </>
  );
}

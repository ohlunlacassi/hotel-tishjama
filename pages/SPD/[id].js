import ServiceCard from "@/components/ServiceCard";
import Link from "next/link";
import { useRouter } from "next/router";
import { deleteService } from "@/lib/api";

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
      <Link href="/SPD">← Services</Link>
      <Link href={`/SPD/services/${id}/edit`}>✏️ Edit</Link>
      <button type="danger" onClick={() => onDelete(id)}>
        ❌ delete
      </button>
    </>
  );
}

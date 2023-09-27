import useSWR from "swr";
import { useRouter } from "next/router";
import { editService } from "@/lib/api";
import ServiceForm from "@/components/ServiceForm";
import Link from "next/link";

export default function EditService() {
  const router = useRouter();
  const { id } = router.query;
  const {
    data: service,
    isLoading,
    mutate,
  } = useSWR(id ? `/api/services/${id}` : null);

  async function onSubmit(data) {
    await editService(id, data);
    // mutate(`/api/services`);
    // mutate(`/api/services/${id}`);
    router.push("/SPD");
  }

  if (!service || isLoading) {
    return;
  }

  return (
    <>
      <h2>Edit Service</h2>
      <ServiceForm service={service} onSubmit={onSubmit} />
      <Link href="/SPD">cancel</Link>
    </>
  );
}

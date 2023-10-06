import useSWR from "swr";
import { useRouter } from "next/router";
import { editService } from "@/lib/api";
import ServiceForm from "@/components/ServiceForm";
import H2 from "@/components/Layout/H2";
import ActionLink from "@/components/Layout/ActionLink";

export default function EditService() {
  const router = useRouter();
  const { id } = router.query;
  const { data: service, isLoading } = useSWR(
    id ? `/api/services/${id}` : null
  );

  async function onSubmit(data) {
    await editService(id, data);
    router.push(`/SPD/${id}`);
  }

  if (!service || isLoading) {
    return;
  }

  return (
    <>
      <H2>Edit Service</H2>
      <ServiceForm service={service} onSubmit={onSubmit} />
      <br />
      <ActionLink href={`/SPD/${id}`}>Cancel</ActionLink>
    </>
  );
}

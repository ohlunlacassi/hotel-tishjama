import useSWR from "swr";
import { useRouter } from "next/router";
import { editService } from "@/lib/api";
import ServiceForm from "@/components/ServiceForm";
import StyledHeadlineTwo from "@/components/Layout/StyledHeadlineTwo";
import ActionLink from "@/components/Layout/ActionLink";

export default function EditService() {
  const router = useRouter();
  const { id } = router.query;
  const {
    data: service,
    isLoading,
    mutate,
  } = useSWR(id ? `/api/services/${id}` : null);

  async function onSubmit(data, image) {
    try {
      await editService(id, { ...data, image });
      mutate();
      mutate("/api/services");
      router.push(`/SPD/${id}`);
    } catch (error) {
      console.log(error);
      alert("Error editing post");
    }
  }

  if (!service || isLoading) {
    return;
  }

  return (
    <>
      <StyledHeadlineTwo>Edit Service</StyledHeadlineTwo>
      <ServiceForm service={service} onSubmit={onSubmit} />
      <br />
      <ActionLink href={`/SPD/${id}`}>Cancel</ActionLink>
    </>
  );
}

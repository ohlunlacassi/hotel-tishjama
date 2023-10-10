import ServiceForm from "@/components/ServiceForm";
import { useRouter } from "next/router";
import { addService } from "@/lib/api";
import StyledHeadlineTwo from "@/components/Layout/StyledHeadlineTwo";
import ActionLink from "@/components/Layout/ActionLink";

export default function AddServicePage() {
  const router = useRouter();

  async function onSubmit(data) {
    await addService({ ...data });
    router.push("/SPD");
  }

  return (
    <>
      <StyledHeadlineTwo>Add Service</StyledHeadlineTwo>
      <ServiceForm onSubmit={onSubmit} />
      <br />
      <ActionLink href="/SPD">Cancel</ActionLink>
    </>
  );
}

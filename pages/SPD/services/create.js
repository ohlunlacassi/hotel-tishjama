import ServiceForm from "@/components/ServiceForm";
import { useRouter } from "next/router";
import { addService } from "@/lib/api";
import StyledHeadlineTwo from "@/components/Layout/StyledHeadlineTwo";
import ActionLink from "@/components/Layout/ActionLink";
import { mutate } from "swr";
import { uploadImage } from "@/lib/api";

export default function AddServicePage() {
  const router = useRouter();

  async function onSubmit(data, image) {
    try {
      await addService({ ...data, image });
      mutate("/api/services");
      router.push("/SPD");
    } catch (error) {
      console.log(error);
      alert("Error creating service");
    }
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

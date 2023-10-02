import ServiceForm from "@/components/ServiceForm";
import { useRouter } from "next/router";
import { addService } from "@/lib/api";
import H2 from "@/components/Layout/H2";
import ActionLink from "@/components/Layout/ActionLink";

export default function AddServicePage() {
  const router = useRouter();

  async function onSubmit(data) {
    await addService({ ...data });
    router.push("/SPD");
  }

  return (
    <>
      <H2>Add Service</H2>
      <ServiceForm onSubmit={onSubmit} />
      <br />
      <ActionLink href="/SPD">Cancel</ActionLink>
    </>
  );
}

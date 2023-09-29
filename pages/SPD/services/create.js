import ServiceForm from "@/components/ServiceForm";
import Link from "next/link";
import { useRouter } from "next/router";
import { addService } from "@/lib/api";
import H2 from "@/components/Layout/H2";

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

      <Link href="/SPD">cancel</Link>
    </>
  );
}

import ServiceForm from "@/components/ServiceForm";
import Link from "next/link";
import { useRouter } from "next/router";
import { addService } from "@/lib/api";

export default function AddServicePage() {
  const router = useRouter();

  async function onSubmit(data) {
    await addService({ ...data });
    router.push("/SPD");
  }

  return (
    <>
      <h2>Add Service</h2>
      <ServiceForm onSubmit={onSubmit} />

      <Link href="/SPD">cancel</Link>
    </>
  );
}

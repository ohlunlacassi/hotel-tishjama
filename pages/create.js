import ServiceForm from "@/components/ServiceForm";
import Link from "next/link";
import { useRouter } from "next/router";
import { addService } from "@/lib/api";
import { mutate } from "swr";

export default function AddServicePage() {
  const router = useRouter();

  async function onSubmit(data) {
    await addService({ ...data });
    mutate(`api/services`);
    router.push("/");
  }

  return (
    <>
      <ServiceForm onSubmit={onSubmit} />
      <div>
        <Link href="/">
          <p>cancel</p>
        </Link>
      </div>
    </>
  );
}

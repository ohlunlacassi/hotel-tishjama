import ServiceForm from "@/components/ServiceForm";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";
import { createService } from "@/lib/api";

export default function AddServicePage() {
  const router = useRouter();
  const { mutate } = useSWR("/api/services");

  async function addService(service) {
    const response = await fetch("/api/services", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (response.ok) {
      mutate();
    }
  }

  return (
    <>
      <ServiceForm />
      <div>
        <Link href="/">
          <p>cancel</p>
        </Link>
      </div>
    </>
  );
}

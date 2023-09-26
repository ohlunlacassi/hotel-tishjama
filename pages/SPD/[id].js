import ServiceCard from "@/components/ServiceCard";
import Link from "next/link";

export default function ServiceDetailsPage() {
  return (
    <>
      <ServiceCard />
      <Link href="[id]/edit.js">✏️ Edit</Link>
    </>
  );
}

import ServiceList from "../../components/ServiceList/index";
import Link from "next/link";
import H2 from "@/components/Layout/H2";

export default function SPDHomePage() {
  return (
    <>
      <Link href="../">User Dashboard</Link>
      <H2>Services</H2>
      <Link href="/SPD/services/create">+ add service</Link>
      <ServiceList context="SPD" />
    </>
  );
}

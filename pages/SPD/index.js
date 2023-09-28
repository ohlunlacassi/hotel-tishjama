import ServiceList from "../../components/ServiceList/index";
import Link from "next/link";

export default function SPDHomePage() {
  return (
    <>
      <Link href="../">User Dashboard</Link>
      <h2>Services</h2>
      <Link href="/SPD/services/create">+ add service</Link>
      <ServiceList context="SPD" />
    </>
  );
}

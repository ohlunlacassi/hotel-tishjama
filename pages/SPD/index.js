import ServiceList from "../../components/ServiceList/index";
import H2 from "@/components/Layout/H2";
import ActionLink from "@/components/Layout/ActionLink";

export default function SPDHomePage() {
  return (
    <>
      <H2>Services</H2>
      <ActionLink href="/SPD/services/create">+ add service</ActionLink>
      <ActionLink href="../">User Dashboard</ActionLink>
      <ServiceList context="SPD" />
    </>
  );
}

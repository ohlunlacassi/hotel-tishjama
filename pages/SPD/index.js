import ServiceList from "../../components/ServiceList/index";
import StyledHeadlineTwo from "@/components/Layout/StyledHeadlineTwo";
import ActionLink from "@/components/Layout/ActionLink";

export default function SPDHomePage() {
  return (
    <>
      <StyledHeadlineTwo>Services</StyledHeadlineTwo>
      <ActionLink href="/SPD/services/create">+ add service</ActionLink>
      <ActionLink href="../">User Dashboard</ActionLink>
      <ServiceList context="SPD" />
    </>
  );
}

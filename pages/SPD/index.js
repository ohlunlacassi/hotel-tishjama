import ServiceList from "../../components/ServiceList/index";
import StyledHeadlineTwo from "@/components/Layout/StyledHeadlineTwo";
import ActionLink from "@/components/Layout/ActionLink";
import ActionButton from "@/components/Layout/ActionButton";
import StyledLogin from "@/components/Layout/StyledLogin";
import useUser from "@/hooks/useUser";

export default function SPDHomePage() {
  const { logout } = useUser();

  return (
    <>
      <StyledLogin>
        <ActionLink href="/SPD/services/create">+ add service</ActionLink>
        Welcome, Service Manager!
        <ActionButton onClick={logout}>Log Out</ActionButton>
      </StyledLogin>
      <StyledHeadlineTwo>Services</StyledHeadlineTwo>
      <ServiceList context="SPD" />
    </>
  );
}

import Paragraph from "@/components/Layout/Paragraph";
import ServiceList from "../components/ServiceList/index";
import StyledHeadlineTwo from "@/components/Layout/StyledHeadlineTwo";
import ActionLink from "@/components/Layout/ActionLink";
import useUser from "@/hooks/useUser";
import StyledLogin from "@/components/Layout/StyledLogin";
import ActionButton from "@/components/Layout/ActionButton";

export default function HomePage({ user }) {
  const { logout } = useUser();

  return (
    <>
      <Paragraph>
        Welcome! On this page, you will find a list of Hotel Tishjama&#x27;s
        bookable, luxury services! Enjoy your stay.
      </Paragraph>
      {user ? (
        <StyledLogin>
          <ActionLink href="./MyBookings">My Bookings</ActionLink>Welcome,{" "}
          {user.firstName} {user.lastName}!{" "}
          <ActionButton onClick={logout}>Log Out</ActionButton>
        </StyledLogin>
      ) : (
        <StyledLogin>
          To use our services, please log in.{" "}
          <ActionLink href="/login">Log In</ActionLink>
        </StyledLogin>
      )}
      <StyledHeadlineTwo>Services</StyledHeadlineTwo>
      <ServiceList />
    </>
  );
}

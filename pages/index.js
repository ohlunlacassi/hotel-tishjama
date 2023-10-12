import ServiceList from "../components/ServiceList/index";
import StyledHeadlineTwo from "@/components/Layout/StyledHeadlineTwo";
import ActionLink from "@/components/Layout/ActionLink";
import useUser from "@/hooks/useUser";
import StyledLogin from "@/components/Layout/StyledLogin";
import ActionButton from "@/components/Layout/ActionButton";
import WelcomeText from "@/components/Layout/WelcomeText";

export default function HomePage({ user }) {
  const { logout } = useUser();

  return (
    <>
      <WelcomeText>
        Welcome! On this page, you will find a list of Hotel Tishjama&#x27;s
        bookable, luxury services! Enjoy your stay.
      </WelcomeText>
      {user ? (
        <StyledLogin>
          <ActionLink href="./MyBookings">My Bookings</ActionLink>Welcome,{" "}
          {user.firstName} {user.lastName}!{" "}
          <ActionButton onClick={logout}>Log Out</ActionButton>
        </StyledLogin>
      ) : (
        <StyledLogin>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To use our services, please
          log in. <ActionLink href="/login">Log In</ActionLink>
        </StyledLogin>
      )}
      <StyledHeadlineTwo>Services</StyledHeadlineTwo>
      <ServiceList />
    </>
  );
}

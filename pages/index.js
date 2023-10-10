import Paragraph from "@/components/Layout/Paragraph";
import ServiceList from "../components/ServiceList/index";
import StyledHeadlineTwo from "@/components/Layout/StyledHeadlineTwo";
import ActionLink from "@/components/Layout/ActionLink";
import useUser from "@/hooks/useUser";

export default function HomePage({ user }) {
  const { logout } = useUser();
  if (user) {
    return (
      <>
        <Paragraph>
          Welcome! On this page, you will find a list of Hotel Tishjama&#x27;s
          bookable, luxury services! Enjoy your stay.
        </Paragraph>
        <p>
          <ActionLink href="./MyBookings">My Bookings</ActionLink>Welcome,{" "}
          {user.firstName} {user.lastName}!{" "}
          <button onClick={logout}>Log Out</button>
        </p>
        <StyledHeadlineTwo>Services</StyledHeadlineTwo>
        <ServiceList />
      </>
    );
  }
  return (
    <>
      <Paragraph>
        Welcome! On this page, you will find a list of Hotel Tishjama&#x27;s
        bookable, luxury services! Enjoy your stay.
      </Paragraph>
      <p>
        To use our services, please log in.{" "}
        <ActionLink href="/login">Log In</ActionLink>
      </p>
      <StyledHeadlineTwo>Services</StyledHeadlineTwo>
      <ServiceList />
    </>
  );
}

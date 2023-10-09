import Paragraph from "@/components/Layout/Paragraph";
import ServiceList from "../components/ServiceList/index";
import StyledHeadlineTwo from "@/components/Layout/StyledHeadlineTwo";
import ActionLink from "@/components/Layout/ActionLink";

export default function HomePage() {
  return (
    <>
      <Paragraph>
        Welcome! On this page, you will find a list of Hotel Tishjama&#x27;s
        bookable, luxury services! Enjoy your stay.
      </Paragraph>
      <ActionLink href="/SPD">Service Provider Dashboard</ActionLink>
      <ActionLink href="/MyBookings">My Bookings</ActionLink>
      <StyledHeadlineTwo>Services</StyledHeadlineTwo>
      <ServiceList />
    </>
  );
}

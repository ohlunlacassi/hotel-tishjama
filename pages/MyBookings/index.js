import MyBookingList from "@/components/MyBookings";
import ActionLink from "@/components/Layout/ActionLink";

export default function MyBookings({ user }) {
  return (
    <>
      <MyBookingList user={user} />
      <ActionLink href="/">← Services</ActionLink>
    </>
  );
}

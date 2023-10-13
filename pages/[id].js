import ServiceCard from "@/components/ServiceCard";
import { useRouter } from "next/router";
import Paragraph from "@/components/Layout/DescriptionText";
import ActionLink from "@/components/Layout/ActionLink";

export default function ServiceDetailsPage({ user }) {
  const router = useRouter();
  const { id } = router.query;

  const isBooked = user
    ? user.bookings.find((booking) => booking._id === id)
    : null;

  return (
    <>
      <ServiceCard id={id} user={user} isBooked={isBooked} />
      <br />
      {isBooked ? (
        <ActionLink href="/MyBookings">← My Bookings</ActionLink>
      ) : (
        <ActionLink href="/">← Services</ActionLink>
      )}
    </>
  );
}

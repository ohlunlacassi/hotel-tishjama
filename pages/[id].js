import ServiceCard from "@/components/ServiceCard";
import { useRouter } from "next/router";
import Link from "next/link";

export default function ServiceDetailsPage({ user }) {
  const router = useRouter();
  const { id } = router.query;
  function isBooked() {
    if (!user) {
      return;
    }
    return user.bookings.find((booking) => booking._id === id);
  }
  return (
    <>
      <p>Here are the details of the luxury service you selected.</p>
      <ServiceCard id={id} user={user} isBooked={isBooked} />

      {isBooked() ? (
        <Link href="/MyBookings">← My Bookings</Link>
      ) : (
        <Link href="/">← Services</Link>
      )}
    </>
  );
}

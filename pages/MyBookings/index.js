import MyBookingList from "@/components/MyBookings";
import Link from "next/link";

export default function MyBookings({ user }) {
  return (
    <>
      <MyBookingList user={user} />
      <Link href="/">← Services</Link>
    </>
  );
}

import MyBookingList from "@/components/MyBookings";
import Link from "next/link";

export default function MyBookings() {
  return (
    <>
      <MyBookingList />
      <Link href="/">← Services</Link>
    </>
  );
}

import MyBookingList from "@/components/MyBookings";
import Link from "next/link";

export default function MyBookings({ user }) {
  console.log("USER: ", user);
  return (
    <>
      <MyBookingList />
      <Link href="/">← Services</Link>
    </>
  );
}

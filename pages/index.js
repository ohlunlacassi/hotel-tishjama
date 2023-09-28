import ServiceList from "../components/ServiceList/index";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <p>
        Welcome! On this page, you will find a list of Hotel Tishjama&#x27;s
        bookable, luxury services! Enjoy your stay.
      </p>
      <Link href="/SPD">Service Provider Dashboard</Link>
      <h2>Services</h2>
      <ServiceList />
    </>
  );
}

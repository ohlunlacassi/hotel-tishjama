import Paragraph from "@/components/Layout/Paragraph";
import ServiceList from "../components/ServiceList/index";
import Link from "next/link";
import H2 from "@/components/Layout/H2";

export default function HomePage() {
  return (
    <>
      <Paragraph>
        Welcome! On this page, you will find a list of Hotel Tishjama&#x27;s
        bookable, luxury services!
        <br />
        Enjoy your stay.
      </Paragraph>
      <Link href="/SPD">Service Provider Dashboard</Link>
      <H2>Services</H2>
      <ServiceList />
    </>
  );
}

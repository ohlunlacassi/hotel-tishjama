import Paragraph from "@/components/Layout/Paragraph";
import ServiceList from "../components/ServiceList/index";
import H2 from "@/components/Layout/H2";
import ActionLink from "@/components/Layout/ActionLink";

export default function HomePage() {
  return (
    <>
      <Paragraph>
        Welcome! On this page, you will find a list of Hotel Tishjama&#x27;s
        bookable, luxury services!
        <br />
        Enjoy your stay.
      </Paragraph>
      <ActionLink href="/SPD">Service Provider Dashboard</ActionLink>
      <H2>Services</H2>
      <ServiceList />
    </>
  );
}

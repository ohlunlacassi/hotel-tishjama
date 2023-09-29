import useSWR from "swr";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Paragraph from "../Layout/Paragraph";
import H2 from "../Layout/H2";
import UnorderedList from "../Layout/UnorderedList";

export default function ServiceList({ context }) {
  const { data: services, isLoading, error } = useSWR("/api/services");

  if (isLoading) {
    return <H2>Loading...</H2>;
  }

  if (error) {
    return (
      <Paragraph>
        Our apologies, but we could not retrieve the list of our services.
        Please try again later.
      </Paragraph>
    );
  }

  if (services.length === 0) {
    return (
      <>
        <H2>Services</H2>
        <Paragraph>There are currently no services available.</Paragraph>
        <Paragraph>Please add a service!</Paragraph>
      </>
    );
  }
  return (
    <UnorderedList>
      {services.map((service) => (
        <li key={service._id}>
          <Link
            href={context === "SPD" ? `/SPD/${service._id}` : `/${service._id}`}
          >
            <Image
              src={service.image}
              width={100}
              height={100}
              alt={`picture of the ${service.name}`}
            />
            {service.name}
          </Link>
        </li>
      ))}
    </UnorderedList>
  );
}

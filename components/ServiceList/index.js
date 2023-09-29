import useSWR from "swr";
import Image from "next/image";
import StyledLink from "../Layout/StyledLink";
import React from "react";
import Paragraph from "../Layout/Paragraph";
import H2 from "../Layout/H2";
import UnorderedList from "../Layout/UnorderedList";
import ListItem from "../Layout/ListItem";
import TextSpan from "../Layout/TextSpan";

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
        <ListItem key={service._id}>
          <StyledLink
            href={context === "SPD" ? `/SPD/${service._id}` : `/${service._id}`}
          >
            <TextSpan>
              <Image
                src={service.image}
                width={100}
                height={100}
                alt={`picture of the ${service.name}`}
              />
            </TextSpan>
            <TextSpan>{service.name}</TextSpan>
          </StyledLink>
        </ListItem>
      ))}
    </UnorderedList>
  );
}

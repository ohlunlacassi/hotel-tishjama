import useSWR from "swr";
import StyledLink from "../Layout/StyledLink";
import React from "react";
import Paragraph from "../Layout/DescriptionText";
import StyledHeadlineTwo from "../Layout/StyledHeadlineTwo";
import UnorderedList from "../Layout/UnorderedList";
import ListItem from "../Layout/ListItem";
import TextSpan from "../Layout/TextSpan";
import StyledImage from "../Layout/StyledImage";

export default function ServiceList({ context }) {
  const { data: services, isLoading, error } = useSWR("/api/services");

  if (isLoading) {
    return <StyledHeadlineTwo>Loading...</StyledHeadlineTwo>;
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
        <StyledHeadlineTwo>Services</StyledHeadlineTwo>
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
              <StyledImage
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

import useSWR from "swr";
import React from "react";
import H2 from "../Layout/H2";
import ActionLink from "../Layout/ActionLink";
import Paragraph from "../Layout/Paragraph";
import UnorderedList from "../Layout/UnorderedList";
import ListItem from "../Layout/ListItem";
import StyledImage from "../Layout/StyledImage";
import StyledLink from "../Layout/StyledLink";

export default function MyBookingList({ context, user }) {
  const { data: bookedServices, error } = useSWR(
    user ? `/api/users/${user._id}/bookings` : null
  );

  if (error) {
    return (
      <>
        <H2>My Bookings</H2>
        <Paragraph>
          Our apologies, but we could not retrieve the list of our services.
        </Paragraph>
        <Paragraph>Please try again later.</Paragraph>
      </>
    );
  }

  if (!bookedServices || bookedServices.length === 0) {
    return (
      <>
        <H2>My Bookings</H2>
        <Paragraph>
          You have not yet booked any of our luxury services. To make a booking,
          please go to Services
        </Paragraph>
      </>
    );
  }
  return (
    <>
      <H2>My Bookings</H2>
      <UnorderedList>
        {bookedServices
          .sort((a, b) => new Date(a.date) - new Date(b.date))
          .map((service) => (
            <ListItem key={service._id}>
              <StyledLink
                href={
                  context === "SPD" ? `/SPD/${service._id}` : `/${service._id}`
                }
              >
                <StyledImage
                  src={service.image}
                  width={100}
                  height={100}
                  alt={`picture of the ${service.name}`}
                />
                {service.name}
                <br />
                {new Date(service.date).toISOString().split("T")[0]}
                {" @ "}
                {service.time}
              </StyledLink>
            </ListItem>
          ))}
      </UnorderedList>
    </>
  );
}

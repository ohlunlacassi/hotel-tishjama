import useSWR from "swr";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import useState from "react";

export default function MyBookingList({ context, user }) {
  const { data: bookedServices, error } = useSWR(
    user ? `/api/users/${user._id}/bookings` : null
  );

  if (error) {
    return (
      <>
        <h2>⭐️ My Bookings</h2>
        <p>
          Our apologies, but we could not retrieve the list of our services.
        </p>
        <p>Please try again later.</p>
      </>
    );
  }

  if (!bookedServices || bookedServices.length === 0) {
    return (
      <>
        <h2>⭐️ My Bookings</h2>
        <p>
          You have not yet booked any of our luxury services. To make a booking,
          please go to Services
        </p>
      </>
    );
  }
  return (
    <ul>
      {bookedServices
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .map((service) => (
          <li key={service._id}>
            <Link
              href={
                context === "SPD" ? `/SPD/${service._id}` : `/${service._id}`
              }
            >
              <Image
                src={service.image}
                width={100}
                height={100}
                alt={`picture of the ${service.name}`}
              />
              {service.name}
              {service.isBooked ? <span>⭐️</span> : null}
              {new Date(service.date).toISOString().split("T")[0]}
              {" @ "}
              {service.time}
            </Link>
          </li>
        ))}
    </ul>
  );
}

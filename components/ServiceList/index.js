import useSWR from "swr";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ServiceList() {
  const { data: services, isLoading, error } = useSWR("/api/services");

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return (
      <>
        <h2>Services</h2>
        <p>
          Our apologies, but we could not retrieve the list of our services.
        </p>
        <p>Please try again later.</p>
      </>
    );
  }

  return (
    <>
      <h2>Services</h2>
      <div>
        <Link href="/create">+ add service</Link>
      </div>
      <ul>
        {services.map((service) => (
          <li key={service._id}>
            <Image
              src={service.image}
              width={100}
              height={100}
              alt={`picture of the ${service.name}`}
            />
            {service.name}
          </li>
        ))}
      </ul>
    </>
  );
}

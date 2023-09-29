import Image from "next/image";
import useSWR from "swr";
import H2 from "../Layout/H2";
import StyledCard from "../Layout/StyledCard";

export default function ServiceCard({ id }) {
  const {
    data: service,
    isLoading,
    error,
  } = useSWR(id ? `/api/services/${id}` : null);

  if (isLoading || !service) {
    return <H2>Loading...</H2>;
  }

  if (error) {
    return (
      <H2>
        There was an error fetching the service details. Please try again.
      </H2>
    );
  }

  return (
    <>
      <H2>Service</H2>
      <StyledCard>
        <Image
          src={service.image}
          width={100}
          height={100}
          alt={`picture of the ${service.name}`}
        />
        <h3>{service.name}</h3>
        <p>{service.description}</p>
        <ul>
          <li>Date: {service.date}</li>
          <li>Time: {service.time}</li>
          <li>Price: {service.price} EUR</li>
        </ul>
      </StyledCard>
    </>
  );
}

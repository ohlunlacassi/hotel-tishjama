import StyledImage from "../Layout/StyledImage";
import useSWR from "swr";
import H2 from "../Layout/H2";
import StyledCard from "../Layout/StyledCard";
import Flex from "../Layout/Flex";

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
        <Flex>
          <StyledImage
            src={service.image}
            width={100}
            height={100}
            alt={`picture of the ${service.name}`}
          />
          <h3>{service.name}</h3>
        </Flex>

        <p>{service.description}</p>
        <ul>
          <li>Date: {new Date(service.date).toISOString().split("T")[0]}</li>
          <li>Time: {service.time}</li>
          <li>Price: {service.price} EUR</li>
        </ul>
      </StyledCard>
    </>
  );
}

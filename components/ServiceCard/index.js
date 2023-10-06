import StyledImage from "../Layout/StyledImage";
import useSWR, {mutate} from "swr";
import H2 from "../Layout/H2";
import StyledCard from "../Layout/StyledCard";
import Flex from "../Layout/Flex";
import { useRouter } from "next/router";

export default function ServiceCard({ id, user, isBooked }) {
  const router = useRouter();
  const {
    data: service,
    isLoading,
    error,
  } = useSWR(id ? `/api/services/${id}` : null);

  const handleBooking = async () => {
    if (isBooked) {
      const confirmation = window.confirm(
        "Are you sure you want to cancel this booking?"
      );
      if (confirmation) {
        await fetch(`/api/users/${user._id}/bookings`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ service_id: id }),
        });
        mutate(`/api/users/${user._id}/bookings`);
        mutate(`/api/users/${user._id}`);

        router.push("/MyBookings");
      }
    } else {
      await fetch(`/api/users/${user._id}/bookings`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ service_id: id }),
      });
      mutate(`/api/users/${user._id}/bookings`);
      mutate(`/api/users/${user._id}`);

      router.push("/MyBookings");
    }
  };

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
      {isBooked ? <H2>My Booking</H2> : <H2>Service</H2>}
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
      <button onClick={handleBooking}>
          {isBooked ? "Cancel Booking" : "Book this Service"}
        </button>
    </>
  );
}

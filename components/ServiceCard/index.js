import StyledImage from "../Layout/StyledImage";
import useSWR, { mutate } from "swr";
import StyledHeadlineTwo from "../Layout/StyledHeadlineTwo";
import StyledCard from "../Layout/StyledCard";
import Flex from "../Layout/Flex";
import { useRouter } from "next/router";
import Paragraph from "../Layout/DescriptionText";
import UnorderedList from "../Layout/UnorderedList";
import ActionButton from "../Layout/ActionButton";

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
    return <StyledHeadlineTwo>Loading...</StyledHeadlineTwo>;
  }

  if (error) {
    return (
      <StyledHeadlineTwo>
        There was an error fetching the service details. Please try again.
      </StyledHeadlineTwo>
    );
  }

  return (
    <>
      <StyledHeadlineTwo>
        {isBooked ? "My Booking" : "Service"}
      </StyledHeadlineTwo>
      <StyledCard>
        <Flex>
          <StyledImage
            src={service.image?.url}
            width={100}
            height={100}
            alt={`picture of the ${service.name}`}
          />
          <h3>{service.name}</h3>
        </Flex>
        <Paragraph>{service.description}</Paragraph>
        <UnorderedList>
          <li>
            Date: {new Date(service.date || null).toISOString().split("T")[0]}
          </li>
          <li>Time: {service.time}</li>
          <li>Price: {service.price} EUR</li>
        </UnorderedList>
        {user ? (
          user.email !== "service-manager@hotel-tishjama.com" ? (
            <ActionButton onClick={handleBooking}>
              {isBooked ? "Cancel Booking" : "Book this Service"}
            </ActionButton>
          ) : (
            <p>You must be logged in to book this service!</p>
          )
        ) : (
          <p>You must be logged in to book this service!</p>
        )}
      </StyledCard>
    </>
  );
}

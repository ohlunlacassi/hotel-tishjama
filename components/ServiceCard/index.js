import Image from "next/image";
import useSWR, { mutate } from "swr";
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
    return <h2>Loading...</h2>;
  }

  if (error) {
    return (
      <h2>
        There was an error fetching the service details. Please try again.
      </h2>
    );
  }

  return (
    <>
      {isBooked ? <h2>My Booking</h2> : <h2>Service</h2>}
      <article>
        <Image
          src={service.image}
          width={100}
          height={100}
          alt={`picture of the ${service.name}`}
        />
        <h3>{service.name}</h3>
        <p>{service.description}</p>
        <dl>
          <dt>Date:</dt>
          <dd>{service.date}</dd>
          <dt>Time:</dt>
          <dd>{service.time}</dd>
          <dt>Price:</dt>
          <dd>{service.price} €</dd>
        </dl>
        <button onClick={handleBooking}>
          {isBooked ? "Cancel Booking" : "Book this Service"}
        </button>
      </article>
    </>
  );
}

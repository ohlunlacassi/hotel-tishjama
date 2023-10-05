import Image from "next/image";
import useSWR, { mutate } from "swr";

export default function ServiceCard({ id, user }) {
  const {
    data: service,
    isLoading,
    error,
  } = useSWR(id ? `/api/services/${id}` : null);

  const handleBooking = async () => {
    await fetch(`/api/users/${user._id}/bookings`, {
      method: isBooked() ? "DELETE" : "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ service_id: id }),
    });
    mutate(`/api/users/${user._id}/bookings`);
    mutate(`/api/users/${user._id}`);
  };
  function isBooked() {
    if (!user) {
      return;
    }
    return user.bookings.find((b) => b._id === id);
  }

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
      <h2>Service</h2>
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
          {isBooked() ? "Service Booked" : "Book this Service"}
        </button>
      </article>
    </>
  );
}

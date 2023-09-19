import useSWR from "swr";
import Image from "next/image";

export default function ServiceList() {
  const { data, isLoading } = useSWR("/api/services");

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  console.log(data);

  if (!data) {
    return (
      <>
        <h2>Services</h2>
        <p>Our apologies, but we couldn't retrieve the list of our services.</p>
        <p>Please try again later.</p>
      </>
    );
  }

  return (
    <>
      <h2>Services</h2>
      <ul>
        {data.map((service) => (
          <li key={service._id}>
            <Image
              src={service.image}
              width={100}
              height={100}
              alt="picture of the service"
            />
            {service.name}
          </li>
        ))}
      </ul>
    </>
  );
}

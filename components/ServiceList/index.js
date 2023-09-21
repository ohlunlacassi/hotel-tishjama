import useSWR from "swr";
import Image from "next/image";
import Link from "next/link";

export default function ServiceList() {
  const { data, isLoading, error } = useSWR("/api/services");

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
      <ul>
        {data.map((service) => (
          <li key={service._id}>
            <Link href={`/${service._id}`}>
              <Image
                src={service.image}
                width={100}
                height={100}
                alt="picture of the service"
              />
              {service.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

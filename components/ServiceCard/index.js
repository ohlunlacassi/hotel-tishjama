import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import useSWR from "swr";

export default function ServiceCard() {
  const router = useRouter();
  const { id } = router.query;
  const { data: services, isLoading, error } = useSWR(`/api/services/${id}`);

  if (isLoading) {
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
          src={services.image}
          width={100}
          height={100}
          alt="picture of the service"
        />
        <h3>{services.name}</h3>
        <p>{services.description}</p>
        <dl>
          <dt>Date:</dt>
          <dd>{services.date}</dd>
          <dt>Time:</dt>
          <dd>{services.time}</dd>
          <dt>Price:</dt>
          <dd>{services.price} €</dd>
        </dl>
      </article>
      <Link href="/">← back</Link>
    </>
  );
}

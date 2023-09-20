import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import useSWR from "swr";

export default function ServiceCard() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, error } = useSWR(`/api/services/${id}`);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return;
  }

  return (
    <>
      <h2>Service</h2>
      <article>
        <Image
          src={data.image}
          width={100}
          height={100}
          alt="picture of the service"
        />
        <h3>{data.name}</h3>
        <p>{data.description}</p>
        <p>{data.date}</p>
        <p>{data.time}</p>
        <p>{data.price} €</p>
      </article>
      <Link href="/">← back</Link>
    </>
  );
}

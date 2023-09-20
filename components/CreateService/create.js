import ServiceForm from "../ServiceForm";
import Link from "next/link";

export default function AddServicePage() {
  return (
    <>
      <ServiceForm />
      <div>
        <Link href="/">
          <p>cancel</p>
        </Link>
      </div>
    </>
  );
}

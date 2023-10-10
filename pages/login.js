import useUser from "@/hooks/useUser";
import StyledHeadlineTwo from "@/components/Layout/StyledHeadlineTwo";
import ActionLink from "@/components/Layout/ActionLink";
import ActionButton from "@/components/Layout/ActionButton";

export default function LoginPage() {
  const { login } = useUser();

  function onSubmit(event) {
    event.preventDefault();
    login({
      email: event.target.email.value,
      roomNumber: event.target.roomNumber.value,
    });
  }
  return (
    <>
      <StyledHeadlineTwo>Log In</StyledHeadlineTwo>
      <form onSubmit={onSubmit}>
        <label>
          Email Address:
          <input name="email" type="email" required />
        </label>
        <label>
          Room Number:
          <input name="roomNumber" type="number" required />
        </label>
        <ActionButton>Log In</ActionButton>
      </form>
      <ActionLink href="/">← Services</ActionLink>
    </>
  );
}

import useUser from "@/hooks/useUser";
import StyledHeadlineTwo from "@/components/Layout/StyledHeadlineTwo";
import ActionLink from "@/components/Layout/ActionLink";
import ActionButton from "@/components/Layout/ActionButton";
import FormContainer from "@/components/Layout/Form/FormContainer";
import StyledInput from "@/components/Layout/StyledInput";

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
      <FormContainer onSubmit={onSubmit}>
        <label>
          Email Address:&nbsp;
          <StyledInput name="email" type="email" required />
        </label>
        <label>
          Room Number:&nbsp;
          <StyledInput size="10" name="roomNumber" type="number" required />
        </label>
        <ActionButton>Log In</ActionButton>
      </FormContainer>
      <br />
      <ActionLink href="/">← Services</ActionLink>
    </>
  );
}

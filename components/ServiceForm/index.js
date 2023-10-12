import ActionButton from "../Layout/ActionButton";
import FormContainer from "../Layout/Form/FormContainer";
import FormItem from "../Layout/Form/FormItem";
import StyledInput from "../Layout/StyledInput";

function formatDate(date) {
  if (date) {
    return new Date(date).toISOString().split("T")[0];
  }
  return new Date().toISOString().split("T")[0];
}

export default function ServiceForm({ onSubmit, service = {} }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmit(data);
  }

  return (
    <FormContainer onSubmit={handleSubmit} aria-label="ServiceForm">
      <FormItem>
        <label htmlFor="name">Service Name: </label>
        <StyledInput
          id="name"
          name="name"
          type="text"
          defaultValue={service.name}
          required
        />
      </FormItem>

      <FormItem>
        <label htmlFor="image">Image: </label>
        <input
          id="image"
          name="image"
          type="text"
          defaultValue={service.image}
        />
      </FormItem>

      <FormItem>
        <label htmlFor="description">Description: </label>
        <StyledInput
          as="textarea"
          id="description"
          name="description"
          cols="20"
          rows="4"
          defaultValue={service.description}
          required
        ></StyledInput>
      </FormItem>

      <FormItem>
        <label htmlFor="date">
          Date:{" "}
          <StyledInput
            id="date"
            name="date"
            type="date"
            defaultValue={formatDate(service.date)}
            required
          />
        </label>
      </FormItem>

      <label htmlFor="time">
        Time:{" "}
        <StyledInput
          id="time"
          name="time"
          type="time"
          defaultValue={service.time}
          required
        />
      </label>

      <label htmlFor="price">
        Price:{" "}
        <StyledInput
          size="9"
          id="price"
          name="price"
          type="number"
          defaultValue={service.price}
          required
        />
        <span> EUR</span>
      </label>

      <ActionButton type="submit">{service.name ? "Save" : "Add"}</ActionButton>
    </FormContainer>
  );
}

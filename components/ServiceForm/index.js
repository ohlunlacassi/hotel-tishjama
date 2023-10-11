import ActionButton from "../Layout/ActionButton";
import FormContainer from "../Layout/Form/FormContainer";
import FormItem from "../Layout/Form/FormItem";
import StyledImage from "../Layout/StyledImage";

function formatDate(date) {
  if (date) {
    return new Date(date).toISOString().split("T")[0];
  }
  return new Date().toISOString().split("T")[0];
}

export default function ServiceForm({ onSubmit, service = {} }) {
  function handleSubmit(event) {
    event.preventDefault();
    const file = event.target.image.files[0];
    const data = Object.fromEntries(new FormData(event.target));
    onSubmit(data, file);
  }

  return (
    <FormContainer onSubmit={handleSubmit} aria-label="ServiceForm">
      <FormItem>
        <label htmlFor="name">Service Name: </label>
        <input
          id="name"
          name="name"
          type="text"
          defaultValue={service.name}
          required
        />
      </FormItem>

      <FormItem>
        <label htmlFor="image">Image: </label>
        <input id="image " name="image" type="file" />
      </FormItem>

      <StyledImage
        src={service.image?.url}
        width={100}
        height={100}
        alt={`picture of the ${service.name}`}
      />

      <FormItem>
        <label htmlFor="description">Description: </label>
        <textarea
          id="description"
          name="description"
          cols="20"
          rows="4"
          defaultValue={service.description}
          required
        ></textarea>
      </FormItem>

      <label htmlFor="date">
        Date:{" "}
        <input
          id="date"
          name="date"
          type="date"
          defaultValue={formatDate(service.date)}
          required
        />
      </label>

      <label htmlFor="time">
        Time:{" "}
        <input
          id="time"
          name="time"
          type="time"
          defaultValue={service.time}
          required
        />
      </label>

      <label htmlFor="price">
        Price:{" "}
        <input
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

import ActionButton from "../Layout/ActionButton";
import FormContainer from "../Layout/Form/FormContainer";
import FormItem from "../Layout/Form/FormItem";
import StyledInput from "../Layout/StyledInput";
import StyledImage from "../Layout/StyledImage";
import { uploadImage } from "@/lib/api";

function formatDate(date) {
  if (date) {
    return new Date(date).toISOString().split("T")[0];
  }
  return new Date().toISOString().split("T")[0];
}

export default function ServiceForm({ onSubmit, service = {} }) {
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const image = await uploadImage(event.target.image.files[0]);
      const data = Object.fromEntries(new FormData(event.target));
      if (!data.image.name) {
        onSubmit(data, service.image);
      } else {
        onSubmit(data, image);
      }
    } catch (error) {
      alert("Error editing service");
    }
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
        {service.image && service.image.url && (
          <StyledImage
            src={
              service.image
                ? service.image?.url
                : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Groupofzombiesjoelf.jpg/220px-Groupofzombiesjoelf.jpg"
            }
            width={100}
            height={100}
            alt={`picture of the ${service.name}`}
          />
        )}
        <input id="image" name="image" type="file" />
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

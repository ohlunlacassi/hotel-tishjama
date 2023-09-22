export default function ServiceForm({ onSubmit, formName, service = {} }) {
  function handleAdd(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmit(data);
  }

  return (
    <>
      <h2>Add Service</h2>
      <form onSubmit={handleAdd} aria-labelledby={formName}>
        <p>
          <label htmlFor="name">Servie Name: </label>
          <input
            id="name"
            name="name"
            type="text"
            defaultValue={service.name}
            required
          ></input>
        </p>
        <p>
          <label htmlFor="image">Image: </label>
          <input
            id="image"
            name="image"
            type="text"
            defaultValue={service.image}
            required
          ></input>
        </p>
        <p>
          <label htmlFor="description">Description: </label>
          <textarea
            id="description"
            name="description"
            cols="20"
            rows="4"
            defaultValue={service.description}
            required
          ></textarea>
        </p>
        <p>
          <label htmlFor="date">Date: </label>
          <input
            id="date"
            name="date"
            type="date"
            defaultValue={service.date}
            required
          ></input>
        </p>
        <p>
          <label htmlFor="time">Time: </label>
          <input
            id="time"
            name="time"
            type="time"
            defaultValue={service.time}
            required
          ></input>
        </p>
        <p>
          <label htmlFor="price">Price: </label>
          <input
            id="price"
            name="price"
            type="number"
            defaultValue={service.price}
            required
          ></input>
          <span> EUR</span>
        </p>

        <button type="submit">{service.name ? "update service" : "add"}</button>
      </form>
    </>
  );
}

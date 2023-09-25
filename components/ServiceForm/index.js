export default function ServiceForm({ onSubmit }) {
  function handleAdd(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmit(data);
  }

  return (
    <>
      <h2>Add Service</h2>
      <form onSubmit={handleAdd} aria-label="ServiceForm">
        <label htmlFor="name">service Name: </label>
        <input id="name" name="name" type="text" required />

        <label htmlFor="image">Image: </label>
        <input id="image" name="image" type="text" required />

        <label htmlFor="description">Description: </label>
        <textarea
          id="description"
          name="description"
          cols="20"
          rows="4"
          required
        ></textarea>

        <label htmlFor="date">Date: </label>
        <input id="date" name="date" type="date" required />

        <label htmlFor="time">Time: </label>
        <input id="time" name="time" type="time" required />

        <label htmlFor="price">Price: </label>
        <input id="price" name="price" type="number" required />
        <span> EUR</span>

        <button type="submit">add</button>
      </form>
    </>
  );
}

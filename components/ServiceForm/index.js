import Link from "next/link";

export default function ServiceForm() {
  function handleAdd(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmit(data);
  }

  return (
    <>
      <h2>Add Service</h2>
      <form>
        <p>
          <label for="seviceName">Servie Name: </label>
          <input
            id="serviceName"
            name="serviceName"
            type="text"
            required
          ></input>
        </p>
        <p>
          <label for="image">Image: </label>
          <input id="image" name="image" type="text" required></input>
        </p>
        <p>
          <label for="description">Description: </label>
          <textarea
            id="description"
            name="text"
            cols="20"
            rows="4"
            required
          ></textarea>
        </p>
        <p>
          <label for="date">Date: </label>
          <input id="date" name="date" type="date" required></input>
        </p>
        <p>
          <label for="time">Time: </label>
          <input id="time" name="time" type="time" required></input>
        </p>
        <p>
          <label for="price">Price: </label>
          <input id="price" name="price" type="number" required></input> EUR
        </p>
        <div>
          <Link href="/">
            <p>cancel</p>
          </Link>
        </div>
        <button type="submit">add</button>
        <div></div>
      </form>
    </>
  );
}

import Link from "next/link";

export default function ServiceForm({ onSubmit, formName, defaultData }) {
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
          <label for="seviceName">Servie Name: </label>
          <input
            id="serviceName"
            name="serviceName"
            type="text"
            defaultValue={defaultData?.serviceName}
            required
          ></input>
        </p>
        <p>
          <label for="image">Image: </label>
          <input
            id="image"
            name="image"
            type="text"
            defaultValue={defaultData?.image}
            required
          ></input>
        </p>
        <p>
          <label for="description">Description: </label>
          <textarea
            id="description"
            name="text"
            cols="20"
            rows="4"
            defaultValue={defaultData?.description}
            required
          ></textarea>
        </p>
        <p>
          <label for="date">Date: </label>
          <input
            id="date"
            name="date"
            type="date"
            defaultValue={defaultData?.date}
            required
          ></input>
        </p>
        <p>
          <label for="time">Time: </label>
          <input
            id="time"
            name="time"
            type="time"
            defaultValue={defaultData?.time}
            required
          ></input>
        </p>
        <p>
          <label for="price">Price: </label>
          <input
            id="price"
            name="price"
            type="number"
            defaultValue={defaultData?.price}
            required
          ></input>
          <span> EUR</span>
        </p>
        <div>
          <Link href="/">
            <p>cancel</p>
          </Link>
        </div>
        <button type="submit">{defaultData ? "Update service" : "add"}</button>
        <div></div>
      </form>
    </>
  );
}

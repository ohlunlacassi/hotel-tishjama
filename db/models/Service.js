import mongoose from "mongoose";

const { Schema } = mongoose;

const serviceSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: date, required: true },
  time: { type: date, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
});

const Service =
  mongoose.models.Service || mongoose.model("Service", serviceSchema);

export default Service;

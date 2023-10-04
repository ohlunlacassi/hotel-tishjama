import mongoose from "mongoose";

const { Schema } = mongoose;

const serviceSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: false },
  isBooked: { type: Boolean, default: false },
});

const Service =
  mongoose.models.Service || mongoose.model("Service", serviceSchema);

export default Service;

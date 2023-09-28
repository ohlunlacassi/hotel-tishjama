import mongoose from "mongoose";

const { Schema } = mongoose;

const bookingSchema = new Schema({
  date: { type: Date, required: true },
  time: { type: String, required: true },
  service: {
    type: Schema.Types.ObjectId,
    ref: "Service",
    required: true,
  },
});

const Booking =
  mongoose.models.Booking || mongoose.model("Booking", bookingSchema);

export default Booking;

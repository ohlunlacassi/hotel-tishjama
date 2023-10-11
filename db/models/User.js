import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  email: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  roomNumber: { type: String, required: true },
  bookings: [
    {
      type: Schema.Types.ObjectId,
      ref: "Service",
    },
  ],
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;

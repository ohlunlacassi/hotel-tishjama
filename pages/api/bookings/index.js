import dbConnect from "../../../db/connect";
import Booking from "@/db/models/Booking";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const bookings = await Booking.find().populate("service");
    return response.status(200).json(bookings);
  }
}

import User from "@/db/models/User";

export default async function handler(request, response) {
  if (request.method === "GET") {
    const user = await User.findById(request.query.id)
      .populate("bookings")
      .exec();
    if (!user) {
      response.status(404).json({ message: "User Not Found" });
      return;
    }
    response.status(200).json(user.bookings);
    return;
  }
  if (request.method === "PUT") {
    const user = await User.findByIdAndUpdate(request.query.id, {
      $push: {
        bookings: request.body.service_id,
      },
    });
    response.status(200).json(user);
    return;
  }
  if (request.method === "DELETE") {
    const user = await User.findByIdAndUpdate(request.query.id, {
      $pull: {
        bookings: { $in: [request.body.service_id] },
      },
    });
    response.status(200).json(user);
    return;
  }
  response.status(405).json({ message: "Method Not Allowed" });
}

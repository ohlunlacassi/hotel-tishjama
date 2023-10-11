import dbConnect from "@/db/connect";
import User from "@/db/models/User";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "POST") {
    const user = await User.findOne({ email: request.body.email });
    if (!user) {
      response.status(400).json({ message: "Incorrect Credentials" });
      return;
    }
    if (request.body.roomNumber !== user.roomNumber) {
      response.status(400).json({ message: "Incorrect Credentials" });
      return;
    }
    return response.status(200).json(user);
  }
  response.status(405).json({ message: "Method Not Allowed" });
}

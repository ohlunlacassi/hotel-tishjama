import User from "@/db/models/User";

export default function handler(request, response) {
  if (request.method === "POST") {
    const user = User.findOne({ email: request.body.email });
    console.log("USER: ", user);
    if (!user) {
      response.status(400).json({ message: "Incorrect Credentials" });
      console.log("check:", user);
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

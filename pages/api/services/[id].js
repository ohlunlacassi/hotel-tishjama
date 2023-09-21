import dbConnect from "../../../db/connect";
import Service from "../../../db/models/Service";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;
  if (request.method === "GET") {
    const service = await Service.findById(id);
    if (!service) {
      return response.status(404).json({ status: "not found" });
    }
    response.status(200).json(service);
  }
}

import dbConnect from "../../../db/connect";
import Service from "../../../db/models/Service";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const service = await Service.findById(request.query.id);
    if (!service) {
      return response.status(404).json({ status: "not found" });
    }
    return response.status(200).json(service);
  }
  if (request.method === "PUT") {
    try {
      const service = await Service.findByIdAndUpdate(
        { _id: request.query.id },
        request.body,
        { new: true }
      );
      response.status(200).json(service);
    } catch (error) {
      response.status(500).json({ message: "Error editing service" });
    }
    return;
  }

  if (request.method === "DELETE") {
    try {
      const service = await Service.findOneAndDelete({ _id: request.query.id });
      return response.status(200).json(service);
    } catch (error) {
      console.log("DELETE /api/services/:id", error);
      return response.status(500).json({ message: "Error deleting service" });
    }
  }
  return response.status(405).json({ message: "Method not allowed" });
}

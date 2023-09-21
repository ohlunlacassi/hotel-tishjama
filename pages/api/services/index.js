import dbConnect from "../../../db/connect";
import Service from "../../../db/models/Service";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const services = await Service.find();
    return response.status(200).json(services);
  }
  if (request.method === "POST") {
    try {
      const serviceData = request.body;
      const service = new Service(serviceData);
      await service.save();
      return response.status(201).json({ status: "Service created." });
    } catch (error) {
      console.error(error);
      return response.status(400).json({ error: error.message });
    }
  }
}

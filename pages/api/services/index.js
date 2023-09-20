import dbConnect from "../../../db/connect";
import Service from "../../../db/models/Service";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const services = await Service.find();
    return response.status(200).json(services);
  }
}

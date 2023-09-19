import dbConnect from "../../../db/connect";
import Service from "../../../db/models/Service";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const services = await Service.find();
    console.log(services);
    return response.status(200).json(services);
  }
}

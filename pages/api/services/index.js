import dbConnect from "../../../db/connect";
import Service from "../../../db/models/Service";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

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
      return response
        .status(201)
        .json({ message: "Service added successfully", alert: BasicAlerts() });
    } catch (error) {
      console.error(error);
      return response.status(400).json({ error: error.message });
    }
  }
}

export function BasicAlerts() {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="success">Service added successfully!</Alert>
    </Stack>
  );
}

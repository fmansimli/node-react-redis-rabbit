import { createLog } from "../services/errors";
import { join } from "path";

export function get404(req, res, next) {
  //res.status(404).json({ message: "Not Found..." });
  res.sendFile(join(__dirname, "../", "build", "index.html"));
}

export async function handleError(err, req, res, next) {
  try {
    await createLog({
      title: err.name,
      message: err.message,
      url: req.originalUrl,
    });
    res.status(500).json();
  } catch (error) {
    res.status(500).json();
  }
}

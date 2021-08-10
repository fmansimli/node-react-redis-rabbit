import Log from "../models/log";

export function get404(req, res, next) {
  res.status(404).json({ message: "Not Found..." });
}

export async function handleError(err, req, res, next) {
  try {
    await Log.create({
      title: err.name,
      message: err.message,
      url: req.originalUrl,
    });
    res.status(500).json();
  } catch (error) {
    res.status(500).json();
  }
}

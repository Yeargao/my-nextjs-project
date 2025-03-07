//後

import * as XLSX from "xlsx";
import path from "path";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const { id } = req.query;
    if (!id) {
      return res.status(400).json({ error: "Missing ID parameter" });
    }

    const filePath = path.join(process.cwd(), "public", "uploads", "kr4.xlsx");
    const workbook = XLSX.readFile(filePath);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];

    const nn = JSON.parse(decodeURIComponent(id));
    const aa = nn.map((cell) => (worksheet[cell] ? worksheet[cell].v : null));

    res.status(200).json(aa);
  } catch (error) {
    console.error("Error processing Excel:", error);
    res.status(500).json({ error: "Failed to process Excel file" });
  }
}



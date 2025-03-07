import * as XLSX from "xlsx";
import fs from "fs";

export function parseExcel(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      throw new Error("Excel file not found");
    }

    // 讀取 Excel 檔案
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0]; // 取得第一個工作表
    const sheet = workbook.Sheets[sheetName];
    return XLSX.utils.sheet_to_json(sheet); // 轉成 JSON
  } catch (error) {
    console.error("Error parsing Excel:", error);
    return null;
  }
}

import express from "express";
import fs from "fs";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 4000;

// Middleware для обработки JSON
app.use(express.json());
app.use(cors());

// Эндпоинт для сохранения данных в файл
app.post("/save-form", (req, res) => {
  const formData = req.body;

  // Генерация имени файла с текущей датой и временем
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const fileName = `form_${timestamp}.json`;
  const filePath = path.join(__dirname, "saved_forms", fileName);

  // Создаем папку, если она не существует
  fs.mkdirSync(path.join(__dirname, "saved_forms"), { recursive: true });

  // Сохраняем данные в файл
  fs.writeFile(filePath, JSON.stringify(formData, null, 2), (err) => {
    if (err) {
      console.error("Ошибка при сохранении данных:", err);
      return res.status(500).json({ error: "Failed to save form data" });
    }

    console.log(`Данные успешно сохранены в файл: ${fileName}`);
    res.status(200).json({ message: "Form data saved successfully", fileName });
  });
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});

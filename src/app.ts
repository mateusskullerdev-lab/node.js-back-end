import express, {
  type Request,
  type Response,
  type Application,
} from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("API funcionando via app.ts!");
});

export default app; // Exportamos a instância configurada

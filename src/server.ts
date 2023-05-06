import express from "express";
import cors from "cors";
import { handleError } from "./errors/handleError";
import { sessionRoutes } from "./routes/session.routes";
import { userRoutes } from "./routes/users.routes";
import { customerRoutes } from "./routes/customers.routes";
import { contactsRoutes } from "./routes/contacts.routes";
import "dotenv/config";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/login", sessionRoutes);
app.use("/users", userRoutes);
app.use("/customers", customerRoutes);
app.use("/contacts", contactsRoutes);

app.use(handleError);

const PORT = process.env.PORT ? Number(process.env.PORT) : 3333;

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});

export default app;

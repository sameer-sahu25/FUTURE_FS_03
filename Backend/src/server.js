import app from "./app.js";
import { env } from "./config/env.js";

app.listen(env.port, () => {
  // eslint-disable-next-line no-console
  console.log(`Backend running on http://localhost:${env.port}`);
});

// Keep process alive
setInterval(() => {}, 1000);

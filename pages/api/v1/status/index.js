import database from "../../../../infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 3+6;");
  console.log(result);
  response.status(200).json({ status: "OK" });
}

export default status;

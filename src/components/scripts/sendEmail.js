import { MAIN_URL } from "./routes";

const sendEmail = async ({ name = "", email = "", message = "" }) => {
  const body = new FormData();
  body.append("name", name);
  body.append("email", email);
  body.append("message", message);
  const URL = MAIN_URL + "mail";
  const DATA = { method: "POST", body };

  const request = await fetch(URL, DATA);
  const response = await request.text();
  return response;
};

export default sendEmail;

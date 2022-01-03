import { MAIN_URL } from "./routes";

const insertUser = async ({ body }) => {
  let BODY = new FormData(body);
  const URL = MAIN_URL + "login/insert";
  const DATA = { method: "POST", body: BODY };
  const request = await fetch(URL, DATA);
  const response = await request.text();
  console.log(response);
};

const loginUser = async ({ body }) => {
  let BODY = new FormData(body);
  const URL = MAIN_URL + "login/insert";
  const DATA = { method: "POST", body: BODY };
  const request = await fetch(URL, DATA);
  const response = await request.text();
  console.log(response);
};

export { insertUser, loginUser };

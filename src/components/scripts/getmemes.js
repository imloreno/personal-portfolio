const getMemes = async () => {
  const URL =
    "https://api.humorapi.com/jokes/random/?api-key=d0d04ec4176440aa8316507415648c38";
  const DATA = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const request = await fetch(URL, DATA);
  const response = await request.text();
  console.log(response);
};

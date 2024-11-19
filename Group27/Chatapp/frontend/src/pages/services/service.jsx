const baseUrl = "http://localhost:4000/api/v1";
export const postRequest = async (url, body) => {
  const response = await fetch(`${baseUrl}/${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
    credentials: "include",
  });
};

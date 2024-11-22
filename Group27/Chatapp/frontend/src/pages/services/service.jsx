export const baseurl = "http://localhost:3003/api/v1";
export const postRequest = async (url, body = null) => {
  console.log(">>>>");
  const response = await fetch(`${baseurl}/${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include", // Important to include cookies
    body: body ? body : null,
  });
  const data = await response.json();
  console.log("data:");
  console.log(response);
  if (!response.ok) {
    let message;
    if (data?.message) {
      message = data.message;
    } else {
      message = data;
    }
    return { error: true, message };
  }
  return data;
};

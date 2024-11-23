const baseUrl = "http://localhost:3003/api/v1";
const postRequest = async (url, body = null, token = null) => {
  console.log("This is post req fun");
  const response = await fetch(`${baseUrl}/${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
      Authorization: token ? `Bearer ${token}` : undefined,
    },
    body: body ? body : null,
    credentials: "include",
  });
  const data = await response.json();
  console.log(response);
  console.log("****");
  console.log(data);

  if (!response.ok) {
    let message;
    if (data?.message) {
      message = data.message;
    } else {
      message = "Something went wrong";
    }
    return { error: true, message };
  }
  return data;
};
export default postRequest;

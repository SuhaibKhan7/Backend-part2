const baseUrl = "http://localhost:3003/api/v1";
const postRequest = async (url, body) => {
  const response = await fetch(`${baseUrl}/${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
    credentials: "include",
  });
  const data = await response.json();
  if (!response.ok) {
    let message;
    if (data?.message) {
      message = data.message;
    } else {
      message = "Something went wrong";
    }
    return { error: true, message}
    //content of message
  }
  return data;
  //user details
};

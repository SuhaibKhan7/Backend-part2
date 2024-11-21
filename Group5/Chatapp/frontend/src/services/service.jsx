const baseUrl = "http://localhost:3003/api/v1";

export const postRequest = async (url, body = null) => {
  console.log(url);
  console.log(body);
  try {
    const response = await fetch(`${baseUrl}/${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: body ? JSON.stringify(body) : null,
      credentials: "include",
    });
    const data = await response.json();
    console.log(data);
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
  } catch (error) {
    console.error(error);
  }
};
const getRequest = async (url) => {
  const response = await fetch(`${baseUrl}/${url}`);
  const data = await response.json();
  console.log(data);
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

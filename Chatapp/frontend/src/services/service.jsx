const baseUrl = "http://localhost:3003/api/v1";
export const postRequest = async (url, body) => {
  console.log(url);
  console.log(body);
  try {
    const response = await fetch(`${baseUrl}/${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(body),
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

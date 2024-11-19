const baseUrl = "http://localhost:4000/api/v1";
export const postRequest = async (url, body) => {
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
    if (!response.ok) {
      let message;
      message = data.mesage;
    }
  } catch (error) {}
};

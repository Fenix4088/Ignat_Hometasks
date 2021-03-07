export const RequestAPI = {
  getData(value: boolean) {
    return fetch("https://neko-cafe-back.herokuapp.com/auth/test", {
      method: "POST",
      body: JSON.stringify({
        success: value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
};
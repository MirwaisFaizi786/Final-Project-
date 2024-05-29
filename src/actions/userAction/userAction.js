"use server";

export default async function getNormalUserDetails() {
  let response = await fecth("http://localhost:8084/api/v1/users/normalUsers", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  let data = await response.json();
  console.log(data.data);
  return data;
}

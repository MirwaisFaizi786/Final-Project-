export default async function getTours() {
  "use server";

  try {
    const response = await fetch("http://localhost:8084/api/v1/tours");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getTourId(id) {
  "use server";
  try {
    const response = await fetch(`http://localhost:8084/api/v1/tours/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

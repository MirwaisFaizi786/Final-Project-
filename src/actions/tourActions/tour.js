"use server";

export default async function getTours() {
  try {
    const response = await fetch("http://localhost:8084/api/v1/tours");
    const data = await response.json();
    return console.log(data), data;
  } catch (error) {
    console.log(error);
  }
}

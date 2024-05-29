export default async function getTours() {
  "use server";
  try {
    const response = await fetch("http://localhost:8084/api/v1/tours", {
      cache: "no-store",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function searchData(value) {
  
  try {
    const res = await fetch(`/api/v1/tours/search/${value}`, { method: "GET" });
    if (res.status === 200) {
      const json = await res.json();
      console.log(json);
      return json;
    }
  } catch (err) {
    console.log(err);
  }
}

export async function getTourId(id) {
  "use server";
  try {
    const response = await fetch(`http://localhost:8084/api/v1/tours/${id}`, {
      cache: "no-store",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

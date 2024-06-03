import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export default async function fetchToursData() {
  "use server";
  try {
    const response = await fetch("http://localhost:8084/api/v1/tours", {
      cache: "no-store",
    });

    return response.json();
  } catch (error) {

    // Handle different types of errors appropriately
    if (error instanceof SyntaxError) {
      // JSON parsing error
      return {
        status: 500,
        message: 'Internal server error. Please try again later.',
      };
    } else if (error instanceof TypeError) {
      // Network error or fetch failed
      return {
        status: 503,
        message: 'Service unavailable. Please check your network connection and try again.',
      };
    } else {
      // Other types of errors
      return {
        status: 400,
        message: (error).message || 'An unknown error occurred. Please try again.',
      };
    }
  }
}
export async function getTourById(id) {
  "use server";
  try {
    const response = await fetch(`http://localhost:8084/api/v1/tours/${id}`, {
      cache: "no-store",
    });
    revalidatePath("/tour");
    return response.json();
  }  catch (error) {

    // Handle different types of errors appropriately
    if (error instanceof SyntaxError) {
      // JSON parsing error
      return {
        status: 500,
        message: 'Internal server error. Please try again later.',
      };
    } else if (error instanceof TypeError) {
      // Network error or fetch failed
      return {
        status: 503,
        message: 'Service unavailable. Please check your network connection and try again.',
      };
    } else {
      // Other types of errors
      return {
        status: 400,
        message: (error).message || 'An unknown error occurred. Please try again.',
      };
    }
  }
}

export async function insertTour(file) {
  "use server";

  try {
    let headersList = {
      Accept: "*/*",
      Authorization: `Bearer ${cookies().get("jwt")?.value}`,
    };

    let response = await fetch("http://localhost:8084/api/v1/tours", {
      method: "POST",
      body: file,
      headers: headersList,
    });

    let data = await response.json();
    revalidatePath("/tourRegistry");

    console.log(
      "data form tour insert =================================",
      data
    );
    revalidatePath("/tourRegistry");
    return data;
  }  catch (error) {

    // Handle different types of errors appropriately
    if (error instanceof SyntaxError) {
      // JSON parsing error
      return {
        status: 500,
        message: 'Internal server error. Please try again later.',
      };
    } else if (error instanceof TypeError) {
      // Network error or fetch failed
      return {
        status: 503,
        message: 'Service unavailable. Please check your network connection and try again.',
      };
    } else {
      // Other types of errors
      return {
        status: 400,
        message: (error).message || 'An unknown error occurred. Please try again.',
      };
    }
  }
}

export async function deleteTour(id) {
  "use server";

  try {
    const response = await fetch(`http://localhost:8084/api/v1/tours/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookies().get("jwt")?.value}`,
      },
    });

    revalidatePath("/tourRegistry");
  }  catch (error) {

    // Handle different types of errors appropriately
    if (error instanceof SyntaxError) {
      // JSON parsing error
      return {
        status: 500,
        message: 'Internal server error. Please try again later.',
      };
    } else if (error instanceof TypeError) {
      // Network error or fetch failed
      return {
        status: 503,
        message: 'Service unavailable. Please check your network connection and try again.',
      };
    } else {
      // Other types of errors
      return {
        status: 400,
        message: (error).message || 'An unknown error occurred. Please try again.',
      };
    }
  }
}

export async function searchTours(search) {
  "use server";
  try {
      let response = await fetch("http://localhost:8084/api/v1/tours/searchForTour?startLocation=" + search + "", {
          method: "GET",
      });
      let data = await response.json();
      // console.log("data form tour search =================================", data.data.tours);

      return data.data.tours;
  }  catch (error) {

    // Handle different types of errors appropriately
    if (error instanceof SyntaxError) {
      // JSON parsing error
      return {
        status: 500,
        message: 'Internal server error. Please try again later.',
      };
    } else if (error instanceof TypeError) {
      // Network error or fetch failed
      return {
        status: 503,
        message: 'Service unavailable. Please check your network connection and try again.',
      };
    } else {
      // Other types of errors
      return {
        status: 400,
        message: (error).message || 'An unknown error occurred. Please try again.',
      };
    }
  }
}

export async function updateTour(file, id) {
  "use server";
  try {
    let headersList = {
      Accept: "*/*",
      Authorization: `Bearer ${cookies().get("jwt")?.value}`,
    };
    let response = await fetch(`http://localhost:8084/api/v1/tours/${id}`, {
      method: "PUT",
      body: file,
      headers: headersList,
    });
    let data = await response.json();
    revalidatePath("/tourRegistry");
    return data;
  } catch (error) {

    // Handle different types of errors appropriately
    if (error instanceof SyntaxError) {
      // JSON parsing error
      return {
        status: 500,
        message: 'Internal server error. Please try again later.',
      };
    } else if (error instanceof TypeError) {
      // Network error or fetch failed
      return {
        status: 503,
        message: 'Service unavailable. Please check your network connection and try again.',
      };
    } else {
      // Other types of errors
      return {
        status: 400,
        message: (error).message || 'An unknown error occurred. Please try again.',
      };
    }
  }
}
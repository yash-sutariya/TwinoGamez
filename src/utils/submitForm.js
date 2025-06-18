import Swal from "sweetalert2";
import { publicAxiosInstance } from "../js/config/api";

// export async function submitForm(event) {
//   event.preventDefault();
//   const formData = new FormData(event.target);

//   // Convert FormData to a more readable format for logging
//   const formEntries = {};
//   for (const [key, value] of formData.entries()) {
//     formEntries[key] = value;
//   }

//   // If 'slot' field is present, append it to 'messages' field in the next line
//   if (formEntries["services"]) {
//     formEntries[
//       "messages"
//     ] = `${formEntries["messages"]}\nSlot: ${formEntries["services"]}`;
//   }

//   try {
//     const response = await publicAxiosInstance.post(
//       "/contact-inquiry",
//       new URLSearchParams(formEntries).toString(),
//       {
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//         },
//       }
//     );

//     if (response.status === 201) {
//       Swal.fire({
//         icon: "success",
//         title: "Thanks you for contacting us",
//         text: "We will contact you soon.",
//       });
//       event.target.reset();
//       // Close the modal if it's open
//       if (typeof $ !== "undefined" && $("#myModal").length) {
//         $("#myModal").modal("hide");
//       }
//     } else {
//       Swal.fire({
//         icon: "error",
//         title: "Invalid Details",
//         text: "Please enter valid details.",
//       });
//     }
//   } catch (error) {
//     Swal.fire({
//       icon: "error",
//       title: "An error occurred while sending your message",
//     });
//     console.error(error);
//   }
// }

export const submitForm = async (
  name,
  email,
  mobile,
  subject,
  message,
  source
) => {
  try {
    if (!name || !email || !mobile || !message || !subject) {
      throw new Error("Missing required field");
    }

    // Validate Email
    let emailRegex =
      /(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    email = String(email).toLowerCase().trim();

    if (!email.match(emailRegex) || email.match(emailRegex)[0] !== email) {
      throw new Error("Invalid Email");
    }

    if (!source) {
      source = window.location.origin + window.location.pathname;
    }

    let payload = {
      name,
      email: email.match(emailRegex)[0],
      mobile,
      message,
      subject,
      source,
    };

    const response = await publicAxiosInstance.post(
      `/contact-inquiry`,
      payload
    );

    if (!response.data.response === "OK") {
      const error = await response.data;
      throw new Error(error.message || "Something went wrong!");
    }

    $("[id^=txt_contact]").val(null);

    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Thanks you for contacting us. We will get back to you soon.",
    });
  } catch (error) {
    console.error(error);

    Swal.fire({
      icon: "error",
      title: "Error",
      text: error.message || "Something went wrong!",
    });
  }
};

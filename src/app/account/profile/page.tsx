"use client";
// eslint-disable-next-line @next/next/no-img-element

import React, { useEffect, useState } from "react";
import "../../../css/gcs.css";
import "../../../css/media.css";
import Header from "@/app/header/Header";
import Footer from "@/app/footer/Footer";
import Swal from "sweetalert2";
import { axiosInstance } from "@/js/config/api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AccountProfile() {
  const [updateData, setUpdateData] = useState<any>({
    user_id: "",
    email: "",
    mobile: "",
    first_name: "",
    last_name: "",
  });

  const http_getProfile = async () => {
    try {
      const storedUserInfo = localStorage.getItem("user_info");
      if (storedUserInfo) {
        const response = JSON.parse(storedUserInfo);
        const setData = {
          user_id: response._id,
          email: response.email,
          mobile: response.mobile,
          first_name: response.first_name,
          last_name: response.lastName,
        };
        setUpdateData(setData);
        validateUserInfo(setData); // Validate the user info when loading the profile
      } else {
        console.warn("No user info found");
      }
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  const validateUserInfo = (userData: any) => {
    if (String(userData.first_name).toUpperCase().trim() === "GCS") {
      toast.warning("Please Update Your Profile - Missing First Name", {
        autoClose: 5000,
      });
    }

    if (!userData.email) {
      toast.warning("Please Update Your Email - Missing Email", {
        autoClose: 5000,
      });
    }

    if (String(userData.lastName).toUpperCase().trim() === "GCS") {
      toast.warning("Please Update Your Profile - Missing Last Name", {
        autoClose: 5000,
      });
    }
  };

  const handleInputChange = (e: any) => {
    const { id, value } = e.target;
    setUpdateData((prevData: any) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleUpdate = async () => {
    try {
      const response = await axiosInstance.post(
        `/gcs/update?id=${updateData.user_id}`,
        {
          email: updateData.email,
          first_name: updateData.first_name,
          last_name: updateData.last_name,
        }
      );

      if (response.status === 200) {
        localStorage.setItem("user_info", JSON.stringify(response.data.user));
        Swal.fire({
          title: "User details updated successfully!",
          icon: "success",
        });
      } else {
        console.error("Unexpected response status:", response.status);
        Swal.fire({
          title: "There was an issue updating your details.",
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Error in handleUpdate:", error);
      Swal.fire("Error", "An error occurred while updating your details.");
    }
  };

  useEffect(() => {
    http_getProfile();
  }, []);

  return (
    <>
      <Header
        logoURL={"/images/logos/gcs-logo-white.png"}
        mobileLogoURL={"/images/logos/fitit-logo.png"}
        altLogo={"Fitit Logo"}
      />
      <section style={{ marginTop: "100px", marginBottom: "100px" }}>
        <div className="container-fluid">
          <div className="container">
            <div className="takshak-title">
              <h1>
                <span>Profile</span>
              </h1>
            </div>
            <div className="row">
              <div className="col-md-6 hd">
                <p className="mb-1 mt-4">User ID:</p>
                <input
                  type="text"
                  className="form-control p-3"
                  style={{ borderRadius: "50px" }}
                  id="user_id"
                  value={updateData.user_id}
                  onChange={handleInputChange}
                  readOnly
                />
              </div>
              <div className="col-md-6 hd">
                <p className="mb-1 mt-4">Mobile No.</p>
                <input
                  type="number"
                  className="form-control p-3"
                  style={{ borderRadius: "50px" }}
                  placeholder="Enter Mobile Number"
                  id="mobile"
                  value={updateData.mobile}
                  onChange={handleInputChange}
                  readOnly
                />
              </div>
              <div className="col-md-6 hd">
                <p className="mb-1 mt-4">First Name</p>
                <input
                  type="text"
                  className="form-control p-3 in-put"
                  placeholder="Enter First Name"
                  id="first_name"
                  value={updateData.first_name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-6 hd">
                <p className="mb-1 mt-4">Last Name</p>
                <input
                  type="text"
                  className="form-control p-3 in-put"
                  placeholder="Enter Last Name"
                  id="last_name"
                  value={updateData.last_name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-6 hd">
                <p className="mb-1 mt-4">Email Address</p>
                <input
                  type="email"
                  className="form-control p-3 in-put"
                  placeholder="Enter Email Name"
                  id="email"
                  value={updateData.email}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="free d-inline-block mt-4">
              <button className="submit-btn" onClick={handleUpdate}>
                Update Details
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <ToastContainer />
    </>
  );
}

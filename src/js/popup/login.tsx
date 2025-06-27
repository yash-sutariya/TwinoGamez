// eslint-disable-next-line @next/next/no-img-element
import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import "react-toastify/dist/ReactToastify.css";
import { axiosInstance } from "../config/api";
import "../../../src/css/style.css";
import "../../../src/css/media.css";
import Swal from "sweetalert2";

const LoginModal = () => {
  const [showModal, setShowModal] = useState(true);
  const [otpDialogOpen, setOtpDialogOpen] = useState(false);
  const [otpCode, setOtpCode] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const handleClose = () => {
    setShowModal(false);
  };

  const handleLogin = async () => {
    try {
      await axiosInstance.post("/account/authorization", {
        mobile: mobileNumber,
      });
      Swal.fire({
        title: "OTP has been sent successfully on your mobile",
        icon: "success",
      });
      setShowModal(false);
      handleOtpPopupOpen();
    } catch (error) {
      Swal.fire({
        title: "Failed to send OTP. Please try again.",
        icon: "error",
      });
      console.error("Error in handleLogin:", error);
    }
  };

  const handleOtpSubmit = async () => {
    try {
      const response: any = await axiosInstance.post(
        "/account/mobile-verification",
        {
          mobile: mobileNumber,
          otp: otpCode,
        }
      );

      if (response.status === 200) {
        localStorage.setItem("GCS_user_authorization", response.data.token);
        localStorage.setItem("user_info", JSON.stringify(response.data.user));

        setOtpDialogOpen(false);
        Swal.fire("Success", "Successfully Login!");
        window.location.reload();
      } else {
        console.error("Unexpected response status:", response.status);
      }
    } catch (error) {
      console.error("Error in handleOtpSubmit:", error);
    }
  };

  const handleOtpPopupOpen = () => {
    setOtpDialogOpen(true);
  };

  const handleCloseOtpModal = () => {
    setOtpDialogOpen(false);
  };

  return (
    <>
      {/* Login Popup  */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header
          closeButton
          className="border-0 black-form py-0"
          style={{ backgroundColor: "#121212" }}
        >
          <div className="d-flex justify-content-center">
            <img
              src="/images/mix-img/login.png"
              className="img-fluid ml-2"
              width="50%"
              alt="Login IMG"
            />
          </div>
        </Modal.Header>
        <Modal.Body
          style={{ backgroundColor: "#121212" }}
          className="black-form"
        >
          <div
            className="page_modal slide-page_modal"
            style={{ width: "100%!important" }}
          >
            <Form onSubmit={(e) => e.preventDefault()}>
              <Form.Group
                controlId="formBasicUsername"
                className="mb-4 text-center"
              >
                <h4>
                  <div
                    className="label_modal text-center mb-3"
                    id="lbl_modal_login"
                  >
                    OTP Verification
                  </div>
                </h4>
                <input
                  type="mobile"
                  className="in-put"
                  style={{ height: "80%" }}
                  placeholder="Enter mobile number"
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
              </Form.Group>
              <button
                type="button"
                style={{ width: "100%", margin: "0" }}
                className="submit-btn"
                onClick={handleLogin}
              >
                Log In
              </button>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
      {/* Otp Popup  */}
      <Modal show={otpDialogOpen} onHide={handleCloseOtpModal} centered>
        <Modal.Header
          closeButton
          className="border-0 black-form py-0"
          style={{ backgroundColor: "#121212" }}
        >
          <div className="d-flex justify-content-center">
            <img
              src="/images/mix-img/login.png"
              className="img-fluid ml-2"
              width="50%"
              alt="Login IMG"
            />
          </div>
        </Modal.Header>
        <Modal.Body
          style={{ backgroundColor: "#121212" }}
          className="black-form"
        >
          <div
            className="page_modal slide-page_modal"
            style={{ width: "100%!important" }}
          >
            <Form onSubmit={(e) => e.preventDefault()}>
              <Form.Group
                controlId="formBasicUsername"
                className="mb-4 text-center"
              >
                <h4>
                  <div
                    className="label_modal text-center mb-3"
                    id="lbl_modal_login"
                  >
                    Enter OTP here
                  </div>
                </h4>
                <input
                  type="text"
                  placeholder="Enter OTP Here"
                  name="otpCode"
                  className="in-put"
                  style={{ height: "80%" }}
                  value={otpCode}
                  onChange={(e) => setOtpCode(e.target.value)}
                />
              </Form.Group>
              <button
                type="button"
                style={{ width: "100%", margin: "0" }}
                className="submit-btn"
                onClick={handleOtpSubmit}
              >
                Verify Code
              </button>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LoginModal;

import { fgiitAxiosInstance } from "@/js/config/api";
import React, { useState, useEffect, FC } from "react";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChatbotLoginModal = ({ onClose }) => {
  const [showModal, setShowModal] = useState(true);
  const [otpDialogOpen, setOtpDialogOpen] = useState(false);
  const [otpCode, setOtpCode] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const handleClose = () => {
    setShowModal(false);
    onClose();
  };

  const getUserData = async () => {
    try {
      const response = await fgiitAxiosInstance.get("/account/profile");
      localStorage.setItem("user_info", JSON.stringify(response.data.data));
    } catch (error) {
      console.error("Error in handleAgreeAndConfirm:", error);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await fgiitAxiosInstance.post("/account/authorization", {
        mobile: mobileNumber,
      });

      if (response.data && response.data.data && response.data.data.OTP) {
        setOtpCode(response.data.data.OTP);
        setShowModal(false);
        handleOtpPopupOpen();
        toast.success("OTP Sent on your mobile number.");
      } else if (response.data && response.data.data) {
        setShowModal(false);
        handleOtpPopupOpen();
        toast.success("OTP Sent on your mobile number.");
      } else {
        toast.error("Failed to send OTP. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to send OTP. Please try again.");
      console.error("Error in handleLogin:", error);
    }
  };

  const handleOtpSubmit = async () => {
    try {
      const response = await fgiitAxiosInstance.post(
        "/account/authorization/verify",
        {
          mobile: mobileNumber,
          otp: otpCode,
        }
      );

      if (response.status === 200) {
        localStorage.setItem(
          "fg_group_user_authorization",
          response.data.data.authorization
        );
        await getUserData();
        setOtpDialogOpen(false);
        toast.success("Successfully Login!");
      } else {
        toast.error("Failed to verify OTP. Please try again.");
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

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      {/* Login Popup  */}
      <Modal
        show={showModal}
        onHide={handleClose}
        centered
        className="text-dark"
      >
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

export default ChatbotLoginModal;

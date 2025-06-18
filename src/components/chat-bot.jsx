import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import heic2any from "heic2any";
import { axiosInstance, fgiitAxiosInstance } from "@/js/config/api";
import ChatbotLoginModal from "./login";
import LoginModal from "@/js/popup/login";

function ChatBotComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loading, setLoading] = useState(null);
  const [botMessages, setBotMessages] = useState([]);
  const [userChoice, setUserChoice] = useState(null);
  const [loadingMessages, setLoadingMessages] = useState([]);
  const chatBoxRef = useRef(null);
  const [userData, setUserData] = useState("");

  const [formInputs, setFormInputs] = useState({
    first_name: "",
    last_name: "",
    mobile: "",
    email: "",
    issue: "",
  });
  const [thankYouMessageVisible, setThankYouMessageVisible] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormInputs((prev) => ({ ...prev, [name]: value }));
  };

  const closeModal = () => setShowLoginModal(false);

  const handleInputFileChange = async (event) => {
    setLoading(true);
    const file = event.target.files[0];
    if (!file) {
      toast.error("No file selected.");
      return;
    }

    let uploadFile = file;
    let previewUrl = URL.createObjectURL(file);

    if (
      file.type === "image/heic" ||
      file.name.toLowerCase().endsWith(".heic")
    ) {
      try {
        const jpgBlob = await heic2any({ blob: file, toType: "image/jpeg" });
        const jpgName = file.name.replace(/\.heic$/i, ".jpg");
        uploadFile = new File([jpgBlob], jpgName, { type: "image/jpeg" });
        previewUrl = URL.createObjectURL(uploadFile);
      } catch (conversionError) {
        console.error("Failed to convert HEIC to JPG", conversionError);
        toast.error("Failed to convert HEIC to JPG.");
        return;
      }
    } else if (
      file.type === "image/webp" ||
      file.name.toLowerCase().endsWith(".webp")
    ) {
      try {
        const canvas = document.createElement("canvas");
        const img = new Image();
        img.src = URL.createObjectURL(file);

        await new Promise((resolve) => (img.onload = resolve));

        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        const jpgBlob = await new Promise((resolve) =>
          canvas.toBlob(resolve, "image/jpeg", 0.8)
        );

        const jpgName = file.name.replace(/\.webp$/i, ".jpg");
        uploadFile = new File([jpgBlob], jpgName, { type: "image/jpeg" });
        previewUrl = URL.createObjectURL(uploadFile);
      } catch (conversionError) {
        console.error("Failed to convert WEBP to JPG", conversionError);
        toast.error("Failed to convert WEBP to JPG.");
        return;
      }
    }

    const formDataForUpload = new FormData();
    formDataForUpload.append("files", uploadFile);

    const imagePreviewElement = document.getElementById("image-preview");
    if (imagePreviewElement) {
      imagePreviewElement.src = previewUrl;
    }

    try {
      const response = await axiosInstance.post(
        "/file-upload",
        formDataForUpload
      );
      const photoUrl = response.data.data.fileURLs[0];

      setFormInputs((prevData) => ({
        ...prevData,
        complaint_media: "https://files.fggroup.in/" + photoUrl,
      }));
    } catch (error) {
      console.error("Upload failed", error);
      toast.error("Upload failed: " + error?.response?.data?.message);
    }
    setLoading(false);
  };

  const openChatBot = () => {
    setIsOpen(true);
    setUserChoice(null);
    setThankYouMessageVisible(false);
    setFormSubmitted(true);
  };

  const openChatBotMobile = () => {
    openChatBot()
  };

  const closeChatBot = () => setIsOpen(false);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const response = await fgiitAxiosInstance.get("/account/profile");
    const responseData = response.data.data.user._id;

    setUserData(responseData);
    setFormInputs({
      first_name: response.data.data.user.first_name,
      last_name: response.data.data.user.last_name,
      mobile: response.data.data.user.mobile,
      email: response.data.data.user.email,
    });
  };

  const startBot = () => {
    setLoadingMessages([true]);
    setTimeout(() => {
      setBotMessages([{ content: "Hi, I'm Gautam Jani! 👋" }]);
      setLoadingMessages([false]);
    }, 1500);

    // setLoadingMessages((prev) => [...prev, true]);
    // setTimeout(() => {
    //   setBotMessages((prevMessages) => [
    //     ...prevMessages,
    //     { content: "We are the Health and wellness experts." },
    //   ]);
    //   setLoadingMessages((prev) => [...prev, false]);
    // }, 2500);

    setTimeout(() => {
      setBotMessages((prevMessages) => [
        ...prevMessages,
        {
          content: "",
          action: {
            type: "button",
            options: [
              {
                text: "Want to concert about your a fitness?",
                value: "issue1",
              },
            ],
          },
        },
      ]);
      setLoadingMessages((prev) => [...prev, false]);
    }, 3000);
    setTimeout(() => {
      setBotMessages((prevMessages) => [
        ...prevMessages,
        {
          content: "",
          action: {
            type: "button",
            options: [
              {
                text: "Want to become health coach?",
                value: "issue2",
              },
            ],
          },
        },
      ]);
      setLoadingMessages((prev) => [...prev, false]);
    }, 3500);
  };

  useEffect(() => {
    if (isOpen) {
      startBot();
    }
  }, [isOpen]);

  const handleUserChoice = async (choice) => {
    const selectChoice =
      choice === "issue1"
        ? "Want to concert about your a fitness?"
        : choice === "issue2"
        ? "Want to become health coach?"
        : choice;

    setBotMessages((prevMessages) =>
      prevMessages
        .filter((message) => !message.action)
        .concat({
          content:
            choice === "issue1"
              ? "Want to concert about your a fitness?"
              : choice === "issue2"
              ? "Want to become health coach?"
              : choice,
          isUser: true,
        })
    );

    setTimeout(() => {
      setBotMessages((prevMessages) => [
        ...prevMessages,
        {
          content: "Fill the below details. Describe your issue.",
        },
      ]);
    }, 1000);

    setTimeout(() => {
      setUserChoice(choice);
    }, 1500);
  };

  const handleCreateComplaint = async (selectChoice) => {
    const isLogin = localStorage.getItem("fg_group_user_authorization");
    if (!isLogin) {
      setShowLoginModal(true);
    } else {
      const selectChoiceData =
        selectChoice === "issue1"
          ? "Want to concert about your a fitness?"
          : selectChoice === "issue2"
          ? "Want to become health coach?"
          : selectChoice;

      const payload = {
        complaint: selectChoiceData,
        message: formInputs.issue,
        company_name: "gcs",
        user_id: userData,
        complaint_media: formInputs.complaint_media,
      };

      const result = await fgiitAxiosInstance.post(
        "/complaint-chatbot/create",
        payload
      );

      if (result && result.data) {
        setFormSubmitted(false);
        setThankYouMessageVisible(true);
      }
    }
  };

  const TypingLoader = () => (
    <div style={{ display: "flex", marginLeft: "10px" }}>
      <div className="dot" style={dotStyle}></div>
      <div className="dot" style={dotStyle}></div>
      <div className="dot" style={dotStyle}></div>
    </div>
  );

  const dotStyle = {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "#ccc",
    margin: "0 2px",
    animation: "dot-blink 1.5s infinite",
  };

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `@keyframes dot-blink { 0% { opacity: 0.3; } 50% { opacity: 1; } 100% { opacity: 0.3; } }`;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [botMessages, userChoice]);

  useEffect(() => {
    if (thankYouMessageVisible && chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [thankYouMessageVisible]);

  return (
    <div>
      {showLoginModal && <ChatbotLoginModal onClose={closeModal} />}
      {/* {showLoginModal && <LoginModal onClose={closeModal} />} */}

      {isOpen ? (
        <button
          onClick={closeChatBot}
          className="chat-bot down-icon"
          aria-label="Close ChatBot"
        >
          <i className="fa fa-chevron-down"></i>
        </button>
      ) : (
        <>
          <button
            onClick={openChatBot}
            className="chat-bot d-none d-md-block"
            aria-label="Open ChatBot"
          >
            <i className="fa fa-headset"></i>
          </button>
          <button
            onClick={openChatBotMobile}
            className="chat-bot d-block d-md-none"
            aria-label="Open ChatBot"
          >
            <i className="fa fa-headset"></i>
          </button>
        </>
      )}

      {isOpen && (
        <div className="chat-bot-main text-dark">
          <div className="handle chatbot-header">
            <h4 className="chatbot-h4 text-dark">
              Resolve Your Concerns here
              <FontAwesomeIcon
                icon={faClose}
                onClick={closeChatBot}
                className="close-icon"
              />
            </h4>
          </div>
          <div
            style={{
              overflowY: "auto",
              height: "80%",
              padding: "0px 20px",
            }}
            ref={chatBoxRef}
          >
            {botMessages.map((message, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "10px",
                  padding: message?.action?.type === "button" ? "" : "7px 13px",
                  borderRadius: "15px",
                  marginLeft: message.isUser ? "68px" : "0px",
                  width: message.isUser ? "80%" : "80%",
                  color: message.isUser ? "#fff" : "#595a5a",
                  backgroundColor: message.isUser
                    ? ""
                    : message?.action?.type === "button"
                    ? ""
                    : "#ebebeb",
                  textAlign: message.isUser ? "left" : "left",
                  display: message.isUser ? "flex" : "flex",
                  justifyContent: message.isUser ? "end" : "start",
                }}
              >
                {message.isUser ? (
                  <p className="chat-message-content">{message.content}</p>
                ) : (
                  <p className="chat-message">{message.content}</p>
                )}
                {loadingMessages[index] && <TypingLoader />}
                {message.action && (
                  <div>
                    {message.action.options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleUserChoice(option.value)}
                        className="complaint-action-message option-button"
                      >
                        {option.text}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {userChoice && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleCreateComplaint(userChoice);
                }}
                className="chatbot-form"
              >
                <div className="d-flex">
                  <input
                    type="text"
                    placeholder="First Name"
                    name="first_name"
                    value={formInputs.first_name}
                    onChange={handleInputChange}
                    required
                    className="form-control py-2 chatbot-input-placeholder"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="last_name"
                    value={formInputs.last_name}
                    onChange={handleInputChange}
                    required
                    className="form-control py-2"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Mobile"
                    name="mobile"
                    value={formInputs.mobile}
                    onChange={handleInputChange}
                    required
                    className="form-control my-3 py-2"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formInputs.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    required
                    className="form-control my-3 py-2"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Describe your issue in detail"
                    name="issue"
                    value={formInputs.issue}
                    onChange={handleInputChange}
                    disabled={formSubmitted ? false : true}
                    required
                    className="form-control mt-3 mb-2 py-2"
                  />
                </div>
                <div>
                  <span>Complaint Image:</span>
                  <input
                    type="file"
                    name="complaint_media"
                    onChange={handleInputFileChange}
                    placeholder="Complaint Image"
                    className="form-control mb-3 mt-1 pt-2 image-padding"
                  />
                </div>
                {formSubmitted && (
                  <button
                    type="submit"
                    className={`${
                      loading ? "chatbot-submit-btn-load" : "chatbot-submit-btn"
                    }`}
                    disabled={loading ? true : false}
                  >
                    Submit
                  </button>
                )}
              </form>
            )}
            {thankYouMessageVisible && (
              <div className="chatbot-thanks-message">
                <div className="chatbot-margin-right">
                  <p>
                    Thank you, your complaint will be resolved in under 24-48
                    hours.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {loading && (
        <div className="loader-background">
          <div class="spinner-box">
            <div class="three-quarter-spinner"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatBotComponent;

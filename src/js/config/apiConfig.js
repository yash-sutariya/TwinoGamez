let hostname = "";
let baseUrl = "https://api.gcsconsultant.com";
let fgiitBaseUrl = "https://api.fggroup.in";
let razorpayMerchantId = "rzp_test_F0TUZmabOwKkhe";
if (typeof window !== "undefined") {
  hostname = window.location.hostname.trim();
  if (
    hostname === "gcsconsultant.fggroup.in" ||
    hostname === "www.gcsconsultant.fggroup.in"
  ) {
    baseUrl = "https://api.gcsconsultant.com";
    fgiitBaseUrl = "https://api.fggroup.in";
    razorpayMerchantId = "rzp_live_tdfTCMm8C9gJNN";
  } else if (hostname === "test.gcsconsultant.com") {
    baseUrl = "https://dev-api.gcsconsultant.com";
    fgiitBaseUrl = "https://dev-api.fggroup.in";
  } else {
    baseUrl = "https://dev-api.gcsconsultant.com";
    fgiitBaseUrl = "https://dev-api.fggroup.in";
    // fgiitBaseUrl = "http://localhost";
  }
}

const apiConfig = {
  BASE_URL: baseUrl,
  FGIIT_BASE_URL: fgiitBaseUrl,
  RAZORPAY_MERCHANT_ID: razorpayMerchantId,
};

export default apiConfig;

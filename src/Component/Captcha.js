import React, { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Captcha = () => {
  const recaptchaRef = useRef(null);

  const handleRecaptchaChange = async () => {
    console.log("Captcha value:");
    const token = await recaptchaRef.current.getRecaptchaToken();
    if (token) {
      // The user successfully completed the challenge
      // Send the token to your server for verification
    } else {
      // The user failed the challenge
    }
  };

  return (
    <>
      <ReCAPTCHA
        sitekey={"6LetUsIlAAAAAOSxTNhQA7tHjPoMtWUOtu8JnQku"}
        onChange={handleRecaptchaChange}
        ref={recaptchaRef}
      />
    </>
  );
};

export default Captcha;

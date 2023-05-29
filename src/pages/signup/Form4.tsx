import { useNavigate } from "react-router-dom";
import React, { useState, useRef } from "react";


function Form4() {
    const [otp, setOTP] = useState<string[]>(Array(5).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;

    if (!isNaN(Number(value))) {
      setOTP((prevOTP) => {
        const newOTP = [...prevOTP];
        newOTP[index] = value;
        return newOTP;
      });

      // Move focus to the next input field
      if (value !== "" && index < otp.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text/plain");

    if (/^\d+$/.test(pasteData)) {
      setOTP((prevOTP) => {
        const newOTP = [...prevOTP];
        for (let i = 0; i < newOTP.length; i++) {
          if (pasteData[i]) {
            newOTP[i] = pasteData[i];
          }
        }
        return newOTP;
      });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

    const router = useNavigate();

    const handleVerification = () => {
      router("/login");
    };

  return (
    <div className="text-center">
        <div className="mt-[44px] mb-3" style={{fontWeight:'bold', fontSize:'32px'}}>
            Account Authentication
        </div>

    <div className="text-gray-500 mb-3" style={{fontWeight:'bold'}}>
    Kindly enter the One Time Password (OTP) that was sent to the phone number or email address used for registration
    </div>
    <div className="gap-[12px] mt-[44px] flex">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(ref) => (inputRefs.current[index] = ref)}
            type="text"
            className="border rounded-full px-4 py-2 text-center w-10 h-10 md:w-[95px] md:h-[95px]"
            maxLength={1}
            style={{border:'1px solid #9A9BA0'}}
            value={digit}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={handlePaste}
          />
        ))}
      </div>
    </div>
  );
}

export default Form4;

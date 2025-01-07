import React from "react";
import image from '../assets/merch.png';

const TShirtAdvert = () => {
  return (
    <div className="flex flex-col md:flex-row items-center border-2 border-blue-500 rounded-lg shadow-lg mx-auto mt-4 max-w-6xl">
      {/* Image Section */}
      <div className="flex-1 flex justify-center items-center">
        <div className="text-center p-4 rounded-lg">
          <img
            src={image}
            alt="T-shirt"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      {/* Text and Button Section */}
      <div className="flex-1 p-4 flex flex-col justify-center items-center text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
          I WANT IT!
        </h2>
        <button
          className="gap-2 text-white font-bold py-3 px-6 rounded-lg transform hover:bg-blue-600 transition-all flex items-center"
          onClick={() =>
            window.open(
              'https://docs.google.com/forms/d/e/1FAIpQLSdILChTCM5I0G5QbkwEM4iuEZUNohFfprpD-f8olae83sbjpw/viewform',
              '_blank'
            )
          }
          style={{
            backgroundColor: "var(--Udgam-Blue, #225088)",
            borderRadius: "12px",
            color: "var(--Udgam-White, #F4F5F6)",
            fontFamily: "PP Mori",
            fontSize: "30px",
            fontWeight: "600",
            lineHeight: "normal",
            textTransform: "capitalize",
          }}
        >
          BUY NOW
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            className="ml-2"
          >
            <path
              d="M28 3.41559L24.5906 0L4.865 0.178914L0 5.05279L19.6351 4.96454L0.051017 24.5844L3.46039 28L23.1108 8.31372L23.0228 27.9846L27.8881 23.1105L28 3.41559Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TShirtAdvert;

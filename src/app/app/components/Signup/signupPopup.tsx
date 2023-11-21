import React, { useEffect, useState } from 'react';
import {PopupProps} from "../../utils/interfaces";



const SignupPopup = ({ isVisible, errorMessage }: PopupProps) => {

  const isError = !!errorMessage;

  return (
    <>
    {isVisible && (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center" id="my-modal">
        <div className="m-4 p-5 border w-96 shadow-lg rounded-md bg-white">
          <div className="text-center">
            <div className={`mx-auto flex items-center justify-center h-12 w-12 rounded-full ${isError ? 'bg-red-100' : 'bg-green-100'}`}>
              {/* Check icon or Error icon */}
              {isError ? (
                <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">{isError ? 'Error Occurred' : 'Welcome to Pigeion!!'}</h3>
            <div className="mt-2 px-7 py-3">
              <p className="text-sm text-gray-500">
                {isError ? errorMessage : 'Registration has been completed!'}
              </p>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  );
};

export default SignupPopup;

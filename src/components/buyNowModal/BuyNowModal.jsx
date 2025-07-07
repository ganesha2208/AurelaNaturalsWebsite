/* eslint-disable react/prop-types */
import { Button, Dialog, DialogBody } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// All districts of Maharashtra with sample pincodes
const stateDistrictPincode = {
  Maharashtra: {
    Ahmednagar: "414001",
    Akola: "444001",
    Amravati: "444602",
    Aurangabad: "431001",
    Beed: "431122",
    Bhandara: "441904",
    Buldhana: "443001",
    Chandrapur: "442401",
    Dhule: "424001",
    Gadchiroli: "442605",
    Gondia: "441601",
    Hingoli: "431513",
    Jalgaon: "425001",
    Jalna: "431203",
    Kolhapur: "416003",
    Latur: "413512",
    Mumbai: "400001",
    Nagpur: "440001",
    Nanded: "431601",
    Nandurbar: "425412",
    Nashik: "422001",
    Osmanabad: "413501",
    Palghar: "401404",
    Parbhani: "431401",
    Pune: "411001",
    Raigad: "402201",
    Ratnagiri: "415612",
    Sangli: "416416",
    Satara: "415001",
    Sindhudurg: "416812",
    Solapur: "413001",
    Thane: "400601",
    Wardha: "442001",
    Washim: "444505",
    Yavatmal: "445001",
  },
};

const BuyNowModal = ({ addressInfo, setAddressInfo, buyNowFunction }) => {
  const [open, setOpen] = useState(false);
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [mobileError, setMobileError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Get user data from localStorage
    const user = JSON.parse(localStorage.getItem("users"));
    if (user && user.name && user.name !== user.phoneNumber) {
      // Update addressInfo with user's name and email
      setAddressInfo((prevState) => ({
        ...prevState,
        name: user.name || "",
        email: user.email || "",
      }));
    }
  }, []); // Empty dependency array means this runs once when component mounts

  // When state or district changes, update pincode
  useEffect(() => {
    if (selectedState && selectedDistrict) {
      const pin = stateDistrictPincode[selectedState]?.[selectedDistrict] || "";
      setAddressInfo((prev) => ({ ...prev, pincode: pin }));
    }
  }, [selectedState, selectedDistrict]);

  const handleOpen = () => {
    const user = JSON.parse(localStorage.getItem("users"));
    if (!user) {
      navigate("/login");
    } else {
      setOpen(!open);
    }
  };

  // Mobile number validation
  const validateMobile = (value) => {
    const regex = /^[0-9]{10}$/;
    if (!regex.test(value)) {
      setMobileError("Mobile number must be exactly 10 digits");
    } else {
      setMobileError("");
    }
  };

  const handleBuyNow = () => {
    const formData = new URLSearchParams({
      name: addressInfo.name,
      state: "Maharashtra",
      district: selectedDistrict,
      pincode: addressInfo.pincode,
      address: addressInfo.address,
      mobileNumber: addressInfo.mobileNumber,
    }).toString();

    fetch(
      "https://script.google.com/macros/s/AKfycbxOUO4Osq-9lggKoQaypgeEjv-VBAJtRQj9S03djxlJCnfsJsZtpK6trM3rpl0j-mz4/exec",
      {
        method: "POST",
        body: formData,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    )
      .then((res) => res.text())
      .then((data) => {
        alert("Order placed successfully!");
        // Optionally clear form or close modal here
      })
      .catch((err) => {
        alert("There was an error placing your order.");
      });
  };

  return (
    <>
      <Button
        type="button"
        onClick={handleOpen}
        className="w-full px-4 py-3 text-center text-white bg-primary hover:bg-primary-600 border border-transparent rounded-xl shadow-md font-semibold transition-colors duration-200"
      >
        Buy now
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
        style={{ backdropFilter: "blur(2px)" }}
      >
        <div className="flex items-center justify-center min-h-screen w-full">
          <DialogBody className="p-8 rounded-2xl bg-white shadow-2xl max-w-md w-full mx-auto">
            <h2 className="text-2xl font-bold text-primary-700 mb-6 text-center">
              Quick Checkout
            </h2>
            <div className="mb-4">
              <input
                type="text"
                name="name"
                value={addressInfo.name}
                onChange={(e) => {
                  setAddressInfo({
                    ...addressInfo,
                    name: e.target.value,
                  });
                }}
                placeholder="Enter your name"
                className="bg-primary-50 border border-primary-200 px-3 py-2 w-full rounded-lg outline-none text-primary-700 placeholder-primary-300 focus:ring-2 focus:ring-primary-400 transition-all duration-150"
              />
            </div>
            {/* State Dropdown */}
            <div className="mb-4">
              <select
                value={selectedState}
                onChange={(e) => {
                  setSelectedState(e.target.value);
                  setSelectedDistrict("");
                }}
                className="bg-primary-50 border border-primary-200 px-3 py-2 w-full rounded-lg outline-none text-primary-700 focus:ring-2 focus:ring-primary-400 transition-all duration-150"
              >
                <option value="">Select State</option>
                {Object.keys(stateDistrictPincode).map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
            {/* District Dropdown */}
            <div className="mb-4">
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                disabled={!selectedState}
                className="bg-primary-50 border border-primary-200 px-3 py-2 w-full rounded-lg outline-none text-primary-700 focus:ring-2 focus:ring-primary-400 transition-all duration-150 disabled:bg-gray-100"
              >
                <option value="">
                  {selectedState ? "Select District" : "Select State First"}
                </option>
                {selectedState &&
                  Object.keys(stateDistrictPincode[selectedState]).map(
                    (dist) => (
                      <option key={dist} value={dist}>
                        {dist}
                      </option>
                    )
                  )}
              </select>
            </div>
            {/* Pincode (auto) */}
            <div className="mb-4">
              <input
                type="text"
                name="pincode"
                value={addressInfo.pincode}
                readOnly
                placeholder="Pincode will be auto-filled"
                className="bg-primary-50 border border-primary-200 px-3 py-2 w-full rounded-lg outline-none text-primary-700 placeholder-primary-300 focus:ring-2 focus:ring-primary-400 transition-all duration-150 read-only:bg-gray-100"
              />
            </div>
            {/* Address */}
            <div className="mb-6">
              <input
                type="text"
                name="address"
                value={addressInfo.address}
                onChange={(e) => {
                  setAddressInfo({
                    ...addressInfo,
                    address: e.target.value,
                  });
                }}
                placeholder="Enter your address"
                className="bg-primary-50 border border-primary-200 px-3 py-2 w-full rounded-lg outline-none text-primary-700 placeholder-primary-300 focus:ring-2 focus:ring-primary-400 transition-all duration-150"
              />
            </div>
            <div className="mb-6">
              <input
                type="text"
                name="mobileNumber"
                value={addressInfo.mobileNumber}
                onChange={(e) => {
                  setAddressInfo({
                    ...addressInfo,
                    mobileNumber: e.target.value,
                  });
                  validateMobile(e.target.value);
                }}
                placeholder="Enter your mobile number"
                className={`bg-primary-50 border border-primary-200 px-3 py-2 w-full rounded-lg outline-none text-primary-700 placeholder-primary-300 focus:ring-2 focus:ring-primary-400 transition-all duration-150 ${
                  mobileError ? "border-red-500" : ""
                }`}
                maxLength={10}
              />
              {mobileError && (
                <p className="text-red-500 text-xs mt-1">{mobileError}</p>
              )}
            </div>
            <Button
              type="button"
              onClick={() => {
                handleOpen();
                handleBuyNow();
              }}
              className="w-full px-4 py-3 text-center text-white bg-primary hover:bg-primary-700 rounded-lg shadow font-semibold text-lg transition-colors duration-200"
              disabled={!!mobileError || !addressInfo.mobileNumber}
            >
              Buy now
            </Button>
          </DialogBody>
        </div>
      </Dialog>
    </>
  );
};

export default BuyNowModal;

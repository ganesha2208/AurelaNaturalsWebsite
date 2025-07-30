import React, { useState } from "react";
import { submitOrder } from "../utils/googleSheetAPI";
import ConfirmationModal from "./ConfirmationModal";

const OrderForm = ({ productName }) => {
  const [addressInfo, setAddressInfo] = useState({
    name: "",
    address: "",
    pincode: "",
    mobileNumber: "",
  });

  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalInfo, setModalInfo] = useState({ visible: false, message: "", isError: false });

  const districts = [
    "Pune",
    "Mumbai",
    "Nagpur",
    "Thane",
    "Nashik",
    "Aurangabad",
    "Solapur",
    // Add more districts if needed
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddressInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !addressInfo.name ||
      !addressInfo.address ||
      !addressInfo.pincode ||
      !addressInfo.mobileNumber ||
      !selectedDistrict
    ) {
      setModalInfo({ visible: true, message: "Please complete all fields.", isError: true });
      return;
    }

    setIsSubmitting(true);
    const formData = {
      name: addressInfo.name,
      state: "Maharashtra",
      district: selectedDistrict,
      pincode: addressInfo.pincode,
      address: addressInfo.address,
      mobileNumber: addressInfo.mobileNumber,
      product: productName,
    };

    try {
      await submitOrder(formData);
      setModalInfo({ visible: true, message: "Order placed successfully!", isError: false });
      setAddressInfo({ name: "", address: "", pincode: "", mobileNumber: "" });
      setSelectedDistrict("");
    } catch (err) {
      setModalInfo({
        visible: true,
        message: "There was an error placing your order.",
        isError: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <h3 className="text-2xl font-semibold mb-4">Order: {productName}</h3>

        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={addressInfo.name}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Address</label>
          <textarea
            name="address"
            value={addressInfo.address}
            onChange={handleChange}
            className="w-full border rounded p-2"
            rows="3"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">District</label>
          <select
            value={selectedDistrict}
            onChange={(e) => setSelectedDistrict(e.target.value)}
            className="w-full border rounded p-2"
            required
          >
            <option value="">Select District</option>
            {districts.map((dist) => (
              <option key={dist} value={dist}>
                {dist}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Pincode</label>
          <input
            type="text"
            name="pincode"
            value={addressInfo.pincode}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Mobile Number</label>
          <input
            type="tel"
            name="mobileNumber"
            value={addressInfo.mobileNumber}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
            pattern="[0-9]{10}"
            maxLength={10}
            placeholder="10-digit mobile number"
          />
        </div>

        <button
          type="submit"
          className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Placing Order..." : "Place Order"}
        </button>
      </form>

      {modalInfo.visible && (
        <ConfirmationModal
          message={modalInfo.message}
          isError={modalInfo.isError}
          onClose={() => setModalInfo({ visible: false })}
        />
      )}
    </>
  );
};

export default OrderForm;

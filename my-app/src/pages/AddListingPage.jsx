import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function AddListingPage({ addListing }) {
  const navigate = useNavigate(); // ← tu jest poprawne użycie hooka

  const [formData, setFormData] = useState({
    itemName: "",
    price: "",
    exchangeAddress: "",
    description: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, photo: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    console.log("addListing typeof:", typeof addListing);
    console.log("addListing:", addListing);
    e.preventDefault();

    const newListing = {
      itemName: formData.itemName,
      price: formData.price,
      exchangeAddress: formData.exchangeAddress,
      description: formData.description,
      photo: formData.photo ? URL.createObjectURL(formData.photo) : null,
    };

    console.log("Nowy listing:", newListing); 

    //TUTAJ ZROBIC DODAWANIE OGLOSZENIA DO BAZY DANYCHs

    navigate("/listings");
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-2xl mx-auto p-4 mt-6 bg-[#242424] rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Add information about your listing
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Item Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Item name</label>
            <input
              type="text"
              name="itemName"
              value={formData.itemName}
              onChange={handleChange}
              className="w-full p-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium mb-1">Price</label>
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full p-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Exchange Address */}
          <div>
            <label className="block text-sm font-medium mb-1">Exchange address</label>
            <input
              type="text"
              name="exchangeAddress"
              value={formData.exchangeAddress}
              onChange={handleChange}
              className="w-full p-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="w-full p-2 rounded-2xl border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          {/* Photo */}
          <div>
            <label className="block text-sm font-medium mb-1">Photo</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full p-3 rounded-2xl border border-dashed border-gray-400 text-gray-700 cursor-pointer bg-gray-100"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#D9D9D9] text-black py-2 rounded-full font-semibold hover:bg-gray-300 transition"
          >
            Add Listing
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddListingPage;

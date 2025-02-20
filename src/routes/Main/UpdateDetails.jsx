import { useState } from "react";

const UpdateDetails = ({ employee, handleUpdate, setShowModal }) => {
  const [formData, setFormData] = useState({ ...employee });

  const handleCancel = () => {
    setShowModal((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate(formData);
    setShowModal((prev) => !prev);
  };
  return (
    <div className="max-w-3xl max-h-[60%] text-white top-0 bottom-0 left-0 right-0 fixed bg-black bg-opacity-20 border rounded-xl shadow-md flex items-center text-center m-auto">
      <div className="w-full h-[80%] flex flex-col justify-between items-center px-2 my-4 gap-2">
        <h2 className="text-2xl font-bold">Update Details</h2>
        <form
          onSubmit={handleSubmit}
          className="w-xl h-[80%] flex flex-col gap-2"
        >
          <div className="flex items-center text-center">
            <label
              htmlFor="name"
              className="block w-1/2 text-lg font-medium text-left"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData?.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Please enter your name"
              className="flex-1 rounded-md border border-gray-300 bg-white px-4 py-2 text-black text-left shadow-sm"
              required
            />
          </div>
          <div className="flex items-center text-center">
            <label
              htmlFor="gender"
              className="block w-1/2 text-lg font-medium text-left"
            >
              Gender
            </label>
            <select
              name="gender"
              id="gender"
              value={formData?.gender}
              onChange={(e) =>
                setFormData({ ...formData, gender: e.target.value })
              }
              className="flex-1 rounded-md border border-gray-300 bg-white px-4 py-2 text-black text-left shadow-sm"
              required
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="flex items-center text-center">
            <label
              htmlFor="age"
              className="block w-1/2 text-lg font-medium text-left"
            >
              Age
            </label>
            <input
              type="text"
              id="age"
              value={formData?.age}
              onChange={(e) =>
                setFormData({ ...formData, age: e.target.value })
              }
              placeholder="Please enter your age"
              className="flex-1 rounded-md border border-gray-300 bg-white px-4 py-2 text-black text-left shadow-sm"
              required
            />
          </div>
          <div className="flex items-center text-center">
            <label
              htmlFor="email"
              className="block w-1/2 text-lg font-medium text-left"
            >
              Email
            </label>
            <input
              type="text"
              id="emailId"
              value={formData?.emailId}
              onChange={(e) =>
                setFormData({ ...formData, emailId: e.target.value })
              }
              placeholder="Please enter your email"
              className="flex-1 rounded-md border border-gray-300 bg-white px-4 py-2 text-black text-left shadow-sm"
              required
            />
          </div>
          <div className="flex items-center text-center">
            <label
              htmlFor="phone"
              className="block w-1/2 text-lg font-medium text-left"
            >
              Phone No
            </label>
            <input
              type="text"
              id="phone"
              value={formData?.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              placeholder="Please enter your phone number"
              className="flex-1 rounded-md border border-gray-300 bg-white px-4 py-2 text-black text-left shadow-sm"
              required
            />
          </div>
          <div className="flex items-center text-center mt-2 gap-4">
            <button
              type="submit"
              className="w-1/2 px-4 py-4 bg-blue-700 rounded-lg text-xl font-medium cursor-pointer mt-4"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-1/2 px-4 py-4 bg-blue-700 rounded-lg text-xl font-medium cursor-pointer mt-4"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateDetails;

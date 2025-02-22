import { useState } from "react";
import { EMPLOYEE_DETAILS } from "../../utils/constants";

const UpdateDetails = ({ employee, updateEmployee, updateModal }) => {
  const [formData, setFormData] = useState({ ...employee });

  const details = EMPLOYEE_DETAILS;
  const employeeInfo = Object.entries(formData);

  const handleCancel = () => {
    updateModal();
  };

  const updateEmployeeInfo = (key, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEmployee(formData);
    updateModal();
  };
  return (
    <div className="max-w-3xl max-h-[60%] text-white top-0 bottom-0 left-0 right-0 fixed bg-black bg-opacity-20 border rounded-xl shadow-md flex items-center text-center m-auto">
      <div className="w-full h-[80%] flex flex-col justify-between items-center px-2 my-4 gap-2">
        <h2 className="text-2xl font-bold">Update Details</h2>
        <form
          onSubmit={handleSubmit}
          className="w-xl h-[80%] flex flex-col gap-2"
        >
          {employeeInfo?.map((subInfo, index) => {
            const [key, value] = [...subInfo];
            return (
              <div className="flex items-center text-center">
                <label
                  htmlFor={key}
                  className="block w-1/2 text-lg font-medium text-left"
                >
                  {details[index]}
                </label>
                {key !== "gender" ? (
                  <input
                    type="text"
                    id={key}
                    value={value}
                    onChange={(e) => updateEmployeeInfo(key, e.target.value)}
                    placeholder={`Please enter your ${details[
                      index
                    ].toLowerCase()}`}
                    className="flex-1 rounded-md border border-gray-300 bg-white px-4 py-2 text-black text-left shadow-sm"
                    required
                  />
                ) : (
                  <select
                    name={key}
                    id={key}
                    value={value}
                    onChange={(e) => updateEmployeeInfo(key, e.target.value)}
                    className="flex-1 rounded-md border border-gray-300 bg-white px-4 py-2 text-black text-left shadow-sm"
                    required
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                )}
              </div>
            );
          })}

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

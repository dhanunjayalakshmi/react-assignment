import { useParams } from "react-router";
import UpdateDetails from "./UpdateDetails";
import { useState } from "react";
import { MALE_AVATAR, FEMALE_AVATAR } from "../../utils/constants";

const ViewEmployee = ({ employees, updateEmployees }) => {
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  const employee = employees?.find((employee) => employee.id == id);
  const { name, gender, age, emailId, phone } = employee;

  const handleModal = () => {
    setShowModal((prev) => !prev);
  };

  const handleUpdate = (formData) => {
    const updatedEmployeesInfo = employees?.map((employee) => {
      if (employee?.id === formData?.id) {
        return { ...formData };
      }
      return employee;
    });
    updateEmployees(updatedEmployeesInfo);
  };

  return (
    <div className="max-w-3xl flex items-center text-center mt-4 mx-auto">
      <div className="w-full flex flex-col justify-center items-center px-2 mt-4 gap-4">
        <h1 className="text-3xl font-bold">Employee Details</h1>
        <div className="min-w-2xl flex justify-around items-center mt-4">
          <img src={gender === "Male" ? MALE_AVATAR : FEMALE_AVATAR} alt="" />

          <div className="flex flex-col items-start text-left my-4 gap-6">
            <p className="text-xl font-medium">
              Name: <span className="px-2">{name}</span>
            </p>
            <p className="text-xl font-medium">
              Gender: <span className="px-2">{gender}</span>
            </p>
            <p className="text-xl font-medium">
              Age: <span className="px-2">{age}</span>
            </p>
            <p className="text-xl font-medium">
              Email Id: <span className="px-2">{emailId}</span>
            </p>
            <p className="text-xl font-medium">
              Phone No: <span className="px-2">{phone}</span>
            </p>
          </div>
        </div>
        <button
          className="px-4 py-4 bg-blue-700 rounded-lg text-white text-xl font-medium cursor-pointer"
          onClick={handleModal}
        >
          Update Details
        </button>
        {showModal && (
          <UpdateDetails
            employee={employee}
            updateEmployee={(formData) => handleUpdate(formData)}
            updateModal={() => handleModal()}
          />
        )}
      </div>
    </div>
  );
};

export default ViewEmployee;

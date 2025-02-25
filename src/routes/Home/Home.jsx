import { useNavigate } from "react-router";
import { EMPLOYEE_DETAILS } from "../../utils/constants";

const Home = ({ employees }) => {
  const navigate = useNavigate();
  const details = EMPLOYEE_DETAILS;

  const handleClick = (employeeId) => {
    navigate(`employee/${employeeId}`);
  };

  return (
    <div className="w-full flex items-center text-center mt-4">
      <div className="w-full flex flex-col justify-center items-center mt-4 ">
        <h1 className="text-3xl font-bold">Employees Details</h1>
        <div className="mt-4 w-full shadow-md">
          <table className="min-w-full mt-4 text-left ">
            <thead className="text-md text-white uppercase bg-blue-700">
              <tr>
                {details?.map((info) => (
                  <>
                    <th key={info} className="border border-gray-300 px-6 py-3">
                      {info}
                    </th>
                  </>
                ))}
              </tr>
            </thead>
            <tbody>
              {employees?.map((employee) => {
                const employeeDetails = Object.values(employee);
                return (
                  <>
                    <tr
                      key={employee?.id}
                      className="py-2 text-lg bg-black text-white hover:bg-blue-700"
                      onClick={() => handleClick(employee?.id)}
                    >
                      {employeeDetails?.map((detail) => (
                        <td
                          key={detail}
                          className="border border-gray-300 px-6 py-3 cursor-pointer"
                        >
                          {detail}
                        </td>
                      ))}
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;

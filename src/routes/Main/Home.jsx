import { useNavigate } from "react-router";

const Home = ({ employees, details }) => {
  const navigate = useNavigate();

  const handleClick = (employeeId) => {
    navigate(`employee/${employeeId}`);
  };

  return (
    <div className="max-w-3xl flex items-center text-center mt-4 mx-auto">
      <div className="w-full flex flex-col justify-center items-center px-2 mt-4 ">
        <h1 className="text-3xl font-bold">Employees Details</h1>
        <div className="mt-4 w-full shadow-md">
          <table className="min-w-full mt-4 text-left ">
            <thead className="text-md text-white uppercase bg-blue-700">
              <tr>
                {details?.map((info) => (
                  <>
                    <th className="border border-gray-300 px-6 py-3">{info}</th>
                  </>
                ))}
              </tr>
            </thead>
            <tbody>
              {employees?.map((employee) => (
                <>
                  <tr
                    key={employee?.id}
                    className="py-2 text-lg bg-black text-white hover:bg-blue-700"
                    onClick={() => handleClick(employee?.id)}
                  >
                    <td className="border border-gray-300 px-6 py-3 cursor-pointer">
                      {employee?.id}
                    </td>
                    <td className="border border-gray-300 px-6 py-3 cursor-pointer">
                      {employee?.name}
                    </td>
                    <td className="border border-gray-300 px-6 py-3 cursor-pointer">
                      {employee?.gender}
                    </td>
                    <td className="border border-gray-300 px-6 py-3 cursor-pointer">
                      {employee?.age}
                    </td>
                    <td className="border border-gray-300 px-6 py-3 cursor-pointer">
                      {employee?.emailId}
                    </td>
                    <td className="border border-gray-300 px-6 py-3 cursor-pointer">
                      {employee?.phone}
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;

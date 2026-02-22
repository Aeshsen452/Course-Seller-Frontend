const TableRecord = () => {
  const tableData = [
    {
      coloumn1name: "Program 1",
      coloumn2name: "Program 1",
      coloumn3name: "7 – 8 years Grade 3 to adults",
    },
    {
      coloumn1name: "Program 1",
      coloumn2name: "Program 1",
      coloumn3name: "8 – 9 years Grade 4 to adults",
    },
    {
      coloumn1name: "Program 1",
      coloumn2name: "Program 1",
      coloumn3name: "9 – 10 years Grade 5 to adults",
    },
    {
      coloumn1name: "Program 1",
      coloumn2name: "Program 1",
      coloumn3name: "10 – 11 years Grade 6 to adults",
    },
    {
      coloumn1name: "Program 1",
      coloumn2name: "Program 1",
      coloumn3name: "11 – 12 years Grade 7 to adults",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center w-full p-4 mt-16 gap-y-8">
      <table className="w-[90%] border-collapse overflow-hidden rounded-lg shadow-sm">
        <thead className="bg-[#F69837] text-black">
          <tr>
            {/* semantic correctness ke liye th use kiya hai */}
            <th className="w-96 px-8 p-3 text-left font-semibold">
              Kitehawk Online
            </th>
            <th className="w-96 text-center p-3 font-semibold">
              Kitehawk Workbooks
            </th>
            <th className="w-96 text-center p-3 font-semibold">
              Suitable for Student Age’s
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {tableData.map((item, index) => (
            <tr
              key={index}
              className="border-b last:border-none hover:bg-gray-50 transition-colors"
            >
              <td className="w-96 px-8 p-3 text-gray-700">
                {item.coloumn1name}
              </td>
              <td className="w-96 text-center p-3 text-gray-700">
                {item.coloumn2name}
              </td>
              <td className="w-96 text-center p-3 text-gray-700">
                {item.coloumn3name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="w-[90%] ">
        The Kitehawk Learning Spelling & Literacy Program can be used as both, a
        remedial program and a mainstream spelling program. The print program
        has also proved popular as a remedial spelling program for high school
        students and juvenile offenders. <br /> <br />
        Graphics, such as pictures of fairies, Humpty Dumpty, etc are avoided,
        so the workbooks and Online Program would prove acceptable to mature age
        students.
      </p>

    </div>
  );
};

export default TableRecord;

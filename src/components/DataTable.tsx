import React, { useEffect, useState } from "react";
import { userInfo, columns } from "./DataTableConstants";
import Pagination from "./Pagination";

export interface UserData {
  id: number;
  name: string;
  age: number;
  city: string;
}

export default function DataTable() {
  const [filteredData, setFilteredData] = useState<UserData[]>(userInfo);
  const [sortOrder, setSortOrder] = useState<string>("ASC");
  const [searchKey, setSearchKey] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage, setPostsPerPage] = useState<number>(10);

  useEffect(() => {
    let filteredData: UserData[] = userInfo;
    const indexOfLastUser = currentPage * postsPerPage;
    const indexOfFirstUser = indexOfLastUser - postsPerPage;
    if (searchKey !== "") {
      filteredData = userInfo.filter((user) => {
        return user.name.toLowerCase().includes(searchKey.toLowerCase());
      });
    }
    filteredData = filteredData.slice(indexOfFirstUser, indexOfLastUser);
    setFilteredData(filteredData);
  }, [postsPerPage, currentPage, searchKey]);

  function handleHeaderClick(header: keyof UserData) {
    const sortedData = [...filteredData].sort((a, b) => {
      const firstValue = a[header];
      const secondValue = b[header];

      // Handle case where the values are of data type string.
      if (typeof firstValue === "string" && typeof secondValue === "string") {
        return sortOrder === "ASC"
          ? firstValue.toLowerCase().localeCompare(secondValue.toLowerCase())
          : secondValue.toLowerCase().localeCompare(firstValue.toLowerCase());
      }

      // Handling case where values of data type number.
      if (typeof firstValue === "number" && typeof secondValue === "number") {
        return sortOrder === "ASC" ? firstValue - secondValue : secondValue - firstValue;
      }
      
      // Handle cases where values are not comparable like Undefined or Null Values or comparing different Types:
      return 0; 
    });

    setFilteredData(sortedData);
    setSortOrder(sortOrder === "ASC" ? "DSC" : "ASC");
  }

  const handleSearchUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKey(e.target.value);
  };

  const handlePagination = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const getKeyName = (label: string) => {
    return label.toLowerCase() as keyof UserData;
  };

  const handlePageSize = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const pageSize = parseInt(e.target.value);
    setPostsPerPage(pageSize);
  };

  return (
    <div className="p-4">
      <div className="flex items-center mb-4">
        <label className="mr-2 font-semibold">Search Users</label>
        {userInfo.length > 0 && (
          <input
            className="border border-gray-300 rounded bg-black text-white px-2 py-1 w-1/3"
            type="text"
            name="searchKey"
            value={searchKey}
            onChange={handleSearchUser}
            placeholder="Search users..."
          />
        )}
      </div>

      <div className="flex items-center mb-4">
        <label className="mr-2 font-semibold ">Choose page size:</label>
        <select
          id="postsPerPage"
          name="postsPerPage"
          value={postsPerPage}
          onChange={handlePageSize}
          className="border border-gray-300 rounded px-2 py-1 text-black"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>
      </div>

      {!filteredData.length && searchKey !== "" ? (
        <div className="flex justify-center items-center min-h-40vh">
          <h3 className="text-lg text-red-500">{`No user with the key "${searchKey}" exists`}</h3>
        </div>
      ) : (
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-black text-white">
            <tr>
              {columns.map((col, key) => (
                <th
                  key={key}
                  className="border border-gray-300 px-4 py-2 cursor-pointer"
                  onClick={() => handleHeaderClick(getKeyName(col.name))}
                >
                  {col.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((user, index) => (
              <tr key={index}>
                {columns.map((col, key) => (
                  <td key={key} className="border border-gray-300 px-4 py-2">
                    {user[getKeyName(col.name)]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {filteredData.length > 0 && columns.length > 0 && (
        <Pagination
          length={userInfo.length}
          postsPerPage={postsPerPage}
          currentPage={currentPage}
          handlePagination={handlePagination}
        />
      )}
    </div>
  );
}

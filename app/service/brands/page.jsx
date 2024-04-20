import React from "react";
import Image from "next/image";
import Create from "@components/create";
import Link from "next/link";

function Service() {
  return (
    <>
      <div className="ml-14  mt-5  ">
        <div className="flex flex-row justify-between items-center mb-5 mr-10">
          <div className="flex justify-center items-center gap-3 bg-gray-100 w-96 py-3 rounded-md">
            <Image src="/search.png" alt="search icon" width={14} height={14} />
            <input
              type="search"
              placeholder="Search"
              className="bg-gray-100 border-none outline-none"
            />
          </div>

          <div>
            <Create
              imageComponent={
                <p className="bg-yellow-300 w-28 cursor-pointer py-2 font-semibold rounded-md gap-2 text-lg flex justify-center items-center">
                  <Image
                    src="/plus.png"
                    alt="add icon"
                    width={14}
                    height={14}
                  />
                  Create
                </p>
              }
            />
          </div>
        </div>
        <div className="overflow-x-auto border rounded-md mr-10">
          <table className="table-auto min-w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="border w-1/12">NO</th>
                <th className="border px-4 py-2 lg:w-1/4">Types of Brands</th>
                <th className="border px-4 py-2 lg:w-1/4">Image</th>
                <th className="border px-4 py-2 lg:w-1/4">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2 text-center">1</td>
                <td className="border px-4 py-2 lg:w-1/4 ">Apple</td>
                <td className="border px-4 py-2 lg:w-1/4 pl-28">
                  <Image src="/favicon.png" alt="logo" width={25} height={25} />
                </td>
                <td className="border px-4 py-2 w-full  gap-4 flex justify-center items-center pl-7 pb-6">
                  <Link href="/service/brands/brandtype">
                    {" "}
                    <Image
                      src="/preview.png"
                      alt="logo"
                      width={25}
                      height={25}
                      className="cursor-pointer"
                    />
                  </Link>{" "}
                  <Create
                    imageComponent={
                      <Image
                        src="/edit.png"
                        alt="logo"
                        width={20}
                        height={20}
                        className="cursor-pointer"
                      />
                    }
                  />
                  <Image
                    src="/delete.png"
                    alt="logo"
                    width={20}
                    height={20}
                    className="cursor-pointer"
                  />
                </td>
              </tr>{" "}
              <tr>
                <td className="border px-4 py-2 text-center">1</td>
                <td className="border px-4 py-2 lg:w-1/4 ">Samsung</td>
                <td className="border px-4 py-2 lg:w-1/4 pl-28">
                  <Image src="/favicon.png" alt="logo" width={25} height={25} />
                </td>
                <td className="border px-4 py-2 w-full  gap-4 flex justify-center items-center pl-7 pb-6">
                  <Link href="/service/brands/brandtype">
                    {" "}
                    <Image
                      src="/preview.png"
                      alt="logo"
                      width={25}
                      height={25}
                      className="cursor-pointer"
                    />
                  </Link>{" "}
                  <Create
                    imageComponent={
                      <Image
                        src="/edit.png"
                        alt="logo"
                        width={20}
                        height={20}
                        className="cursor-pointer"
                      />
                    }
                  />
                  <Image
                    src="/delete.png"
                    alt="logo"
                    width={20}
                    height={20}
                    className="cursor-pointer"
                  />
                </td>
              </tr>{" "}
              <tr>
                <td className="border px-4 py-2 text-center">1</td>
                <td className="border px-4 py-2 lg:w-1/4 ">Mirosoft</td>
                <td className="border px-4 py-2 lg:w-1/4 pl-28">
                  <Image src="/favicon.png" alt="logo" width={25} height={25} />
                </td>
                <td className="border px-4 py-2 w-full  gap-4 flex justify-center items-center pl-7 pb-6">
                  <Link href="/service/brands/brandtype">
                    {" "}
                    <Image
                      src="/preview.png"
                      alt="logo"
                      width={25}
                      height={25}
                      className="cursor-pointer"
                    />
                  </Link>{" "}
                  <Create
                    imageComponent={
                      <Image
                        src="/edit.png"
                        alt="logo"
                        width={20}
                        height={20}
                        className="cursor-pointer"
                      />
                    }
                  />
                  <Image
                    src="/delete.png"
                    alt="logo"
                    width={20}
                    height={20}
                    className="cursor-pointer"
                  />
                </td>
              </tr>{" "}
              <tr>
                <td className="border px-4 py-2 text-center">1</td>
                <td className="border px-4 py-2 lg:w-1/4 ">Google</td>
                <td className="border px-4 py-2 lg:w-1/4 pl-28">
                  <Image src="/favicon.png" alt="logo" width={25} height={25} />
                </td>
                <td className="border px-4 py-2 w-full  gap-4 flex justify-center items-center pl-7 pb-6">
                  <Link href="/service/brands/brandtype">
                    {" "}
                    <Image
                      src="/preview.png"
                      alt="logo"
                      width={25}
                      height={25}
                      className="cursor-pointer"
                    />
                  </Link>{" "}
                  <Create
                    imageComponent={
                      <Image
                        src="/edit.png"
                        alt="logo"
                        width={20}
                        height={20}
                        className="cursor-pointer"
                      />
                    }
                  />
                  <Image
                    src="/delete.png"
                    alt="logo"
                    width={20}
                    height={20}
                    className="cursor-pointer"
                  />
                </td>
              </tr>{" "}
              <tr>
                <td className="border px-4 py-2 text-center">1</td>
                <td className="border px-4 py-2 lg:w-1/4 ">Oneplus</td>
                <td className="border px-4 py-2 lg:w-1/4 pl-28">
                  <Image src="/favicon.png" alt="logo" width={25} height={25} />
                </td>
                <td className="border px-4 py-2 w-full  gap-4 flex justify-center items-center pl-7 pb-6">
                  <Link href="/service/brands/brandtype">
                    {" "}
                    <Image
                      src="/preview.png"
                      alt="logo"
                      width={25}
                      height={25}
                      className="cursor-pointer"
                    />
                  </Link>{" "}
                  <Create
                    imageComponent={
                      <Image
                        src="/edit.png"
                        alt="logo"
                        width={20}
                        height={20}
                        className="cursor-pointer"
                      />
                    }
                  />
                  <Image
                    src="/delete.png"
                    alt="logo"
                    width={20}
                    height={20}
                    className="cursor-pointer"
                  />
                </td>
              </tr>{" "}
              <tr>
                <td className="border px-4 py-2 text-center">1</td>
                <td className="border px-4 py-2 lg:w-1/4 ">LG</td>
                <td className="border px-4 py-2 lg:w-1/4 pl-28">
                  <Image src="/favicon.png" alt="logo" width={25} height={25} />
                </td>
                <td className="border px-4 py-2 w-full  gap-4 flex justify-center items-center pl-7 pb-6">
                  <Link href="/service/brands/brandtype">
                    {" "}
                    <Image
                      src="/preview.png"
                      alt="logo"
                      width={25}
                      height={25}
                      className="cursor-pointer"
                    />
                  </Link>{" "}
                  <Create
                    imageComponent={
                      <Image
                        src="/edit.png"
                        alt="logo"
                        width={20}
                        height={20}
                        className="cursor-pointer"
                      />
                    }
                  />
                  <Image
                    src="/delete.png"
                    alt="logo"
                    width={20}
                    height={20}
                    className="cursor-pointer"
                  />
                </td>
              </tr>{" "}
              <tr>
                <td className="border px-4 py-2 text-center">1</td>
                <td className="border px-4 py-2 lg:w-1/4 ">Sony</td>
                <td className="border px-4 py-2 lg:w-1/4 pl-28">
                  <Image src="/favicon.png" alt="logo" width={25} height={25} />
                </td>
                <td className="border px-4 py-2 w-full  gap-4 flex justify-center items-center pl-7 pb-6">
                  <Link href="/service/brands/brandtype">
                    {" "}
                    <Image
                      src="/preview.png"
                      alt="logo"
                      width={25}
                      height={25}
                      className="cursor-pointer"
                    />
                  </Link>{" "}
                  <Create
                    imageComponent={
                      <Image
                        src="/edit.png"
                        alt="logo"
                        width={20}
                        height={20}
                        className="cursor-pointer"
                      />
                    }
                  />
                  <Image
                    src="/delete.png"
                    alt="logo"
                    width={20}
                    height={20}
                    className="cursor-pointer"
                  />
                </td>
              </tr>{" "}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Service;

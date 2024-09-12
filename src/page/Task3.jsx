import { useEffect, useState } from "react";

const Task3 = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!res.ok) {
          throw new Error(`Failed to fetch data. Status code: ${res.status}`);
        }

        const data = await res.json();
        setUsers(data);
      } catch {
        setError("Error Fetching the users");
      } finally {
        setLoading(false);
      }
    };

    getData();
    console.log(users);
  }, []);

  return (
    <div>
      {error && <p>Error: {error}</p>}

      <table className="w-full">
        <thead className="bg-[#f9fafb] p-4 [&_tr]:border-b">
          <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
            <th className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
              id
            </th>
            <th className="p-4 pr-0 text-left">Name</th>
            <th className="p-4 text-left">Username</th>
            <th className="p-4 text-left">Email</th>
            <th className="p-4 text-left max-md:hidden">Phone</th>
            <th className="p-4 text-left max-md:hidden">Website</th>
          </tr>
        </thead>
        <tbody className="border-t bg-muted/50 font-medium [&>tr]:last:border-b-0">
          {!loading &&
            !error &&
            users.map((user) => (
              <tr
                key={user.id}
                className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
              >
                {/* <td>hello</td> */}
                <td className="p-4 text-center align-middle text-muted-foregroundp-4 [&:has([role=checkbox])]:pr-0">
                  <div className="pl-4 flex items-center justify-start gap-3">
                    <h1 className="text-[14px] truncate font-semibold text-[#344054]">
                      {user.id}
                    </h1>
                  </div>
                </td>

                <td className="p-4 text-neutral-700 align-left text-left pl-2 pr-10 font-semibold ">
                  {user.name}
                </td>

                <td className="p-4 text-neutral-700">{user.username}</td>

                <td className="p-4 text-neutral-700 min-w-32">{user.email}</td>

                <td className="p-4 text-neutral-700 max-md:hidden">
                  {user.phone}
                </td>
                <td className=" p-4 text-neutral-700 max-md:hidden">
                  {user.website}
                </td>
              </tr>
            ))}

          {loading && (
            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
              {" "}
              Loading...{" "}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Task3;

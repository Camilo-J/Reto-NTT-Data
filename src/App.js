import { useEffect, useState } from "react";

function App() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=15&seed=foobar")
      .then((data) => data.json().then((response) => setUser(response.results)))
      .catch(console.log);
  }, []);

  return (
    <section className="p-6 container-2xl flex flex-col gap-8">
      <h1 className="text-center text-teal-600 text-4xl font-semibold">
        NTT-Data Challenge
      </h1>

      <div className="flex justify-center">
        <table className="table-auto  w-10/12 border-separate border-spacing-y-4">
          <thead>
            <tr>
              <th className="p-4 text-teal-500 text-start border-y-2 border-l-2 border-teal-500 rounded-tl-md rounded-bl-md">
                Nombre
              </th>
              <th className="p-4 text-teal-500 text-start border-y-2 border-teal-500">
                Apellido
              </th>
              <th className="p-4 text-teal-500 text-start border-y-2 border-teal-500">
                Edad
              </th>
              <th className="p-4 text-teal-500 text-start border-y-2 border-teal-500">
                Genero
              </th>
              <th className="p-4 text-teal-500 border-y-2 border-teal-500">
                Email
              </th>
              <th className="p-4 text-teal-500 text-start border-y-2 border-teal-500">
                Nacionalidad
              </th>
              <th className="p-4 text-teal-500 text-start border-y-2 border-teal-500 border-r-2 rounded-tr-md rounded-br-md">
                Foto
              </th>
            </tr>
          </thead>
          <tbody>
            {users
              ?.sort((a, b) => a.dob.age - b.dob.age)
              .map((user, index) => {
                return (
                  <tr
                    key={index}
                    className="transition-transform duration-500 hover:scale-105 "
                  >
                    <td className="px-4 text-gray-700 border-l border-y rounded-tl-md rounded-bl-md border-teal-500">
                      {user.name.first}
                    </td>
                    <td className="px-4 text-gray-700 border-y border-teal-500">
                      {user.name.last}
                    </td>
                    <td className="px-4 text-gray-700 border-y border-teal-500">
                      {user.dob.age}
                    </td>
                    <td className="px-4 text-gray-700 border-y border-teal-500">
                      {user.gender === "female" ? "F" : "M"}
                    </td>
                    <td className="px-4 text-gray-700 text-center border-y border-teal-500">
                      {user.email}
                    </td>
                    <td className="px-4 text-gray-700 border-y border-teal-500">
                      {user.nat}
                    </td>
                    <td className="p-3 border-y border-r border-teal-500 rounded-tr-md rounded-br-md">
                      <img
                        className="rounded-full"
                        src={user.picture.thumbnail}
                        alt="profile"
                      />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <a
        data={JSON.stringify(users)}
        className="self-center w-56 h-12 border-2 border-teal-500 rounded-3xl text-center flex items-center justify-center  transition-all duration-500 hover:shadow-md hover:shadow-teal-500 text-teal-600"
        href="https://randomuser.me/api/?results=15&seed=foobar&format=csv"
      >
        Download CSV
      </a>
    </section>
  );
}

export default App;

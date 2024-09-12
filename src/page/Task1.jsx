import { useEffect, useState } from "react";

const users = [
  { id: 1, name: "Albedo", image: "Character_Albedo_Thumb.png" },
  { id: 2, name: "Alhaitham", image: "Character_Alhaitham_Thumb.png" },
  { id: 3, name: "Aloy", image: "Character_Aloy_Thumb.png" },
  { id: 4, name: "Kachina", image: "Character_Kachina_Thumb.png" },
  {
    id: 5,
    name: "Kazuha",
    image: "Character_Kaedehara_Kazuha_Thumb.png",
  },
  { id: 6, name: "Kaeya", image: "Character_Kaeya_Thumb.png" },
  {
    id: 7,
    name: "Ayaka",
    image: "Character_Kamisato_Ayaka_Thumb.png",
  },
  {
    id: 8,
    name: "Ayato",
    image: "Character_Kamisato_Ayato_Thumb.png",
  },
  { id: 9, name: "Kaveh", image: "Character_Kaveh_Thumb.png" },
  { id: 10, name: "Kazuha", image: "Character_Kazuha_Thumb.png" },
];

const Task1 = () => {
  const [searchedText, setSearchedText] = useState("");
  const [filteredUser, setFilteredUser] = useState([]);

  const handleChange = (e) => {
    setSearchedText(e.target.value);
    console.log(searchedText);
  };

  useEffect(() => {
    const filteredItems = users.filter((user) =>
      user.name.toLowerCase().includes(searchedText.toLowerCase())
    );
    setFilteredUser(filteredItems);
  }, [searchedText]);

  return (
    <>
      <div className="min-h-[86vh] w-full flex flex-col items-center gap-6">
        <div className="w-1/2 max-sm:w-[80%] mx-auto  py-2 px-4 relative rounded-lg border border-gray-300 text-gray-900">
          <input
            type="text"
            id="Search"
            placeholder="Search for..."
            onChange={handleChange}
            className="w-full text-16 placeholder:text-16 outline-none"
          />

          <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
            <span className="sr-only">Search</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </span>
        </div>
        <section className="flex flex-wrap gap-6 items-center justify-center max-md:justify-start w-[60%] mx-[16%] max-sm:w-[80%">
          {filteredUser.map((item) => (
            <article
              key={item.id}
              className="w-[20%] max-sm:w-[100%] max-md:w-[46%] hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
            >
              <div className=" flex flex-col min-h-40 rounded-[10px] bg-white p-4 pt-2 sm:p-6">
                <img
                  src={`/images/${item.image}`}
                  alt={`${item.name} image`}
                  className="aspect-auto max-lg:scale-100 max-sm:scale-100"
                />

                <div className="mt-4 flex-col flex-wrap gap-1">
                  <h3 className="mt-0.5 text-lg max-sm:text-sm font-medium text-gray-900">
                    {item.name}
                  </h3>
                  <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                    Student
                  </span>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </>
  );
};

export default Task1;

import { useState } from "react";
export default function Form() {
  const [person, setPerson] = useState({
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "shafiqdev97@gmail.com",
    artwork: {
      city: "Dhaka",
    },
  });

  function handleChange(e) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
      artwork: {
        ...person.artwork,
        city: e.target.value,
      },
    });
  }

  return (
    <div className="flex items-start flex-col gap-2 m-3">
      <label>
        First name:
        <input
          name="firstName"
          onChange={handleChange}
          value={person.firstName}
        />
      </label>
      <label>
        City:
        <input onChange={handleChange} value={person.artwork.city} />
      </label>
      <label>
        Last name:
        <input
          name="lastName"
          onChange={handleChange}
          value={person.lastName}
        />
      </label>
      <label>
        Email:
        <input name="email" onChange={handleChange} value={person.email} />
      </label>
      <p>
        {person.firstName}()
        {person.lastName}()
        {person.email}
      </p>
    </div>
  );
}

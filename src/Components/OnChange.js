import React, { useState } from "react";
let OnChange = () => {
  const [User, setUser] = useState("");

  const dinesh = (e) => {
    setUser(e.target.value)
    console.log(e.target.value)
  }
 
  return (
    <React.Fragment>
      <input
        type="text"
        placeholder="Username"
        value={User}
        name="user"
        onChange={dinesh}
      />
    </React.Fragment>
  );
};
export default OnChange;

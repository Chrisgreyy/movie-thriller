import { useState, useEffect } from "react";

interface UserInfo {
  name: string;
  age: string;
  email: string;
}

interface TestsProps {
  name: string;
  age: string;
  email: string;
}

const Tests = ({ name, age, email }: TestsProps) => {
  const [getUserInfo, setUserInfo] = useState<UserInfo>({ name, age, email });
  const [showResult, setShowResult] = useState<boolean>(false);

  useEffect(() => {
    setUserInfo({ name, age, email });
  }, [name, age, email]);

  const submitHandler = () => {
    setShowResult(true);
  };



  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        defaultValue={getUserInfo.name}
        onChange={(e) => setUserInfo({ ...getUserInfo, name: e.target.value })}
      />

      <input
        type="text"
        placeholder="Enter your age"
        defaultValue={getUserInfo.age}
        onChange={(e) => setUserInfo({ ...getUserInfo, age: e.target.value })}
      />

      <input
        type="text"
        placeholder="Enter your email"
        defaultValue={getUserInfo.email}
        onChange={(e) => setUserInfo({ ...getUserInfo, email: e.target.value })}
      />

      <button onClick={submitHandler}>Submit</button>

      <div style={{ display: showResult ? "block" : "none" }}>
        <h1>{getUserInfo.name}</h1>
        <h1>{getUserInfo.age}</h1>
        <h1>{getUserInfo.email}</h1>
      </div>
    </div>
  );
};

export default Tests;
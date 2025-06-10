import { useState } from "react";
import { Button } from "./Button";
export const Note = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="note p-3 m-1 d-flex justify-content-between border border-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="d-flex">
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>

      {isHovered ? (
        <div className="">
          <Button content="✏️" className="btn btn-warning" />
          <Button content="❌" className="btn btn-danger" />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

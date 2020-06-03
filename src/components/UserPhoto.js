import React from "react";
export default function UserPhoto(props) {
  return (
    <div className="m-auto m-5 m-md-0">
      <img src={props.src} alt="" className="img align-middle" />
    </div>
  );
}


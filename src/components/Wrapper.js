import React from "react";
import UserList from './UserList'
import Menu from "./Menu";
export default function Wrapper() {
  return (
    <div className="container">
      <div className="row" style={{ backgroundColor: "#1169ff" }}>
        <Menu />
      </div>
      <div className="row">
        <div className="col-sm-12">
          <UserList />
        </div>
      </div>
    </div>
  );
}

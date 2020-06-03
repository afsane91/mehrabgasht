import React, { useEffect } from "react";
import { setName, setPhoto } from "../actions/actionCreator";
import { connect } from "react-redux";
import UserPhoto from "./UserPhoto";
import axios from "axios";
export function UserList(props) {
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/photos`).then((res) => {
      props.setPhoto({ userPhoto: res.data });
    });
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      props.setName({ userInfo: res.data });
    });
  }, []);
  return (
    <div className="userInfo-box-wrapper justify-content-center">
      {props.user.map((item) => {
        return (
          <div
            className="col-lg-3 col-md-5 col-xs-12 userInfo-box"
            key={item.id}
          >
            <div className="col-md-3 col-xs-12 p-0 text-center d-flex align-items-center">
              {props.photo &&
                props.photo.map((itm) => {
                  return (
                    itm.id == item.id && (
                      <UserPhoto key={itm.id} src={itm.thumbnailUrl} />
                    )
                  );
                })}
            </div>
            <div className="col-md-9 col-xs-12 p-3">
              <p>
                <strong className="font-weight-bold">username :</strong>
                {item.name}
              </p>
              <p>
                <strong className="font-weight-bold">email : </strong>
                {item.email}
              </p>
              <p>
                <strong className="font-weight-bold">Address :</strong>
                {item.address.street} , {item.address.city}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
const mapStateToProps = (state) => ({
  user: state.setUserInfo.userInfo,
  photo: state.setUserInfo.userPhoto,
});
const mapDispatchToProps = { setName, setPhoto };
export default connect(mapStateToProps, mapDispatchToProps)(UserList);

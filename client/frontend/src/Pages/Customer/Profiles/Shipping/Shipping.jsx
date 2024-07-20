import React, { useEffect, useState } from "react";
import UserHeader from "../../../../Components/UserHeader/UserHeader";
import style from "../Profile/Profile.module.css";
import logincss from "../../Login/Login.module.css";
import register from "../../Register/Register.module.css";
import { setToken } from "../../../../Slices/Access";

import UserprofileSidebar from "../../../../Components/UserprofileSidebar/UserprofileSidebar";
import axios from "../../../../Config/Axios";
import { useDispatch, useSelector } from "react-redux";
import { UserRegistered } from "../../../../Slices/UserSlice";
import { useNavigate } from "react-router-dom";
const Shipping = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const accessToken = localStorage.getItem("access_token");

        const getuser = await axios.get(`currentuser/`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        dispatch(UserRegistered(getuser.data));
      } catch (e) {
        console.log(e);

        navigate("/");
      }
    };

    fetchUser();

    const fetchshipping = async () => {
      try {
        const accessToken = localStorage.getItem("access_token");

        const shipping = await axios.get(`customer/profile/getshipping/`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        console.log(shipping);
      } catch (e) {
        console.log(e);
      }
    };
    fetchshipping();
  }, []);
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    address: "",
    country: "",
    city: "",
    state: "",
    postalCode: "",
    district: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };
  return (
    <div>
      <UserprofileSidebar />

      <div className={style.content}>
        <hr id={style.sepratehr} />

        <div className={register.innerdiv}>
          <div className={logincss.inpdiv} style={{ top: 0 }}>
            <div>
              <label htmlFor="firstName">First name:</label>
              <input
                type="text"
                name="firstName"
                value={profile.firstName}
                onChange={handleChange}
                className={`w-100 ${logincss.inp}`}
              />
            </div>

            <div>
              <label htmlFor="lastName">Last name:</label>
              <input
                type="text"
                name="lastName"
                value={profile.lastName}
                onChange={handleChange}
                className={`w-100 ${logincss.inp}`}
              />
            </div>

            <div>
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                name="address"
                value={profile.address}
                onChange={handleChange}
                className={`w-100 ${logincss.inp}`}
              />
            </div>

            <div>
              <label htmlFor="country">Country:</label>
              <input
                type="text"
                name="country"
                value={profile.country}
                onChange={handleChange}
                className={`w-100 ${logincss.inp}`}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <label htmlFor="city">City:</label>
              <input
                type="text"
                name="city"
                value={profile.city}
                onChange={handleChange}
                className={`${logincss.inp} ${register.width40}`}
              />

              <label htmlFor="state" style={{ zIndex: 10 }}>
                State:
              </label>
              <input
                type="text"
                name="state"
                value={profile.state}
                onChange={handleChange}
                className={`${logincss.inp} ${register.width40}`}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <label htmlFor="postalCode">Postal Code:</label>
              <input
                type="text"
                name="postalCode"
                value={profile.postalCode}
                onChange={handleChange}
                className={`${logincss.inp} ${register.width40}`}
              />

              <label htmlFor="district" style={{ zIndex: 10 }}>
                District:
              </label>
              <input
                type="text"
                name="district"
                value={profile.district}
                onChange={handleChange}
                className={`${logincss.inp} ${register.width40}`}
              />
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Shipping;

import React, { useEffect, useState } from "react";
import AdminHeader from "../../../Components/AdminHeader/AdminHeader";
import AdminSidebar from "../../../Components/AdminSidebar/AdminSidebar";
import categorycss from "../Category/Category.module.css";
import axios from "../../../Config/Axios";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Api_base } from "../../../Config/Constants";
import salecss from "../../Farmer/Sale/Sale.module.css";
const Order = () => {
  const dispatch = useDispatch();
  const { access, refresh } = useSelector((state) => state.Token);
  const [order, setOrder] = useState({});
  const [side, settoggleside] = useState(true);
  const [isdelete, setisDelete] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const accessToken = localStorage.getItem("access_token");
        const user = await axios("admin/get-admin/", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        console.log(user);
      } catch (e) {
        console.log(e);
        if (e.response.status == 401 || e.response.status == 403) {
          navigate("/admin/login");
        }
      }
    };
    fetchUser();

    const fetchorder = async () => {
      try {
        const accessToken = localStorage.getItem("access_token");

        const orders = await axios.get(`admin-main/orders-details/${id}/`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setOrder(orders.data);
        console.log(orders.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchorder();
  }, [access]);
  return (
    <React.Fragment>
      <div
        onClick={() => {
          return setisDelete(false), navigate(`/admin/orders/${id}`);
        }}
      >
        <AdminHeader
          onClick
          side={side}
          toggleSidebar={() => settoggleside((p) => !p)}
        />
      </div>

      <div className={categorycss.maindiv}>
        <AdminSidebar side={side} />
      </div>
      <div
        className={`${categorycss.content} ${
          side ? "" : categorycss.noSidebar
        }`}
        style={{ paddingTop: "100px" }}
      >
        <div
          className={`${categorycss.orderdetailcontent} m-auto   col-12 col-md-10 col-lg-8`}
        >
          <h5 className="text-center">Order number - {order.id}</h5>
          <div className={categorycss.orderdetailsubdiv}>
            <div>{order?.order?.user?.First_name}</div>
            <div></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Order;

import React, { useEffect, useState } from "react";
import AdminHeader from "../../../Components/AdminHeader/AdminHeader";
import AdminSidebar from "../../../Components/AdminSidebar/AdminSidebar";
import categorycss from "../Category/Category.module.css";
import axios from "../../../Config/Axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Api_base } from "../../../Config/Constants";
import salecss from "../../Farmer/Sale/Sale.module.css";
const Order = () => {
  const dispatch = useDispatch();
  const { access, refresh } = useSelector((state) => state.Token);
  const [order, setOrder] = useState([]);
  const [side, settoggleside] = useState(true);
  const [isdelete, setisDelete] = useState(false);

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

        const orders = await axios.get("admin-main/orders/", {
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
          return setisDelete(false), navigate(`/admin/orders`);
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
      >
        <div
          style={{ paddingTop: "130px" }}
          className="m-auto   col-12 col-md-10 col-lg-8  "
        >
          {order.map((o) => (
            <div
              onClick={() => navigate(`/admin/orders/${o.id}`)}
              className={salecss.cropflexdiv}
            >
              <img
                className={salecss.cropimg}
                alt=""
                src={Api_base + o?.crop?.image?.image}
              />
              <h6>{o.order.user.First_name}</h6>
              <h6>{o.crop.cropName}</h6>

              <h6>{o.order.created_at}</h6>
              <h6>{o.quantity} kg</h6>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Order;

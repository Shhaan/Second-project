import React, { useEffect, useState } from "react";
import UserHeader from "../../../Components/UserHeader/UserHeader";
import axios from "../../../Config/Axios";
import Userfooter from "../../../Components/userFooter/UserFooter";
import { Api_base } from "../../../Config/Constants";
import style from "./farmerprofile.module.css";
import { useLocation, useParams } from "react-router-dom";

const Aboutproduct = () => {
  const [farmer, setfarmer] = useState({});
  const [selectedParent, setSelectedParent] = useState(null);

  const { slug } = useParams();
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const { data } = await axios.get(
          `customer/profile/farmer-profile/${slug}/`
        );

        setfarmer(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchCategory();
  }, [slug]);

  return (
    <div>
      <UserHeader />
      <div
        className="py-4 pt-5 text-center"
        style={{
          width: "100%",
          background: "#77E87B",
          opacity: "0.8",
        }}
      >
        <div className={style.container}>
          <div>
            <div className={style.leftColumn}>
              <div className={style.profileHeader}>
                <img
                  className={style.profileImage}
                  src={farmer?.farmer_photo}
                  alt="Profile"
                />
                <h1>{farmer?.user?.First_name + farmer?.user?.Last_name}</h1>
              </div>
              <div className={style.actionButtons}>
                <button className={style.messageButton}>Message</button>
                <button className={style.followButton}>Follow</button>
              </div>
              <div className={style.bioSection}>
                <p>
                  <strong>Bio:</strong> {farmer?.Bio}
                </p>
                <p>
                  <strong>Cultivating crops:</strong>{" "}
                  {farmer?.cultivatingCrop?.Cropname}
                </p>

                <p>
                  <strong>Location:</strong> {farmer?.Location}
                </p>
              </div>
            </div>

            <div className={style.reviewsSection}>
              <h4>Reviews</h4>
              <div className={style.review}>
                <p>
                  <strong>Shan:</strong> This is a nice farmer and his crops are
                  genuine
                </p>
                <div className={style.rating}>
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                </div>
              </div>
              <div className={style.addReview}>
                <p>Add review</p>
                <div className={style.rating}>
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={style.rightColumn}>
              <div className={style.fieldPhotos}>
                <h4>Field photos</h4>
                <div className={style.photos}>
                  <img src="field_photo_1_url" alt="Field 1" />
                  <img src="field_photo_2_url" alt="Field 2" />
                </div>
              </div>
              <div className={style.sellingCrops}>
                <h4>Selling crops</h4>
                <div className={style.cropItem}>
                  <img src="crop_image_url" alt="Crop" />
                  <p>Corn</p>
                  <p>Field corn</p>
                  <p>100/kg</p>
                </div>
                <div className={style.cropItem}>
                  <img src="crop_image_url" alt="Crop" />
                  <p>Corn</p>
                  <p>Field corn</p>
                  <p>100/kg</p>
                </div>
                <div className={style.cropItem}>
                  <img src="crop_image_url" alt="Crop" />
                  <p>Corn</p>
                  <p>Field corn</p>
                  <p>100/kg</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Userfooter />
    </div>
  );
};

export default Aboutproduct;

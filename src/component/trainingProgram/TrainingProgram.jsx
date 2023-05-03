import React, { Fragment, useState } from "react";
import "../../App.css";
import styles from "./TrainingProgram.module.css";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import { FiArrowRightCircle } from "react-icons/fi";

 const data = [
  {
    img: "https://images.pexels.com/photos/903171/pexels-photo-903171.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "Yoga",
  },
  {
    img: "https://images.pexels.com/photos/1144864/pexels-photo-1144864.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "Body Building",
  },
  {
    img: "https://images.pexels.com/photos/791764/pexels-photo-791764.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "Aerobic",
  },
  {
    img: "https://images.pexels.com/photos/3775593/pexels-photo-3775593.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: " Flexibility",
  },
  {
    img: "https://images.pexels.com/photos/4046704/pexels-photo-4046704.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "Cardio",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Lasha_Talakhadze_Rio_2016.jpg/1200px-Lasha_Talakhadze_Rio_2016.jpg",
    text: "Weightlifting",
  },
  {
    img: "https://images.pexels.com/photos/348489/pexels-photo-348489.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "Gymnastic",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0052/7043/7978/articles/bodyweight-squats-benefits-forms.jpg?v=1634856149",
    text: "Squat",
  },
  {
    img: "https://media.healthnews.com/images/featured/2022/09/running-woman-forest-day.jpg",
    text: "Jogging",
  }
];
export default function TrainingProgram() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChangeLeft = () => {
    setCurrentIndex(currentIndex === 0 ? data.length - 3 : currentIndex - 1);
  };

  const handleSlideChangeRight = () => {
    setCurrentIndex(currentIndex === data.length - 3 ? 0 : currentIndex + 1);
  };
  // console.log(currentIndex);

  return (
    <Fragment>
      <div className={styles.mainContainer}>
        <h1>Training Program</h1>
        <div className={styles.carousal_div}>
          {window.screen.width > 840 ? 
         data.slice(currentIndex, currentIndex + 3).map((ele, index) => {
            return (
              <div
                key={index}
                className={styles.carousal}
                //   style={{ backgroundImage: `url(${ele.img}) center cover` }}
              >
                <b className={styles.imgText}>{ele.text}</b>
                <img src={ele.img} alt={`Slide${index}`} />
              </div>
            );
          })
          :
          data.map((ele, index) => {
            return (
              <div
                key={index}
                className={styles.carousal}
                //   style={{ backgroundImage: `url(${ele.img}) center cover` }}
              >
                <b className={styles.imgText}>{ele.text}</b>
                <img src={ele.img} alt={`Slide${index}`} />
              </div>
            );
          })
          }
        </div>
        <div className={styles.buttonContainer}>
            <MdArrowBackIosNew  className={styles.icon}
        onClick={handleSlideChangeLeft}

            />
          
          <span>
            See All <FiArrowRightCircle />
          </span>
            <MdArrowForwardIos className={styles.icon}
        onClick={handleSlideChangeRight}

            />
          
        </div>
      </div>
    </Fragment>
  );
}

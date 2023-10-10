import React, { useState } from "react";
import "./Compaing.css";
import axios from "axios";
import upload from "../../utils/upload";
import newRequest from "../../utils/newRequest";
import AdminNav from "../UserNav";

const Compaing = () => {
  //   const [milestoneImages, setMilestoneImages] = useState([]);
  //   const [progressImages, setProgressImages] = useState([]);

  //   // Function to handle image preview with size control
  //   function previewImages(input, setImages) {
  //     const maxWidth = 200;
  //     const maxHeight = 200;

  //     const imagePromises = Array.from(input.files).map((file) => {
  //       return new Promise((resolve) => {
  //         const reader = new FileReader();

  //         reader.onload = function (e) {
  //           const img = new Image();
  //           img.src = e.target.result;

  //           img.onload = function () {
  //             const canvas = document.createElement("canvas");
  //             const ctx = canvas.getContext("2d");
  //             let width = img.width;
  //             let height = img.height;

  //             if (width > height) {
  //               if (width > maxWidth) {
  //                 height *= maxWidth / width;
  //                 width = maxWidth;
  //               }
  //             } else {
  //               if (height > maxHeight) {
  //                 width *= maxHeight / height;
  //                 height = maxHeight;
  //               }
  //             }

  //             canvas.width = width;
  //             canvas.height = height;
  //             ctx.drawImage(img, 0, 0, width, height);

  //             resolve(canvas.toDataURL());
  //           };
  //         };

  //         reader.readAsDataURL(file);
  //       });
  //     });

  //     Promise.all(imagePromises).then((dataURLs) => {
  //       setImages(dataURLs);
  //     });
  //   }

  //   const handleMilestoneImagesChange = (e) => {
  //     previewImages(e.target, setMilestoneImages);
  //   };

  //   const handleProgressImagesChange = (e) => {
  //     previewImages(e.target, setProgressImages);
  //   };
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    instituteName: "",
    instituteType: "",
    address: "",
    description: "",
    milestones: "",
    milimg: [],
    currentProgress: "",
    proimg: [],
  });
  console.log(formData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = await upload(file);

    try {
      await newRequest.post("/campaign", {
        ...formData,
        milimg: url,
        proimg: url,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {/* <AdminNav /> */}
      <div className="Campaing-container">
        <h1>Create a Campaign</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={handleInputChange}
            value={formData.title}
            required
          />

          <label htmlFor="institute-name">Institute Name:</label>
          <input
            type="text"
            name="instituteName"
            onChange={handleInputChange}
            value={formData.instituteName}
            required
          />

          <label htmlFor="institute-type">Institute Type:</label>
          <input
            type="text"
            name="instituteType"
            onChange={handleInputChange}
            value={formData.instituteType}
            required
          />

          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            name="address"
            onChange={handleInputChange}
            value={formData.address}
            required
          ></textarea>

          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            onChange={handleInputChange}
            value={formData.description}
            required
          ></textarea>

          <label htmlFor="milestones">Milestones:</label>
          <textarea
            id="milestones"
            name="milestones"
            onChange={handleInputChange}
            value={formData.milestones}
            required
          ></textarea>

          <label htmlFor="milestone-images">Milestone Images:</label>
          <input
            type="file"
            id="milestone-images"
            name="milimg"
            onChange={(e) => setFile(e.target.files[0])}
            multiple
            //   onChange={handleMilestoneImagesChange}
          />
          <br />
          <div id="milestone-images-preview">
            {/* {milestoneImages.map((dataURL, index) => ( */}
            <img
              //   key={index}
              //   src={dataURL}
              className="preview-image"
              //   alt={`Milestone ${index}`}
            />
            {/* //   ))} */}
          </div>
          <br />

          <label htmlFor="current-progress">Current Progress:</label>
          <textarea
            id="current-progress"
            name="currentProgress"
            onChange={handleInputChange}
            value={formData.currentProgress}
            required
          ></textarea>
          <br />

          <label htmlFor="progress-images">Progress Images:</label>
          <input
            type="file"
            id="progress-images"
            name="proimg"
            onChange={(e) => setFile(e.target.files[0])}
            //   multiple
            //   onChange={handleProgressImagesChange}
          />
          <div id="progress-images-preview">
            {/* {progressImages.map((dataURL, index) => ( */}
            <img
              // key={index}
              // src={dataURL}
              className="preview-image"
              //   alt={`Progress ${index}`}
            />
            {/* ))} */}
          </div>

          <button type="submit" id="close-campaign">
            Submit
          </button>
          {/* <button type="button" id="donate">
            Donate
          </button> */}
        </form>
      </div>
    </>
  );
};

export default Compaing;

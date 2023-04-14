import React, { useState } from "react";
import { MyGrid } from "../lodging/CustomStyled";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import ImageUploading from "react-images-uploading";
import { Button } from "@mui/material";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import { useEffect } from "react";
function ImageAdder({ text }) {
  const [images, setImages] = useState([]);
  const onChange = (imageList) => {
    // data for submit
    setImages(imageList);
  };
  const handleRemove = (indexToRemove) => {
    setImages(
      images.filter((image, index) => {
        if (indexToRemove != index) {
          console.log(index + "    " + indexToRemove);
          return image;
        }
      })
    );
  };
  useEffect(() => {
    console.log(images);
  }, [images]);
  return (
    <div>
      <h2 style={{fontWeight: 700, fontSize: "32px", lineHeight: "39px", color :"#0C1424"}} >{text}</h2>

      {images.length > 0 ? (
        <MyGrid container spacing={3}>
          <MyGrid item xs={8}>
            <Splide
              options={{
                perPage: 2,
                arrows: false,
                pagination: true,
                gap: "2rem",
                drag: "free",
                //   type: "loop",
                height: "30vh",
              }}
            >
              {images.map((image, index) => (
                <SplideSlide key={index}>
                  <ImageContainer>
                    <span
                      onClick={() => {
                        handleRemove(index);
                      }}
                    >
                      X
                    </span>
                    <img
                      style={{ objectFit: "cover", height: "100%" }}
                      src={image["data_url"]}
                      alt=""
                    />
                  </ImageContainer>
                </SplideSlide>
              ))}
            </Splide>
          </MyGrid>
          <MyGrid item xs={4}>
            <ImageUploading
              multiple
              value={images}
              onChange={onChange}
              maxNumber={6}
              dataURLKey="data_url"
            >
              {({ onImageUpload }) => (
                // write your building UI
                <div>
                  <AddImage onClick={onImageUpload} color="primary">
                    <AddIcon sx={{ fontSize: 80 }} />
                    <h3>Add image</h3>
                  </AddImage>
                </div>
              )}
            </ImageUploading>
          </MyGrid>
        </MyGrid>
      ) : (
        <MyGrid container>
          <MyGrid item xs={4}>
            <ImageUploading
              multiple
              value={images}
              onChange={onChange}
              maxNumber={6}
              dataURLKey="data_url"
            >
              {({ onImageUpload }) => (
                // write your building UI
                <div>
                  <AddImage onClick={onImageUpload} color="primary">
                  <h3 style={{color: "#E22357", fontWeight: "700", fontSize: "60px", lineHeight: "24px"}}>+</h3>
                    <AddIcon sx={{ fontSize: 80 }} />
          
                    <h3 style={{color: "#E22357", fontWeight: "700", fontSize: "20px", lineHeight: "24px", letterSpacing: "0.2em"}}>Add image</h3>
                  </AddImage>
                </div>
              )}
            </ImageUploading>
          </MyGrid>
        </MyGrid>
      )}
    </div>
  );
}

export default ImageAdder;

const AddImage = styled(Button)`
  /* border: 4px #e42651 dashed; */
  width: 100%;
  border-radius: 16px;
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 12px;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='16' ry='16' stroke='%23E42651FF' stroke-width='4' stroke-dasharray='30%2c30' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
`;
const ImageContainer = styled.div`
  position: relative;
  height: 100%;
  img {
    position: absolute;
    left: 0;
    top: 0;
    object-fit: cover;
    height: 100%;
  }
  span {
    position: absolute;
    right: 16px;
    top: 16px;
    border: 2px solid white;
    border-radius: 100%;
    color: white;
    z-index: 10;
    cursor: pointer;
    font-weight: bold;
    padding: 4px;
    :hover {
      background-color: rgba(255, 255, 255, 0.5);
    }
  }
`;

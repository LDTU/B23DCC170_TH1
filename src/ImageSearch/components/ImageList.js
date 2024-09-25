import React from "react";

const ImageList = ({ images }) => {
  return (
    <div style={{ height: "80vh", overflowY: "scroll", marginTop: 20 }}>
      {images.length > 0 ? (
        <ul style={{ padding: 0, listStyleType: "none", display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {images.map((image) => (
            <li key={image.id} style={{ margin: 10 }}>
              <img
                src={image.previewURL}
                alt={image.tags}
                style={{ width: 300, height: 200, borderRadius: 10, boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>Không tìm thấy hình ảnh.</p>
      )}
    </div>
  );
};

export default ImageList;

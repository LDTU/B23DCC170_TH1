import React, { useState } from "react";
import ImageList from "./components/ImageList";
import axios from "axios";

const ImageSearchApp = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchImages = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?key=46166847-40e887f0f1cbd269c98d3b401&q=${query.trim()}&image_type=photo`
      );
      setImages(response.data.hits);
    } catch (err) {
      setError("Có lỗi xảy ra khi tìm kiếm hình ảnh.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      fetchImages();
    }
  };

  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f0f0f0",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ marginBottom: 20 }}>Tìm kiếm hình ảnh</h1>
      <form onSubmit={handleSearch} style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Tìm kiếm hình ảnh"
          style={{
            padding: 10,
            width: "60%",
            borderRadius: 5,
            border: "1px solid #ccc",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            marginRight: 10,
          }}
        />
        <button
          type="submit"
          style={{
            padding: 10,
            borderRadius: 5,
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
          }}
        >
          Tìm
        </button>
      </form>
      {loading ? (
        <p>Đang tải hình ảnh...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <ImageList images={images} />
      )}
    </div>
  );
};

export default ImageSearchApp;

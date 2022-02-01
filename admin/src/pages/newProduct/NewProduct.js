import "./newProduct.css";
import React, { useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { addProduct } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";
export default function NewProduct() {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleCat = (e) => {
    setCat(e.target.value);
  };
  const handleSelect = ({ target: { name, value, checked } }) => {
    if (name === "fragrance-free") {
      checked === true && setProduct([...product, name]);
      checked === false && setProduct([product.filter((obj) => obj !== name)]);
    } else if (name === "cruelty-free") {
      checked === true && setProduct([...product, name]);
      checked === false && setProduct([product.filter((obj) => obj !== name)]);
    } else if (name === "paraben-free") {
      checked === true && setProduct([...product, name]);
      checked === false && setProduct([product.filter((obj) => obj !== name)]);
    } else if (name === "dermatologically-tested") {
      checked === true && setProduct([...product, name]);
      checked === false && setProduct([product.filter((obj) => obj !== name)]);
    }
  };
  const handleClick = (e) => {
    e.preventDefault();
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const prod = {
            ...inputs,
            img: downloadURL,
            product: product,
            categories: [cat],
          };
          console.log(prod);
          addProduct(prod, dispatch);
        });
      }
      // console.log(inputs, product, cat);
    );
  };
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="Foundation"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            type="text"
            placeholder="description . . ."
            name="desc"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input
            type="text"
            placeholder="₹ 100"
            onChange={handleChange}
            name="price"
          />
        </div>
        <div className="addProductItem">
          <label>Categories</label>
          <input
            type="radio"
            value="skincare"
            name="categories"
            onChange={handleCat}
          />{" "}
          Skin-care
          <input
            type="radio"
            value="haircare"
            name="categories"
            onChange={handleCat}
          />{" "}
          Hair-care
          <input
            type="radio"
            value="makeup"
            name="categories"
            onChange={handleCat}
          />{" "}
          Make-up
        </div>
        <div className="addProductItem">
          <label>Size</label>
          <select name="size" onChange={handleChange}>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Type</label>
          <input
            type="checkbox"
            name="fragrance-free"
            onClick={handleSelect}
          />{" "}
          Fragrance-free
          <input
            type="checkbox"
            name="cruelty-free"
            onClick={handleSelect}
          />{" "}
          Cruelty-free
          <input
            type="checkbox"
            name="paraben-free"
            onClick={handleSelect}
          />{" "}
          Paraben-free
          <input
            type="checkbox"
            name="dermatologically-tested"
            onClick={handleSelect}
          />
          Dermatologically-free
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <select name="inStock" onChange={handleChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <button className="addProductButton" onClick={handleClick}>
          Create
        </button>
      </form>
    </div>
  );
}

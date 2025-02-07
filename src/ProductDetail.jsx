import React from "react";
import styles from "./ProductDetail.module.css";
import "./ProductDetail.css";
// import Footer from "./footer";

const ProductDetail = () => {
  const inlineStyles = {
    productInfo: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "20px",
    },
    productPrice: {
      fontSize: "1.7rem",
      color: "#FF5722",
      margin: "10px 0",
    },
    // addToCartButton: {
    //   backgroundColor: "#4CAF50",
    //   color: "#fff",
    //   padding: "10px 20px",
    //   border: "#45a049",
    //   borderRadius: "5px",
    //   cursor: "pointer",
    // },
    // orderNowButton: {
    //   backgroundColor: "#FF5722",
    //   color: "#fff",
    //   padding: "10px 20px",
    //   border: "none",
    //   borderRadius: "5px",
    //   cursor: "pointer",
    // },
  };


  return (
    <div>
      <div className='header'>
      <div className="logo">
            <img className="" src="https://www.linsoul.com/cdn/shop/files/logo-ls-black.png?v=1645312793&width=300" alt="NMIXX LOGO" />
      </div>
        <nav className='navbar'>
          <a href='#home'>Home</a>
          <a href='#products'>Products</a>
          <a href='#about'>About</a>
          <a href='#contact'>Contact</a>
        </nav>
      </div><br />
      <div className='product-detail'>
        <div className='product-image'>
          <img src='https://www.linsoul.com/cdn/shop/products/7_8707e876-8c9b-4f99-9b1d-7ef11d201263.jpg?v=1703581463&width=713' alt='Product' />
          <div className='product-variation'>
            <img src='https://www.linsoul.com/cdn/shop/products/6_ebcf3426-889b-4378-b465-b935a83013f4.jpg?v=1703581463&width=713 ' alt='Variation 1' />
            <img src='https://www.linsoul.com/cdn/shop/products/2_365b52e9-265e-4ad4-a746-598bc5217b3a.jpg?v=1703581463&width=713' alt='Variation 2' />
            <img src='https://www.linsoul.com/cdn/shop/products/3_6d385851-26e3-4963-83d3-cf4ace2e6946.jpg?v=1703581463&width=713' alt='Variation 3' />
          </div>
        </div>
        <div className={styles.productInfo}>
          <h2 className='product-title'>EPZ Q1</h2>
          <p1 className= 'product-desc'>HIFI Bass 13mm Titanium-plated Composite Diaphragm In-Ear Monitor</p1><br />
          <p style={inlineStyles.productPrice}>Rp. 674.051,00</p>
          <div className='product-rating'>
            <span>Rating: ★★★★☆</span>
          </div>
          <div className='product-size'>
            <label>Type  </label>
            <select>
              <option value='Mic'>Mic</option>
              <option value='No MIc'>No Mic</option>
            </select>
          </div>
          <div className='product-quantity'>
            <label>Jumlah </label>
            <input type='number' min='1' defaultValue='1' />
          </div>
          <div className='product-buttons'>
            <button style={inlineStyles.addToCartButton}>
              Tambah ke Keranjang
            </button>
            <button style={inlineStyles.orderNowButton}>Pesan</button>
          </div>
          <div className='product-description'></div>
            <h1>Deskripsi Produk</h1>
              <h2>Rich details</h2>
              <p>The composite titanium diaphragm speaker can provide high-resolution audio performance, making the details in the music richer and clearer.</p> <br/>
              <h2>Wide frequency response</h2>
              <p>The composite titanium diaphragm speaker of the Q1 headset has a wide frequency response range, so that the low frequency, intermediate frequency, and high frequency can be well performed.</p><br/>
              <h2>Three-dimensional sense</h2>
              <p>The cavity using resin 3D printing technology helps to provide an optimized acoustic space, making the sound field more three-dimensional and wide.</p><br/>
              <h2>High-quality appearance</h2>
              <p>The panel combined with carbon fiber and gold foil not only has a stylish appearance but also provides additional durability and stability.</p>
          </div>
        </div><br /><br />
        <footer className="footer">
      <div className="footer-container">
        {/* Bagian Kontak */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: support@example.com</p>
          <p>Phone: +62 9090-9090</p>
          <p>Address: Jl. Jalanin bareng No. 123, Jakarta, Indonesia</p>
        </div>

        {/* Bagian Navigasi */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#products">Products</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Bagian Media Sosial */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© 2024 ChestaRidho. All rights reserved.</p>
      </div>
    </footer>
      </div>

);
};

export default ProductDetail;
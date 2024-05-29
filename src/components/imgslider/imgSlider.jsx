// "use client";

// // import React, { useState } from "react";

// // export default function imgSlider() {
// //   const ImageSlider = ({ images }) => {
// //     const [currentIndex, setCurrentIndex] = useState(1);

// //     const previous = () => {
// //       if (currentIndex > 1) {
// //         setCurrentIndex(currentIndex - 1);
// //       }
// //     };

// //     const forward = () => {
// //       if (currentIndex < images.length) {
// //         setCurrentIndex(currentIndex + 1);
// //       }
// //     };

// //     return (
// //       <div className={styles.slider}>
// //         <div className={styles.imageContainer}>
// //           {images.map((image, index) => (
// //             <img
// //               key={image}
// //               src={image}
// //               alt={`Image ${index + 1}`}
// //               className={`${styles.image} ${
// //                 currentIndex === index + 1 ? styles.active : ""
// //               }`}
// //             />
// //           ))}
// //         </div>
// //         <button
// //           className={styles.button}
// //           onClick={previous}
// //           disabled={currentIndex === 1}
// //         >
// //           <i className="fas fa-chevron-left"></i>
// //         </button>
// //         <button
// //           className={styles.button}
// //           onClick={forward}
// //           disabled={currentIndex === images.length}
// //         >
// //           <i className="fas fa-chevron-right"></i>
// //         </button>
// //         <div className={styles.indicator}>
// //           <span>{currentIndex}</span> / <span>{images.length}</span>
// //         </div>
// //       </div>
// //     );
// //   };
// // }


// import React, { useState } from "react";


// const ImageSlider = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(1);

//   const previous = () => {
//     if (currentIndex > 1) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   const forward = () => {
//     if (currentIndex < images.length) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   return (
//     <div>
//       <div>
//         {images.map((image, index) => (
//           <img
//             key={image}
//             src={image}
//             alt={`Image ${index + 1}`}
//             className={`${styles.image} ${
//               currentIndex === index + 1 ? styles.active : ""
//             }`}
//           />
//         ))}
//       </div>
//       <button
//         className={styles.button}
//         onClick={previous}
//         disabled={currentIndex === 1}
//       >
        
//       </button>
//       <button
//         className={styles.button}
//         onClick={forward}
//         disabled={currentIndex === images.length}
//       >
      
//       </button>
//       <div className={styles.indicator}>
//         <span>{currentIndex}</span> / <span>{images.length}</span>
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;
import './index.css';
import {gsap} from 'gsap';

import img1 from './images/img1.webp';
import img2 from './images/img2.webp';
import img3 from './images/img3.webp';
import img4 from './images/img4.webp';
import img5 from './images/img5.webp';
import img6 from './images/img6.webp';
import img7 from './images/img7.webp';
import img8 from './images/img8.webp';
import img9 from './images/img9.webp';
import img10 from './images/img10.webp';
import img11 from './images/img11.webp';
import img12 from './images/img12.webp';
import img13 from './images/img13.webp';
import img14 from './images/img14.webp';
import img15 from './images/img15.webp';
import img16 from './images/img16.webp';
import img17 from './images/img17.webp';
import img18 from './images/img18.webp';
import img19 from './images/img19.webp';
import img20 from './images/img20.webp';
import img21 from './images/img21.webp';
import img22 from './images/img22.webp';
import img23 from './images/img23.webp';
import img24 from './images/img24.webp';
import img25 from './images/img25.webp';
import img26 from './images/img26.webp';
import img27 from './images/img27.webp';
import img28 from './images/img28.webp';
import img29 from './images/img29.webp';
import img30 from './images/img30.webp';
import img31 from './images/img31.webp';
import img32 from './images/img32.webp';
import img33 from './images/img33.webp';
import img34 from './images/img34.webp';
import img35 from './images/img35.webp';
import img36 from './images/img36.webp';
import img37 from './images/img37.webp';
import img38 from './images/img38.webp';
import img39 from './images/img39.webp';
import img40 from './images/img40.webp';
import img41 from './images/img41.webp';
import img42 from './images/img42.webp';
import img43 from './images/img43.webp';
import img44 from './images/img44.webp';
import img45 from './images/img45.webp';
import img46 from './images/img46.webp';
import img47 from './images/img47.webp';

import {useRef, useState, useLayoutEffect} from 'react';

function App() {

  const imageGallery = useRef(null);
  const mainText = useRef(null);
  const [play, setPlay] = useState(true);

  const imageFiles= [
    img23, img1, img33, img39, img14, img10, img47, img32, img29, img26, img17, img18, img20, img22, img2, img6, img30, img21, img5, img43, img24, img44, img38, img9, img40, img3, img34, img7, img15, img35, img45, img31, img42, img25, img8, img12, img11, img4, img43, img41, img46, img13, img19, img36, img37, img16, img27, img28
  ]
  const imagePerRow = 3;
  var target = 0;
  var scrollInterval = 1;
  var bottomToTop = true;
  const rowLength = Math.round((imageFiles.length + 1) / imagePerRow);
  const totalRows = new Array();

  const string = "Adrian Gonzalez";
  const text = string.split("").map((e, i) => {
    return (<div key={i} className={`letter-holder${e.toUpperCase() === e && e.trim() !== "" ? "" : " lower"}`}><div className={`letter`}>{e}</div></div>);
  });

  useLayoutEffect(() => {

    for (var row = 1; row <= rowLength; row++){

      var currentRow = document.createElement("div");
      currentRow.className = `gallery-row row-${(row-1)%4}`;
      var rowStart = (row-1)*imagePerRow;
      var rowEnd = (imageFiles.length / (imagePerRow * row)) >= 1 ? row * imagePerRow - 1 : ((row - 1) * imagePerRow + (imageFiles.length % imagePerRow) - 1);

      for (var i = rowStart; i <= rowEnd; i++){
        var currentImageHolder = document.createElement("div");
        currentImageHolder.className = `image-holder ${Math.floor(Math.random() * 2) === 1 ? "over" : ""}`;
        var currentImage = document.createElement("img");
        currentImage.className = "gallery-img";
        currentImage.setAttribute("draggable", false);
        currentImage.src = imageFiles[i];
        currentImageHolder.appendChild(currentImage);        
        currentRow.appendChild(currentImageHolder);
      }

      imageGallery.current.appendChild(currentRow);
      totalRows.push(currentRow);

    }

    totalRows.map((e) => {
      var clone = e.cloneNode(true);
      clone.classList.add("clone");
      imageGallery.current.appendChild(clone);
      return null;
    });

    const scroll = () => {

      target = window.scrollY;

      if (target <= 0) target = (imageGallery.current.offsetHeight/4) - 1;
      else if (target >= imageGallery.current.offsetHeight / 4) target = 1;

      if (play)
      bottomToTop ? target += scrollInterval : target -= scrollInterval;
      window.scrollTo(0, target);
      if (play){
      imageGallery.current.style.transform = `translateY(-${target}px)`;
      mainText.current.style.transform = `translateY(${target * 2}px)`;
      requestAnimationFrame(scroll);
      }
    }

    const init = () => {
      document.body.style.height = `${imageGallery.current.getBoundingClientRect().height}px`;
    }

    window.addEventListener('wheel', (e) => {if (e.deltaY < 0) bottomToTop = false; else bottomToTop = true;})
    window.addEventListener('resize', init);
    window.addEventListener('load', () => {setTimeout(async () => {init(); scroll();}, 1000);});

    let ctx = gsap.context(() => {

      var tl = gsap.timeline();

      tl.to(".social-icon", {
        duration: .8,
        delay: 1,
        opacity: 1,
        y: 0,
        yPercent: 0,
        ease: "back.inOut",
        stagger: {
          amount: .1,
        }
      });  

      tl.to(".letter", {
        duration: .8,
        delay: 1,
        y: 0,
        yPercent: 0,
        ease: "back.inOut",
        stagger: {
          amount: .1,
        }
      }, "<");     

      tl.to(".lower", {
        duration: .8,
        width: 0,
        delay: 1,
        overflowX: 'clip',
        opacity: 0.1,
        ease: "power3.inOut",
      }, ">");  
      
      tl.to(".fb", {
        duration: .8,
        fontSize: '20vw',
        letterSpacing: '-0.1em',
        fontWeight: "600",
        ease: "back.inOut",
      }, "<"); 

      tl.to(".letter", {
        duration: .8,
        y: 0,
        yPercent: 0,
        ease: "power3.inOut",
      }, "<"); 

      tl.to(".image-holder", {
        duration: 1,
        scale: 1,
        ease: "power3.inOut",
        stagger: {
          amount: 5,
        }
      });


    });
    
    return () => ctx.revert();
    
  }, []);

  return (
    <>
      <div className="socials">
        <a href="https://www.instagram.com/adriangnnz/">
          <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M131 .11h197c22.71-.11 46.63-1.46 69 2.32 34.61 5.86 66.26 26.71 87.13 54.57 8.45 11.29 13.67 20.8 18.55 34 5.58 15.09 9.29 31.85 9.32 48v234c-.12 74.8-64.2 138.88-139 139H196c-24.58 0-57.53 1.54-81-2.43-31.43-5.33-61.16-23.48-81.7-47.57-15.18-17.81-25.9-40.04-30.49-63C-.49 382.52 0 367.6 0 351V192c0-23.49-1.51-55.65 2.61-78C10.51 71.29 40.06 33.24 79 14.26 98.12 4.94 110.66 3.33 131 .11Zm256 86.21c-6.61 1.49-12.04 3.9-16.91 8.77-20.19 20.2-7.25 56.19 21.91 56.9 9.94.24 19.87-3.47 26.53-11.08 13.85-15.81 9.49-41.94-9.53-51.53-7.21-3.65-14.12-3.92-22-3.06Zm-138 37.96c-16.48 2.37-23.55 2.44-40 8.41-29.78 10.82-54.73 33.54-69.69 61.31-27.05 50.22-16.97 114.48 22.73 154.99C185.67 373.1 220.26 387.6 254 388c19.23.22 38.37-4.04 56-11.58 13.55-5.79 23.91-13.27 35-22.84 44.39-38.35 55.21-108.48 27.69-159.58-16.66-30.94-43.29-52.99-76.69-63.66-13.13-4.19-33.31-7.33-47-6.06Zm-6 46.16c26.9-3.45 54.3 4.7 73.91 23.73 31.57 30.61 33.74 83.15 6.01 116.83-7.15 8.68-15.02 15.32-24.92 20.69-17.98 9.75-29.2 10.54-49 10.31-5.74-.07-10.48-1.21-16-2.63-27.7-7.13-49.7-28.47-58.92-55.37-4.45-12.97-4.1-19.8-4.08-33 .01-9.59 2.35-19.16 6.01-28 12.26-29.57 36-46.84 66.99-52.56Z"/></svg>
        </a>
        <a href="https://www.tiktok.com/@adriangnz">
        <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 651 750"><path d="M344 0h129v14c.02 15.65 5.67 37.43 11.45 52 19.37 48.82 61.81 88.4 111.55 105 12.95 4.32 29.33 8.98 43 9h12v128l-24-1.83c-46.56-4.66-83.49-13.97-125-36.48L473 251v268c-.04 24.41-8.32 60.3-17.4 83-9.35 23.39-25.92 50.35-42.77 69-30.68 33.97-72.5 60.17-116.83 71.85-14.38 3.78-38.19 7.13-53 7.15h-15c-33.64-.05-76.57-13.35-106-29.31-17.86-9.68-37.64-25.37-52-39.69-19.68-19.62-35.89-42.68-47.3-68l-8.01-19C8.55 576.39 1.22 542.48 1 524c-.55-47.66 8.22-90.78 33-132 22.14-36.83 50.45-64.91 88-85.86 27.63-15.42 57.67-24.56 89-28.42l18-1.72h18l22 2v131c-10.96-1.69-15.89-4.94-29-5h-8c-38.61.06-75.33 25.48-93.11 59-31.98 60.29 1.76 136.7 67.11 155.42 6.55 1.88 23.52 4.86 30 4.4 16.29-1.16 31.15-3.84 46-11.08 36.12-17.61 61.94-56.21 62-96.74V0Z"/></svg>
        </a>
        <a className="email" href="mailto:adriangnzphoto@gmail.com">
          <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 674 416"><path d="M83 0h492l16 1-44 28.31-140 90.11-48 30.92c-3.42 2.24-18.17 12.28-21 12.74-4.06.67-13.26-6.57-17-8.89l-46-29.61-40-25.89-89-57.35-42-27C97.73 10.25 88.27 4.91 83 0ZM1 36l22 13.95 58 37.36 160 102.74L300 228c11.2 7.38 23.02 16.97 37 16.97 13.92 0 24.86-9.1 36-16.28l58-37.27 68-43.73 105-67.38 42-27L672.88 36v353c-2.53 11.58-11.66 21.73-22.88 25.23-4.91 1.53-8.93 1.76-14 1.77H38c-21.65-.03-36.97-12.63-37-35V36Z"/></svg>
        </a>
      </div>
      <div className="content">
        <div ref={imageGallery} className="image-gallery">
        <div ref={mainText} className="fb">
          <div className='text-holder'>
          {text}
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default App;

import './index.css';
import {gsap} from 'gsap';

import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';
import img5 from './img5.jpg';
import {useRef, useState, useLayoutEffect} from 'react';

function App() {

  const imageGallery = useRef(null);
  const mainText = useRef(null);
  const [play, setPlay] = useState(true);

  const imageFiles= [
    img1, img3, img2, img5,img1, img3, img2, img5,
  ];
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

    const showImages = () => {

      var allImages = [...document.querySelectorAll('.gallery-img')];
      allImages.forEach((e, i) => {
        setTimeout(() => {
          e.classList.add("active");
        }, ((i) * 100))
      });

    }

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
    window.addEventListener('load', () => {setTimeout(async () => {init(); showImages(); scroll();}, 1000);});

  }, []);

  return (
    <>
      <div className="content">
        <div ref={imageGallery} className="image-gallery">
          <div ref={mainText} className='index-text'>
            Adrian Gonzalez
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

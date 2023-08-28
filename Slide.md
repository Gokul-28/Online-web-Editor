<div class="slider">
            <div class="slide">Slide 1</div>
            <div class="slide">Slide 2</div>
            <div class="slide">Slide 3</div>
            <!-- Add more slides as needed -->
          </div>    
/* Slider  */

.slider {
    width: 300px;
    overflow: hidden;
    white-space: nowrap;
  }
  
  .slide {
    display: inline-block;
    width: 300px;
    height: 200px;
    background-color: #3498db;
    color: white;
    text-align: center;
    line-height: 200px;
    font-size: 24px;
    transition: transform 0.5s ease-in-out;
  }
  
  /* Keyframes for sliding animation */
  @keyframes slide {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  
  /* Apply the animation to slides */
  .slider .slide {
    animation: slide 5s infinite;
  }
  
  /* Pause animation on hover */
  .slider:hover .slide {
    animation-play-state: paused;
  }



  <span id="element"></span>
    <script src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"></script>
    <script>
        var typed = new Typed('#element', {
            strings: ['<b>web Developer', '<b>graphics designer', '<b>Web designer'],
            typeSpeed: 50,
        });
    </script>





    <div class="image-container">
    <img src="your-image-url.jpg" alt="Animated Image">

  
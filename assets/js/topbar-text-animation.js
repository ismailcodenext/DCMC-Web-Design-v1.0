document.addEventListener("DOMContentLoaded", function() {
    const marquee = document.getElementById("marquee");
  
    marquee.addEventListener("mouseover", function() {
      marquee.stop();
    });
  
    marquee.addEventListener("mouseout", function() {
      marquee.start();
    });
  });
  
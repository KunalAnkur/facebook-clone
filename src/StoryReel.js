import React from "react";
import Story from "./Story";
import "./StoryReel.css";
function StoryReel() {
  return (
    <div class="storyReel">
      <Story
        image="https://piktochart.com/wp-content/uploads/2018/03/posterpro-christmas.jpg"
        profileScr="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
        title="Bruce Wayne"
      />
      <Story
        image="https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/vice-web.jpg"
        profileScr="https://buffer.com/library/content/images/library/wp-content/uploads/2015/03/adjust-tie.jpeg"
        title="Anthony"
      />
      <Story
        image="https://www.designer-daily.com/wp-content/uploads/2019/07/brisk-graphics-1.jpg"
        profileScr="https://i.pinimg.com/600x315/80/63/35/8063359effd01b990e653bb32a83485d.jpg"
        title="Ream"
      />
      <Story
        image="https://weandthecolor.com/wp-content/uploads/2012/10/Beast-in-a-Neon-Cage-Poster-by-Jon-Wong-4668.jpg"
        profileScr="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRhUwSzn4_0_-rxxjalDIXuA7C6g-HbBIINLQ&usqp=CAU"
        title="Tekish"
      />
    </div>
  );
}

export default StoryReel;

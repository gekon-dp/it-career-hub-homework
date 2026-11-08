import { useState } from "react";
import ImageComponent from "./components/ImageComponent/Index";
import VideoComponent from "./components/VideoComponent/Index";
import ParagraphsComponent from "./components/ParagraphsComponent/Index";
import ListsComponent from "./components/ListsComponent/Index";

function App() {
  return (
    <div>
      <ImageComponent></ImageComponent>
      <VideoComponent></VideoComponent>
      <ParagraphsComponent></ParagraphsComponent>
      <ListsComponent></ListsComponent>
    </div>
  );
}

export default App;

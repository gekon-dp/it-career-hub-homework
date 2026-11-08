import ReactPlayer from "react-player";

function VideoComponent() {
  return (
    <div>
      <ReactPlayer
        url="https://www.youtube.com/embed/mOfWjc3SP6A?si=UMtxTPpf7KETeMnz"
        controls={true}
        width="560px"
        height="315px"
      />
    </div>
  );
}

export default VideoComponent;

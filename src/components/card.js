export default function Card({ data }) {
  if (data.type === "image") return <CardImage imageUrl={data.image_url} />;
  else if (data.type === "video")
    return (
      <CardVideo
        videoImg={data.links[0].video_img}
        videoUrl={data.links[0].video}
      />
    );
  else if (data.type === "slide") {
    return data.links.map((d, index) => {
      if (d.type === "image")
        return <CardImage imageUrl={d.image_url} key={index} />;
      else if (d.type === "video")
        return (
          <CardVideo videoImg={d.video_img} videoUrl={d.video} key={index} />
        );

      return null;
    });
  }

  return <h1 style={{ textAlign: "center" }}>something is wrong gome!</h1>;
}

function CardImage({ imageUrl }) {
  return (
    <div className="card">
      <div className="image_container">
        <img src={imageUrl} alt="" />
      </div>
      <a href={`${imageUrl}&dl=1`}>download</a>
    </div>
  );
}

function CardVideo({ videoImg, videoUrl }) {
  return (
    <div className="card">
      <div className="image_container">
        <img src={videoImg} alt="" />
      </div>
      <a href={`${videoUrl}&dl=1`}>download</a>
    </div>
  );
}

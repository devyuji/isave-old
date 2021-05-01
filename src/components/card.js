function Card({ data }) {
  if (data.type === "image")
    return <CardImage imageUrl={data.image_url} imageSrc={data.image_src} />;
  else if (data.type === "video")
    return (
      <CardVideo
        videoUrl={data.links[0].video}
        imageSrc={data.links[0].image_src}
      />
    );
  else if (data.type === "slide") {
    return data.links.map((d, index) => {
      if (d.type === "image")
        return (
          <CardImage
            imageUrl={d.image_url}
            imageSrc={d.image_src}
            key={index}
          />
        );
      else if (d.type === "video")
        return (
          <CardVideo videoUrl={d.video} imageSrc={d.image_src} key={index} />
        );

      return null;
    });
  }

  return <h1 style={{ textAlign: "center" }}>something is wrong gome!</h1>;
}

function CardImage({ imageUrl, imageSrc }) {
  return (
    <div className="card">
      <div className="image_container">
        <img src={`data:image/png;base64,${imageSrc}`} alt="" />
      </div>
      <a href={`${imageUrl}&dl=1`}>download</a>
    </div>
  );
}

function CardVideo({ videoUrl, imageSrc }) {
  return (
    <div className="card">
      <div className="image_container">
        <img src={`data:image/png;base64,${imageSrc}`} alt="" />
      </div>
      <a href={`${videoUrl}&dl=1`}>download</a>
    </div>
  );
}

export default Card;

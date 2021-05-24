import { FC } from "react";

interface CardProps {
  data: any;
}

interface CardImageProps {
  imageUrl: string;
  imageSrc: string;
}

interface CardVideoProps {
  videoUrl: string;
  imageSrc: string;
}

const Card: FC<CardProps> = ({ data }) => {
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
    return data.links.map((d: any, index: number) => {
      if (d.type === "image")
        return (
          <CardImage
            imageUrl={d.image_url}
            imageSrc={d.image_src}
            key={index}
          />
        );
      else
        return (
          <CardVideo videoUrl={d.video} imageSrc={d.image_src} key={index} />
        );
    });
  }

  return null;
};

const CardImage: FC<CardImageProps> = ({ imageUrl, imageSrc }) => {
  return (
    <div className="card">
      <div className="image_container">
        <img src={`data:image/png;base64,${imageSrc}`} alt="" />
      </div>
      <a href={`${imageUrl}&dl=1`}>download</a>
    </div>
  );
};

const CardVideo: FC<CardVideoProps> = ({ videoUrl, imageSrc }) => {
  return (
    <div className="card">
      <div className="image_container">
        <img src={`data:image/png;base64,${imageSrc}`} alt="" />
      </div>
      <a href={`${videoUrl}&dl=1`}>download</a>
    </div>
  );
};

export default Card;

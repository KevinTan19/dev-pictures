import Image from "next/image";
import Link from "next/link";

const CardVideo = (props) => {
  const { data } = props;
  return (
    <Link href={`/${data.id}`}>
      <div className="space-y-2">
        <Image
          src={data.thumbnail}
          alt={`image ${data.name}`}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
        <p className="font-semibold">{data.name}</p>
      </div>
    </Link>
  );
};

export default CardVideo;

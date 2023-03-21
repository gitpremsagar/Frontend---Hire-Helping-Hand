import Image from "next/image";

export default function ProposalThumbnail() {
  return (
    <Image
      width={400}
      height={350}
      src={`/dummy-proposal-thumbnail/dummy-proposal-thumbnail.png`}
      alt="mycustomImage"
      layout="responsive"
      priority={false}
    />
  );
}

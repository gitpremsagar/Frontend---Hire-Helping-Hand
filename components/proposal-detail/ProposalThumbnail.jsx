import Image from "next/image";

export default function ProposalThumbnail() {
  return (
    <Image
      width={400}
      height={350}
      src={`/service-offer-images/dummy.jpg`}
      alt="mycustomImage"
      layout="responsive"
      priority={false}
    />
  );
}

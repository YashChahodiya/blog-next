import { useParams } from "next/navigation";

const Index = () => {
  const slug = useParams();
  //   console.log(slug?.slug);

  return <div className="h-screen">{slug?.slug}</div>;
};

export default Index;

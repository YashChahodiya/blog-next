const users = () => {
  return <div>SSR</div>;
};

export const getServerSideProps = async () => {
  return {};
};

const oneDay = 24 * 60 * 60 * 1000;
console.log("oneDay");

export default users;

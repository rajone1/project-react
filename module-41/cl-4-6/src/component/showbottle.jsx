import "./";

const Showbottle = ({ bottle }) => {
  const { price, img, name } = bottle;

  return (
    <div className="show-bottle">
      <h2>bottle:{name}</h2>
      <img src={img} alt="" />
      <h2>price:{price}</h2>
    </div>
  );
};

export default Showbottle;

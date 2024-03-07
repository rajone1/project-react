import "./showbottle.css";

const Showbottle = ({ bottle, addcart }) => {
  const { price, img, name } = bottle;

  return (
    <div className="showbottle">
      <h2>bottle:{name}</h2>
      <img src={img} alt="" />
      <h2>price:{price}</h2>
      <button onClick={() => addcart()}>purchase</button>
    </div>
  );
};

export default Showbottle;

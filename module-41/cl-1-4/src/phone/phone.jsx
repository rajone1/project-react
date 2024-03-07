const Phone = ({ allphone }) => {
  const { name, price } = allphone;
  return (
    <div>
      <h2>name: {name}</h2>
      {/* <h2>id: {id}</h2> */}
      <h2>price: {price}</h2>
    </div>
  );
};

// export default Phone;
export { Phone };

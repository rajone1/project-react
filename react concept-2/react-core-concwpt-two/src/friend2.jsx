export default function Friendsad({ friendshow }) {
  console.log(friendshow);
  const { name, email } = friendshow;
  return (
    <div className="box">
      <h3>name:{name}</h3>
      <h3>email:{email}</h3>
    </div>
  );
}

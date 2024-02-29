export default function Postdisplay({ post }) {
  console.log(post);

  const { title, id, userId } = post;

  const addcss = {
    color: "blue",
  };
  return (
    <div style={addcss}>
      <h3> titale: {title}</h3>
      <p>user id: {id}</p>
      <p>post id: {userId}</p>
    </div>
  );
}

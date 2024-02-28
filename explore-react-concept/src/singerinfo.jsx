export default function Singerinfo({ name }) {
  console.log(name);

  return (
    <div>
      <h2>
        singer name {name.name} , singer id: {name.id}
      </h2>
    </div>
  );
}

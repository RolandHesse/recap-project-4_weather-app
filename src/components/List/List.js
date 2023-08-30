export default function Form({ id, name }) {
  return (
    <ul>
      <li key={id}>{name}</li>
    </ul>
  );
}

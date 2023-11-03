export default function TaskList({ texts }) {
  return (
    <div>
      {texts.map((text, index) => (
        <div key={index}>{text}</div>
      ))}
    </div>
  );
}

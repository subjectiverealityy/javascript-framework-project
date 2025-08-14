export default function Button(props) {
  const isFill = props.className === "fill";

  return (
    <button className={isFill ? "bg-transparent text-[var(--orange)]" : "bg-[var(--orange)] text-[var(--white)]"}>
      {props.name}
    </button>
  );
}
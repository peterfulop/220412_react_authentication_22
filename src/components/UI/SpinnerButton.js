export default function SpinnerButton(props) {
  console.log(props.title);
  return (
    <button className={`btn ${props.classes}`} type="button" disabled>
      <span
        className="spinner-border spinner-border-sm me-2"
        role="status"
        aria-hidden="true"
      ></span>
      {props.title}
    </button>
  );
}

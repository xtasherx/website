function Button(props) {
  return (
    <button
      type="button"
      className="btn--pilled font-alt text-gray-600 font-bold btn--sm bg-gray-100 m-1 hover-grow"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}

export default Button;

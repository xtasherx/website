function Button(props) {
  return (
    <button type="button" className={props.className} onClick={props.onClick}>
      {props.text}
    </button>
  );
}

export default Button;

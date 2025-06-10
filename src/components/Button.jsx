export const Button = (props) => {
  return (
    <button onClick={props.handleClick} className={props.className}>
      {props.content}
    </button>
  );
};

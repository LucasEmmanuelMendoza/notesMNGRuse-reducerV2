export const Button = ({ content, className, handleClick }) => {
  return (
    <button onClick={handleClick} className={className}>
      {content}
    </button>
  );
};

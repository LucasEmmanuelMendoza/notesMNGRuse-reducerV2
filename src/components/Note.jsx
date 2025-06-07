export const Note = ({ title, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3>{title}</h3>
      <p>{text}</p>
      {isHovered ? <button>Edit</button> : <button>Delete</button>}
    </div>
  );
};

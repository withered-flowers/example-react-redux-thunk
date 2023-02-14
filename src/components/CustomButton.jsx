export default ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="bg-gray-400 text-white py-2 px-4">
      {children}
    </button>
  );
};

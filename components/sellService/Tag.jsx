import CloseIcon from "@mui/icons-material/Close";

const Tag = ({ tag, index, onClickHandler }) => {
  return (
    <div
      className="flex items-center justify-between rounded-lg px-3 py-2 bg-gray-300 text-gray-700"
      key={index}
    >
      {tag}
      <span
        onClick={() => {
          onClickHandler(index);
        }}
      >
        <CloseIcon />
      </span>
    </div>
  );
};

export default Tag;

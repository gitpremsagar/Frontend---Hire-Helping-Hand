import ActionButton from "./ActionButton";

const CallToActionButtons = () => {
  return (
    <div className="flex m-6">
      <ActionButton content={`Add to Favourite`} />
      <ActionButton content={`Contact`} />
      <ActionButton content={`View Detail`} />
    </div>
  );
};

export default CallToActionButtons;

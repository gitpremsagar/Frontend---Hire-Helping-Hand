import ActionButton from "./ActionButton";

const CallToActionButtons = () => {
  return (
    <div className="flex mr-6 mt-6">
      <ActionButton content={`Favourite`} />
      <ActionButton content={`Contact`} />
      <ActionButton content={`View Detail`} />
    </div>
  );
};

export default CallToActionButtons;

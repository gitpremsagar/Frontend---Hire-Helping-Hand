import ActionButton from "./ActionButton";

const CallToActionButtons = () => {
  return (
    <div className="flex mt-6">
      <ActionButton content={`Favourite`} />
      <ActionButton content={`Contact`} />
      <ActionButton content={`View Detail`} />
    </div>
  );
};

export default CallToActionButtons;

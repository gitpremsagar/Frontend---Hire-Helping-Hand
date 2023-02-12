import { categoriesObject } from "../CategoriesSection/categoriesObject";

export default function SelectOptionsOfServices({ label }) {
  return (
    <div>
      <label htmlFor={label}>{label} : </label>

      <select
        name={label}
        id={label}
        className="text-black py-1 px-2 border-2 rounded"
      >
        <option>Service Type</option>
        {Object.keys(categoriesObject).map((category, key) => {
          return (
            <optgroup key={key} label={category}>
              {/* List of items within the category */}
              {Object.keys(categoriesObject[category]).map(
                (subCategory, key) => {
                  return (
                    <>
                      {Object.values(
                        categoriesObject[category][subCategory].map(
                          (serivceName, key) => {
                            return <option key={key}>{serivceName}</option>;
                          }
                        )
                      )}
                    </>
                  );
                }
              )}
            </optgroup>
          );
        })}
      </select>
    </div>
  );
}
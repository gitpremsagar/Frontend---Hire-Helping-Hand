export default function SelectMenu({ label }) {
  return (
    <div>
      <label htmlFor={label}>{label} : </label>
      <select
        name={label}
        id={label}
        className="text-black py-1 px-2 border-2 rounded"
      >
        <optgroup label="Web Development">
          <option>Website Design & Development</option>
          <option>E-commerce Website Development</option>
          <option>WordPress Development</option>
          <option>Custom Web Application Development</option>
        </optgroup>
        <optgroup label="Graphic Design">
          <option>Logo Design</option>
          <option>Banner Design</option>
          <option>Brochure Design</option>
          <option>Business Card Design</option>
        </optgroup>
        <optgroup label="Digital Marketing">
          <option>Search Engine Optimization (SEO)</option>
          <option>Social Media Marketing (SMM)</option>
          <option>Pay-Per-Click (PPC) Advertising</option>
          <option>Content Marketing</option>
        </optgroup>
        <optgroup label="Writing and Translation">
          <option>Content Writing</option>
          <option>Article Writing</option>
          <option>Blog Writing</option>
          <option>Translation Services</option>
        </optgroup>
        <optgroup label="Data Entry and Virtual Assistance">
          <option>Data Entry</option>
          <option>Virtual Assistance</option>
          <option>Customer Service</option>
          <option>Bookkeeping</option>
        </optgroup>
        <optgroup label="Programming and Technology">
          <option>Mobile Application Development</option>
          <option>Software Development</option>
          <option>IT Consulting</option>
          <option>Tech Support</option>
        </optgroup>
        <optgroup label="Music and Audio">
          <option>Music Production</option>
          <option>Voice Over</option>
          <option>Sound Design</option>
          <option>Audio Editing</option>
        </optgroup>
      </select>
    </div>
  );
}

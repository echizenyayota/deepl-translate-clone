const Modal = ({setShowModal}) => {
  return (
    <div className="option-list">
      <div className="search-bar">
        <select className="source-language">
          <option value="BG">BG</option>
          <option value="CS">CS</option>
          <option value="DA">DA</option>
          <option value="DE">DE</option>
          <option value="EL">EL</option>
          <option value="EN">EN</option>
          <option value="ES">ES</option>
          <option value="ET">ET</option>
          <option value="FI">FI</option>
          <option value="FR">FR</option>
          <option value="HU">HU</option>
          <option value="ID">ID</option>
          <option value="IT">IT</option>
          <option value="JA">JA</option>
          <option value="KO">KO</option>
          <option value="LT">LT</option>
          <option value="LV">LV</option>
          <option value="NB">NB</option>
          <option value="NL">NL</option>
          <option value="PL">PL</option>
          <option value="PT">PT</option>
          <option value="RO">RO</option>
          <option value="RU">RU</option>
          <option value="SK">SK</option>
          <option value="SL">SL</option>
          <option value="SV">SV</option>
          <option value="TR">TR</option>
          <option value="UK">UK</option>
          <option value="ZH">ZH</option>
        </select>
        <div className="close-button" onClick={() => setShowModal(null)}>
          <svg
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
          </svg>
        </div>
      </div>
    </div>
  )
}
export default Modal;
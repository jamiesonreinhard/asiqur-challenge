import "../styles/popup.css";

// Not Finished
const Popup = () => {
  return (
    <div className="modal">
      <div className="overlay"></div>
      <div className="modal-content">
        <input placeholder="First Name" />
        <input placeholder="Last Name" />
        <input placeholder="Email" />
      </div>
    </div>
  );
};

export default Popup;

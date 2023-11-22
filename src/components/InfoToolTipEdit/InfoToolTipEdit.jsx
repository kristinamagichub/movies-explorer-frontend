import "@/components/InfoToolTip/InfoToolTip.css";

function InfoToolTipEdit(props) {
  return (
    <div
      className={`popup popup_type_tooltip ${
        props.isOpen ? "popup_opened" : ""
      }`}
      onClick={props.onCloseOverlay}
    >
      <div className="popup__container">
        {props.isEdit ? (
          <>
            <p className="popup__signup-title">
              Успешное редактирование пользователя!
            </p>
          </>
        ) : (
          <>
            <p className="popup__signup-title">
              Что-то пошло не так. Попробуйте ещё раз!
            </p>
          </>
        )}
        <button
          className="popup__close-button"
          type="button"
          onClick={props.onClose}
        ></button>
      </div>
    </div>
  );
}

export default InfoToolTipEdit;

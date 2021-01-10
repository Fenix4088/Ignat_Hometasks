import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  HTMLAttributes,
  useState,
  ChangeEvent,
} from "react";
import SuperInputText from "../../../h4/common/c1-SuperInputText/SuperInputText";
import s from "../../HW6.module.scss";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
// тип пропсов обычного спана
type DefaultSpanPropsType = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>;

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperEditableSpanType = DefaultInputPropsType & {
  // и + ещё пропсы которых нет в стандартном инпуте
  onChangeText?: (value: string) => void;
  onEnter?: () => void;
  error?: string;
  spanClassName?: string;

  spanProps?: DefaultSpanPropsType; // пропсы для спана
};

const SuperEditableSpan: React.FC<SuperEditableSpanType> = ({
  autoFocus, // игнорировать изменение этого пропса
  onBlur,
  onEnter,
  spanProps,

  ...restProps // все остальные пропсы попадут в объект restProps
}) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const { children, onDoubleClick, className, ...restSpanProps } =
    spanProps || {};

  const [hintStatus, setHintStatus] = useState<boolean>(false);

  const onEnterCallback = () => {
    setEditMode(false); // выключить editMode при нажатии Enter

    onEnter && onEnter();
  };
  const onBlurCallback = (e: React.FocusEvent<HTMLInputElement>) => {
    setEditMode(false); // выключить editMode при нажатии за пределами инпута

    onBlur && onBlur(e);
  };
  const onDoubleClickCallBack = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    setEditMode(true); // включить editMode при двойном клике

    onDoubleClick && onDoubleClick(e);
  };
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>): void => {
    restProps.onChangeText && restProps.onChangeText(e.currentTarget.value);
  };

  //TODO: Проверь работу всплывающей подсказки, можно ли это так реализовать?
  const showHint = (): void => {
    const timerId = setInterval(() => setHintStatus(!hintStatus), 2000);
    setTimeout(() => {
      clearInterval(timerId);
    }, 2000);
  };

  const spanClassName = `${s.editableSpan} ${className}`;

  return (
    <>
      {editMode ? (
        <SuperInputText
          autoFocus // пропсу с булевым значением не обязательно указывать true
          onBlur={onBlurCallback}
          onEnter={onEnterCallback}
          onChange={onChangeCallback}
          error={""}
          {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
        />
      ) : (
        <span
          onDoubleClick={onDoubleClickCallBack}
          className={spanClassName}
          {...restSpanProps}
        >
          {/*если нет захардкодженного текста для спана, то значение инпута*/}
          {children || restProps.value}
        </span>
      )}
      {/*TODO: Проверь работу всплывающей подсказки, можно ли это так реализовать?*/}
      {!editMode ? showHint() : null}
      {hintStatus ? (
        <span className={s.hint}>Double click to change...</span>
      ) : (
        ""
      )}
    </>
  );
};

export default SuperEditableSpan;

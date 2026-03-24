import { useReducer } from 'react';
import styles from './review-form.module.scss';
import { ReviewCounter } from '../review-counter/review-counter';

const INITIAL_FORM = {
  name: '',
  rating: '',
  text: '',
};

const SET_NAME_ACTION = 'setNameAction';
const SET_RATING_ACTION = 'setRatingAction';
const SET_TEXT_ACTION = 'setTextAction';
const CLEAR_FORM_ACTION = 'clearFormAction';
const SUBMIT_FORM_ACTION = 'submitFormAction';

// dispatch - функция, изменения состояния, которая отправляет action в reducer
// dispatch(action);

// reducer - функция, которая принимает state и action и возвращает обновленный state
// state - текущее состояние
// action - действие, которое нужно выполнить
// payload - данные: строка или объект с ключами и значениями string
type FormState = typeof INITIAL_FORM;
type FormPayload = string | Record<string, string> | null;

const reducer = (state: FormState, action: { type: string; payload?: FormPayload }) => {
  const { type, payload } = action;

  switch (type) {
    case SET_NAME_ACTION:
      // ... - spread operator - копирует все свойства в новый объект (тк иначе react не будет знать, что значения изменились)
      return { ...INITIAL_FORM, name: payload as string };
    case SET_RATING_ACTION:
      if (Number(payload) < 1 || Number(payload) > 5) {
        alert('Rating must be between 1 and 5');
        return { ...state, rating: '' };
      }
      return { ...state, rating: payload as string };
    case SET_TEXT_ACTION:
      return { ...state, text: payload as string };
    case CLEAR_FORM_ACTION:
      return INITIAL_FORM;
    case SUBMIT_FORM_ACTION:
      console.log('SUBMIT_FORM', payload);
      return INITIAL_FORM;
    default:
      return INITIAL_FORM;
  }
};

export const ReviewForm = () => {
  const [form, dispatch] = useReducer(reducer, INITIAL_FORM);

  const { name, rating, text } = form;

  //   const [name, setName] = useState("");
  //   const [text, setText] = useState("");
  //   const [address, setAddress] = useState("");

  return (
    <form className={styles.reviewForm} onSubmit={(event) => event.preventDefault()}>
      <div className={styles.reviewFormField}>
        <label>name:</label>
        <input
          value={name}
          onChange={(event) => {
            dispatch({ type: SET_NAME_ACTION, payload: event.target.value });
          }}
        />
      </div>

      <div className={styles.reviewFormField}>
        <label>text:</label>
        <textarea
          value={text}
          onChange={(event) => dispatch({ type: SET_TEXT_ACTION, payload: event.target.value })}
        />
      </div>
      <div className={styles.reviewFormField}>
        <label>rating:</label>
        <ReviewCounter
          value={Number(rating) || 0}
          onChange={(value: number) =>
            dispatch({ type: SET_RATING_ACTION, payload: String(value) })
          }
          min={1}
          max={5}
        />
        {/* <input
          value={rating}
          onChange={(event) => dispatch({ type: SET_RATING_ACTION, payload: event.target.value })}
        /> */}
      </div>
      <div className={styles.reviewFormControls}>
        <button
          className={styles.reviewFormButton}
          type="submit"
          onClick={() => dispatch({ type: SUBMIT_FORM_ACTION, payload: { ...form } })}
        >
          Add Review
        </button>
        <button
          className={styles.reviewFormButton}
          type="button"
          onClick={() => dispatch({ type: CLEAR_FORM_ACTION, payload: null })}
        >
          Clear
        </button>
      </div>
    </form>
  );
};

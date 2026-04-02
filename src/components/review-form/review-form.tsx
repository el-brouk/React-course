import { useReducer, type FormEvent } from 'react';
import styles from './review-form.module.scss';
import { ReviewCounter } from '../review-counter/review-counter';
import { addReview } from '../../redux/entities/reviews/add-review';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../redux/store';
import { UserContext } from '../user-provider/index';
import { useContext } from 'react';

const INITIAL_FORM = {
  rating: '',
  text: '',
};

const SET_RATING_ACTION = 'setRatingAction';
const SET_TEXT_ACTION = 'setTextAction';
const CLEAR_FORM_ACTION = 'clearFormAction';

// reducer - функция, которая принимает state и action и возвращает обновленный state
// state - текущее состояние
// action - действие, которое нужно выполнить
// payload - данные: строка или объект с ключами и значениями string
// dispatch - функция изменения состояния, которая отправляет action в reducer
// dispatch(action);

type FormState = typeof INITIAL_FORM;
type FormPayload = string | null;

const reducer = (state: FormState, action: { type: string; payload?: FormPayload }) => {
  const { type, payload } = action;

  switch (type) {
    // case SET_NAME_ACTION:
    // ... - spread operator - копирует все свойства в новый объект (тк иначе react не будет знать, что значения изменились)
    // return { ...INITIAL_FORM, name: payload as string };
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
    default:
      return INITIAL_FORM;
  }
};

export const ReviewForm = ({ restaurantId }: { restaurantId: string }) => {
  const [form, formDispatch] = useReducer(reducer, INITIAL_FORM);
  const reduxDispatch = useDispatch<AppDispatch>();
  const { value: user } = useContext(UserContext);

  const { rating, text } = form;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const ratingNum = Number(rating);
    if (!rating || ratingNum < 1 || ratingNum > 5) {
      alert('Rating must be between 1 and 5');
      return;
    }
    try {
      await reduxDispatch(
        addReview({
          restaurantId,
          review: {
            userId: user?.id ?? '',
            text,
            rating: ratingNum,
          },
        })
      ).unwrap();
      formDispatch({ type: CLEAR_FORM_ACTION, payload: null });
    } catch {
      alert('Failed to add review');
    }
  };

  return (
    <form className={styles.reviewForm} onSubmit={handleSubmit}>
      <div className={styles.reviewFormField}>
        <label>text:</label>
        <textarea
          value={text}
          onChange={(event) => formDispatch({ type: SET_TEXT_ACTION, payload: event.target.value })}
        />
      </div>
      <div className={styles.reviewFormField}>
        <label>rating:</label>
        <ReviewCounter
          value={Number(rating) || 0}
          onChange={(value: number) =>
            formDispatch({ type: SET_RATING_ACTION, payload: String(value) })
          }
          min={1}
          max={5}
        />
      </div>
      <div className={styles.reviewFormControls}>
        <button className={styles.reviewFormButton} type="submit">
          Add Review
        </button>
        <button
          className={styles.reviewFormButton}
          type="button"
          onClick={() => formDispatch({ type: CLEAR_FORM_ACTION, payload: null })}
        >
          Clear
        </button>
      </div>
    </form>
  );
};

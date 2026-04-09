import { useState, type PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import styles from './cart-modal.module.scss';

export const CartModal = ({ children }: PropsWithChildren) => {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const cartModalRoot = document.getElementById('cart-modal');

  return (
    <>
      <button
        className={styles.cartButton}
        type="button"
        onClick={() => {
          setIsCartModalOpen(!isCartModalOpen);
        }}
      >
        Cart
      </button>
      {isCartModalOpen &&
        cartModalRoot != null &&
        createPortal(
          <div className={styles.overlay} role="dialog" aria-modal="true">
            <div className={styles.content}>
              <button
                className={styles.close}
                type="button"
                aria-label="Close cart modal"
                onClick={() => setIsCartModalOpen(!isCartModalOpen)}
              >
                X
              </button>
              {children}
            </div>
          </div>,
          cartModalRoot
        )}
      {/* createPortal позволяет рендерить компоненты в другом месте DOM */}
    </>
  );
};

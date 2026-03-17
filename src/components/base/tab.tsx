import classNames from 'classnames';
import styles from './tab.module.scss';
import React from 'react';

type TabProps = {
  children: React.ReactNode;
  onClick: () => void;
  isActive?: boolean;
};

export const Tab = ({ children, onClick, isActive }: TabProps) => {
  const buttonClassName = classNames(styles['base-tab'], isActive && styles['base-tab--active']);

  return (
    <button type="button" className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  );
};

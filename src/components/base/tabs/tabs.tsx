import styles from './tabs.module.scss';
import React from 'react';

export const Tabs = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.tabs}>{children}</div>;
};

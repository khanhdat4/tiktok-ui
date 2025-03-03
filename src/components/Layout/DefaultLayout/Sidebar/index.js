import React from 'react';
import clsx from 'clsx';
import styles from './Sidebar.module.scss';

export default function Sidebar() {
  return (
    <aside className={clsx(styles.wrapper)}>
      <h2>Sidebar</h2>
    </aside>
  );
}

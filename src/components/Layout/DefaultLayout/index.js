import React from 'react';
import clsx from 'clsx';
import styles from './DefaultLayout.module.scss';
import Header from '~/components/Layout/components/Header';
import Sidebar from './Sidebar';

export default function index({ children }) {
  return (
    <div className={clsx(styles.wrapper)}>
      <Header />
      <div className={clsx(styles.container)}>
        <Sidebar />
        <div className={clsx(styles.content)}>{children}</div>
      </div>
    </div>
  );
}

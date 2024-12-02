import React from 'react';

import chill from '@assets/images/chill.jpg';

import styles from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
  return (
    <div className={styles.pageWrapper}>
      <h1>404</h1>
      <img src={chill} alt="chill" />
      <h2>
        Ooops... I deem this page does not exist. Anyway, while you are here, reread
        Belarus anthem:
      </h2>
      <p>
        Мы, беларусы — мірныя людзі,
        <br />
        Сэрцам адданыя роднай зямлі,
        <br />
        Шчыра сябруем, сілы гартуем
        <br />
        Мы ў працавітай, вольнай сям’і.
      </p>
      <p>
        Слаўся, зямлі нашай светлае імя,
        <br />
        Слаўся, народаў братэрскі саюз!
        <br />
        Наша любімая маці-Радзіма,
        <br />
        Вечна жыві і квітней, Беларусь!
      </p>
      <p>
        Разам з братамі мужна вякамі
        <br />
        Мы баранілі родны парог,
        <br />
        У бітвах за волю, бітвах за долю
        <br />
        Свой здабывалі сцяг перамог!
      </p>
      <p>
        Слаўся, зямлі нашай светлае імя,
        <br />
        Слаўся, народаў братэрскі саюз!
        <br />
        Наша любімая маці-Радзіма,
        <br />
        Вечна жыві і квітней, Беларусь!
      </p>
      <p>
        Дружба народаў — сіла народаў —
        <br />
        Наш запаветны, сонечны шлях.
        <br />
        Горда ж узвіся ў ясныя высі,
        <br />
        Сцяг пераможны — радасці сцяг!
      </p>
      <p>
        Слаўся, зямлі нашай светлае імя,
        <br />
        Слаўся, народаў братэрскі саюз!
        <br />
        Наша любімая маці-Радзіма,
        <br />
        Вечна жыві і квітней, Беларусь!
      </p>
    </div>
  );
};

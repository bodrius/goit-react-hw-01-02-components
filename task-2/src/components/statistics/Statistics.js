import React from 'react'
import css from './statistics.module.css'
import StatikList from '../statistics/statikLiast/statikList'
import statisticalData from '../../components/statistics/statistical-data.json'


const Statistics = (stats) => {
  {console.log(stats)}
    return (
  <section className={css.statistics}>
  <h2 className={css.title}>Upload stats</h2>
  <ul className={css.stat_list}>
  {
  statisticalData.map(el=> <StatikList list = {el} key={el.id}/>)
  }
  </ul>
</section>
    );
}

export default Statistics;

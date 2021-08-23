import React from 'react'

import classes from './Loader.module.scss'

const Loader = () => {

  return (
    <section className={classes.section}>
      <span className={classes.loader} />
    </section>
  )
}

export default Loader
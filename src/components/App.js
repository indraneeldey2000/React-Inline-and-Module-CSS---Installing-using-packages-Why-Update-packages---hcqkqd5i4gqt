import React from 'react'
import '../styles/App.css';
import styles from '../styles/appStyles.module.css';
const App = () => {
  const heading = {


  }
  return (
    <div>
      <h1 className={styles.appStyles.module.success}>Success</h1>
      <h1 style={{ fontSize: '50px', color: 'red' }}>Error</h1>
    </div>
  )
}


export default App;

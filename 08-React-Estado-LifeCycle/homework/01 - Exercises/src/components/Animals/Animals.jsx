import React from 'react'
import styles from './Animals.module.css'

export default class Animals extends React.Component {
  render() {
    const { animals } = this.props

    return (
      <div className={styles.container}>
        {
          animals.map((animal, index) => (
            <div key={index} className={styles.containerAnimals}>
              <h5>{animal.name}</h5>
              <img src={animal.image} alt={animal.name} width="300px" /><br />
              <span>{animal.specie}</span>
            </div>
          ))
        } 
      </div>
    )
  }
}

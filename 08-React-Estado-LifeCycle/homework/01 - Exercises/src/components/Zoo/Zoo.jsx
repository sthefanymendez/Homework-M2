import React from "react";
// eslint-disable-next-line no-unused-vars
import Animals from "../Animals/Animals";
// eslint-disable-next-line no-unused-vars
import Species from "../Species/Species";
import styles from "./Zoo.module.css";

export default function Zoo() {
  /* Escribe acá tu código */
  const [zoo, setZoo] = React.useState({
    zooName: "",
    animals: [],
    species: [],
    allAnimals: []
  });

  React.useEffect(()=> {
    fetch('http://localhost:3001/zoo')
    .then((res) => res.json())
    .then((data) => 
      setZoo({
        // ...zoo,
        animals: data.animals,
        species: data.species,
        allAnimals: data.animals,
      })
    )},[])

  const handleInputChange = (event) => {
    const {value} = event.target
    setZoo({...zoo, zooName: value});
  };

  const handleSpecies = (event) => {
    const {value} = event.target
    const filtered = zoo.allAnimals.filter((
      animal)=> animal.specie === value)
      setZoo({
        ...zoo,
        animals: filtered
      })
  };

  const handleAllSpecies = () => {
    setZoo({
      ...zoo,
      animals: zoo.allAnimals
    })
  };

  return (
    <div className={styles.divContent}>
      <label htmlFor="">Zoo Name:</label>
      <input type="text" onChange={handleInputChange} />
      <h1 className={styles.divContentTitle}>{zoo.zooName}</h1>
      <Species 
        species={zoo.species}
        handleAllSpecies={handleAllSpecies}
        handleSpecies={handleSpecies}
      />
      <Animals animals={zoo.animals}/>
    </div>
  );
}

import styles from "./CarDetails.module.css"

const CarDetails = ({name, km}) => {

  return (
    <div className={styles.card}>
        <h2>{name}</h2>
        <p>Km: {km}</p>
    </div>
  )
}

export default CarDetails
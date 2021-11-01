import styles from '../../styles/Subdivision.module.css'

export default function Subdivision(props) {
  return (
    <div
      style={{ backgroundColor: props.preta ? '#000' : '#fff' }}
      className={styles.subdivision}
    ></div>
  )
}

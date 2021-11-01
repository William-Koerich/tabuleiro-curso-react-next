import Subdivision from './Subdivision'
import styles from '../../styles/Line.module.css'
export default function Line(props) {
  return (
    <div className={styles.line}>
      <Subdivision preta={props.outline} />
      <Subdivision preta={!props.outline} />
      <Subdivision preta={props.outline} />
      <Subdivision preta={!props.outline} />
      <Subdivision preta={props.outline} />
      <Subdivision preta={!props.outline} />
      <Subdivision preta={props.outline} />
      <Subdivision preta={!props.outline} />
    </div>
  )
}

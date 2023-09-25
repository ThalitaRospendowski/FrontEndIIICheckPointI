import styles from './color.module.css';

export function Color({ color }) {
  return (


    <div className={styles.card}>
      <li>
        {color.name ?
          (
            <div className={styles.colorbox} style={{ backgroundColor: `${color.cor}` }}>
              {color.name} {color.cor}
            </div>
            

          ) :
          (
            `${color.name} ${color.cor}`
          )
        }
      </li>

      


    </div>

    



  )
}


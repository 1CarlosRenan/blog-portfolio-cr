import notFoundPoster from '../../assets/notfound.jpg'

import styles from './404.module.css'

export function Page404() {
  return (
    <section className={styles.page}>
      Meta: title 404 não encontrado description: 404 não encontrado. Essa
      pagina nao existe Transition
      <img src={notFoundPoster} />
    </section>
  )
}

import styles from '../styles/PageDivide.module.scss'

const PageDivider = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={styles.container}>
            <div>
                {children}
            </div>
            <div className={styles.divider}></div>
        </div>
    )
}

export default PageDivider
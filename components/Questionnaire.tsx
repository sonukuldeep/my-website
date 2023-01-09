import { FormEvent } from 'react';
import styles from '../styles/Questionnaire.module.scss'

const Questionnaire = () => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement
        console.log('email', form.email);
        console.log('name', form.name);
    }

    return (
        <div className={styles.container}>
            <h2>Let me help you choose the right website</h2>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="website-type">What kind of website you want?</label>
                        <div className={styles.select_wrapper}>
                            <select id="website-type">
                                <option value="">Please choose an option</option>
                                <option value="advertise">Advertising</option>
                                <option value="blog">Blog</option>
                                <option value="ecommerce">Ecommerce</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="website-update">Will the website need constant updation?</label>
                        <div className={styles.select_wrapper}>
                            <select id="website-update">
                                <option value="">Please choose an option</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="maintain">Do you want to maintain it yourself?</label>
                        <div className={styles.select_wrapper}>
                            <select id="maintain">
                                <option value="">Please choose an option</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Questionnaire
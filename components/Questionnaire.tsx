import { FormEvent } from 'react';
import styles from '../styles/Questionnaire.module.scss'

const Questionnaire = () => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement
        console.log('type of website', form.websiteType.value);
        console.log('target audience', form.audience.value);
        console.log('look and feel', form.look.value);
        console.log('requested functionaility', form.requests.value);
    }

    return (
        <div className={styles.container}>
            <h2>Please take a moment to answer these simple question</h2>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="website-type">What kind of website do you want?</label>
                        <div className={styles.select_wrapper}>
                            <select name='websiteType' id="website-type">
                                <option value="">Please choose an option</option>
                                <option value="advertise">Advertising</option>
                                <option value="blog">Blog</option>
                                <option value="ecommerce">Ecommerce</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.inputField}>
                        <label htmlFor="maintain">Who is the target audience</label>
                        <input type="text" name='audience' required placeholder='Age group/Profession/Exposure'/>
                    </div>
                    <div className={styles.inputField}>
                        <label htmlFor="maintain">Desired look and feel</label>
                        <input type="text" name='look' required placeholder='Any website you are inspired of'/>
                    </div>
                    <div className={styles.inputField}>
                        <label htmlFor="maintain">Any special functionality</label>
                        <input type="text" name='requests' required placeholder='Newsletter submission/User Database'/>
                    </div>
                    <button type="submit">Submit<span className={styles.tooltipHover}>Make sure you are logged in</span></button>
                </form>
            </div>
        </div>
    )
}

export default Questionnaire
import { FormEvent } from 'react';
import styles from '../styles/Blog.module.scss'

const Blog = () => {
    const handleSubmit = (e: any) => {
        e.preventDefault();
        const form = e.target;
        console.log('email', form.email, form.elements.email);
        console.log('name', form.name, form.elements.name);
    }

    return (
        <div className={styles.container}>
            <h2>Let me help you choose the right website</h2>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="website-type">What kind of website you want?</label>
                        <select id="website-type">
                            <option value="">Please choose an option</option>
                            <option value="advertise">Advertising</option>
                            <option value="blog">Blog</option>
                            <option value="ecommerce">Ecommerce</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="website-update">Will the website need constant updation?</label>
                        <select id="website-update">
                            <option value="">Please choose an option</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="maintain">Do you want to maintain it yourself?</label>
                        <select id="maintain">
                            <option value="">Please choose an option</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Blog
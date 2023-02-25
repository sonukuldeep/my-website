import React from 'react'
import Link from 'next/link'
import styles from '../styles/service.module.scss'

const service = () => {
    return (
        <div className={styles.container}>
            <div className={styles.secondary}>
                <h1>Terms of Service</h1>
                <p>Welcome to codethatdev.com! These terms of service (the &quot;Terms&quot;) apply to your use of our website and the services we offer through the website. By accessing or using our website, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use our website.</p>
                <h2>About codethatdev.com</h2>
                <p>codethatdev.com provides web development services and sells websites through our website. Our services and products are subject to these Terms, as well as any additional terms and conditions that may apply.</p>
                <h2>Use of Our Website</h2>
                <ol>
                    <li>
                        <strong>Eligibility:</strong> You must be at least 18 years old to use our website. By accessing or using our website, you represent and warrant that you are at least 18 years old.
                    </li>
                    <li>
                        <strong>Account Creation:</strong> In order to use certain features of our website, you may need to create an account. You are responsible for maintaining the confidentiality of your account login information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.
                    </li>
                    <li>
                        <strong>Prohibited Conduct:</strong> You may not use our website for any illegal or unauthorized purpose. You may not, in your use of our website, violate any laws in your jurisdiction (including but not limited to copyright laws), or the laws of any other jurisdiction. You may not use our website to transmit any content that is unlawful, defamatory, obscene, or that infringes on any third party's intellectual property or other rights. You may not interfere with or disrupt the integrity or performance of our website or the data contained therein.
                    </li>
                </ol>
                <h2>Products and Services</h2>
                <ol>
                    <li>
                        <strong>General:</strong> Our website offers web development services and the sale of pre-built websites. All sales are final and non-refundable.
                    </li>
                    <li>
                        <strong>Intellectual Property:</strong> We retain all ownership rights in the websites we develop and sell, including any underlying code and content. You may not use our websites or any portion thereof for any commercial purpose without our express written permission.
                    </li>
                </ol>
                <h2>Privacy</h2>
                <p>Please refer to our <Link href="/policy">Privacy Policy</Link> for information on how we collect, use, and protect your personal information.</p>
                <h2>Termination</h2>
                <p>We reserve the right to terminate your access to our website or any portion thereof at any time, with or without cause, with or without notice, effective immediately.</p>
                <h2>Disclaimers</h2>
                <ol>
                    <li>
                        <strong>Our Website:</strong> Our website is provided &quot;as is&quot; and without warranties of any kind, express or implied. We do not warrant that our website will be uninterrupted or error-free, that defects will be corrected, or that our website or the server that makes it available are free of viruses or other harmful components. We do not make any warranties or representations regarding the use of the materials on our website in terms of their correctness, accuracy, adequacy, usefulness, timeliness, reliability, or otherwise.
                    </li>
                    <li>
                        <strong>Products and Services:</strong> Our products and services are provided &quot;as is&quot; and without warranties of any kind, express or implied. We do not warrant that our products or services will meet your specific requirements, be uninterrupted or error-free, or be free from viruses or other harmful components.
                    </li>
                </ol>
                <h2>Limitation of Liability</h2>
                <p>In no event shall codethatdev.com be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with the use of our website or the purchase of our products or services.</p>
                <h2>Indemnification</h2>
                <p>You agree to indemnify, defend, and hold harmless codethatdev.com and its officers, directors, employees, agents, and affiliates from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising from your use of our website or the purchase of our products or services, or from your violation of these Terms.</p>
                <h2>Changes to These Terms</h2>
                <p>We reserve the right to modify these Terms at any time, and such modifications shall be effective immediately upon posting on our website. Your continued use of our website following any such modifications constitutes your acceptance of the modified Terms.</p>
                <h2>Governing Law</h2>
                <p>These Terms and your use of our website shall be governed by and construed in accordance with the laws of Republic on India.</p>
                <h2>Contact Us</h2>
                <p>If you have any questions about these Terms, please contact us at admin@codethatdev.com.</p>
            </div>
        </div>
    )
}

export default service
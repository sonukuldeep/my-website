import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next';
import DetailedBlog from '../../../components/DetailedBlog';

interface props {
    blog: { id: number }
}

const index = ({ blog }: props) => {
    console.log(blog)
    return (
        <DetailedBlog />
    )
}

export default index

// Generates `/posts/1` and `/posts/2`
export const getStaticPaths: GetStaticPaths = async () => {
    const ids = [1, 2, 3, 4, 5, 6]
    const paths = ids.map(id => ({ params: { id: id.toString() } }))
    return {
        paths,
        fallback: false, // can also be true or 'blocking'
    };
};

// `getStaticPaths` requires using `getStaticProps`
export const getStaticProps: GetStaticProps = async (context) => {
    let blog = {}
    if (context.params) {
        blog = { id: context.params.id }
    }
    return {
        // Passed to the page component as props
        props: { blog },
    };
};

import Head from 'next/head'

interface MetaValidation { title: string; keywords: string; description: string; }

const Meta = ({ title, keywords, description }: MetaValidation) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <title>{title}</title>
      {/* Nextjs yells if link tag is included here hence i shifted them to document */}
    </Head>
  )
}

Meta.defaultProps = {
  title: 'Eastern dev',
  keywords: 'web development, website builder',
  description: 'Get your own website up with us',
}

export default Meta
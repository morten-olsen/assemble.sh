import Layout from '../components/Layout';
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import { GetStaticProps } from 'next'


export const formatText = (input: string = '') => {
  return input.split('\n').map((item, index) => {
    return (index === 0) ? item : [<br key={index} />, item]
  })
}

export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
    summery: string
  }[]
}) {
  return (
    <Layout title="TEST!">
      <ul>
        {allPostsData.map(({ id, title, summery }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <div>{formatText(summery)}</div>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  }
}

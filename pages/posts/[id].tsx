import Layout from '../../components/Layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import { MDXRemote } from 'next-mdx-remote';
import { GetStaticProps, GetStaticPaths } from 'next'
import Image from 'next/image';

export default function Post({
  postData
}: {
  postData: {
    id: string;
    title: string
    date: string
    source: any;
  }
}) {
  return (
    <Layout title={postData.title}>
      <article>
        <h1>{postData.title}</h1>
        <div style={{ height: 500, position: 'relative' }}>
          {/* <img src={require('/posts/' + postData.id + '/cover.png').default.src} /> */}
        </div>
        <MDXRemote {...postData.source} />
      </article>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string)
  return {
    props: {
      postData
    }
  }
} 

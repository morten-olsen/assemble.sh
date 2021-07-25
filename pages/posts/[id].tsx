import Layout from '../../components/Layout'
import { getPostIds, getPost } from '../../lib/posts'
import { MDXRemote } from 'next-mdx-remote';
import { GetStaticProps, GetStaticPaths } from 'next'
import Post from '../../types/Post';
import { H1, Overline } from '../../typography';
import React from 'react';

interface Props {
  post: Post;
}

const PostView: React.FC<Props> = ({ post }) => {
  return (
    <Layout title={post.title}>
      <article>
        <Overline>{post.date}</Overline>
        <H1>{post.title}</H1>
        <MDXRemote {...post.content } />
      </article>
    </Layout>
  )
}

const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getPostIds()
  return {
    paths,
    fallback: false
  }
}

const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPost(params.id as string);
  return {
    props: {
      post,
    }
  }
};

export { getStaticPaths, getStaticProps };
export default PostView;

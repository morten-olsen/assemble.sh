import Layout from '../components/Layout';
import { getSortedPosts } from '../lib/posts'
import { GetStaticProps } from 'next'
import Post from '../types/Post';
import PostListItem from '../components/posts/ListItem';
import React from 'react';

interface Props {
  posts: Post[];
}

export const formatText = (input: string = '') => {
  return input.split('\n').map((item, index) => {
    return (index === 0) ? item : [<br key={index} />, item]
  })
}

const Home: React.FC<Props> = ({ posts }) => (
  <Layout title="TEST!">
    {posts.map((post) => (
      <PostListItem key={post.id} post={post} />
    ))}
  </Layout>
);

const getStaticProps: GetStaticProps = async () => {
  const posts = await getSortedPosts();
  return {
    props: {
      posts 
    }
  }
}

export { getStaticProps };
export default Home;

import { MDXRemoteSerializeResult } from 'next-mdx-remote'
interface Post {
  id: string;
  title: string;
  date: string;
  summery: string;
  content: MDXRemoteSerializeResult;
}

export default Post;

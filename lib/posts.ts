import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import Post from '../types/Post';

const postsDirectory = path.join(process.cwd(), 'posts')

interface MatterData {
  title: string;
  date: string;
  summery: string;
  image: string;
}

export const getPost = async (id: string): Promise<Post> => {
  const fullPath = path.join(postsDirectory, id, 'index.mdx')
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(fileContents)
  const content = await serialize(matterResult.content);

  return {
    id,
    content,
    ...(matterResult.data as MatterData)
  }
};

export const getPostIds = async () => {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName,
      },
    };
  });
};

export const getSortedPosts = async () => {
  const postIds = await getPostIds();
  const posts = await Promise.all(postIds.map(id => getPost(id.params.id)));
  return posts.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  });
}


import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'

const postsDirectory = path.join(process.cwd(), 'posts')

interface MatterData {
  title: string;
  date: string;
  summery: string;
  image: string;
}

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(id => {
    const fileName = path.join(id, 'index.mdx');
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    return {
      id,
      ...(matterResult.data as { date: string; title: string })
    }
  })
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName,
      }
    }
  })
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, id, 'index.mdx')
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(fileContents)
  const source = await serialize(matterResult.content);

  return {
    id,
    source,
    ...(matterResult.data as MatterData)
  }
}

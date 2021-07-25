import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Post from '../../types/Post';
import { H2, Body1, Overline } from '../../typography';

interface Props {
  post: Post;
}

const Wrapper = styled.div`
  border: solid 1px #ededed;
  padding: 15px;
  margin: 5px;
`;

const PostListItem: React.FC<Props> = ({ post }) => (
  <Wrapper>
    <Overline>{post.date}</Overline>
    <H2>
      <Link href={`/posts/${post.id}`}>
        {post.title}
      </Link>
    </H2>
    <Body1>{post.summery}</Body1>
  </Wrapper>
);

export default PostListItem;

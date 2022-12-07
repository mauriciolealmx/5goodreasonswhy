import { useParams } from 'react-router-dom';

const Post = () => {
  const { postId } = useParams();

  return <h1>I'm post with Id: {postId}</h1>;
};

export default Post;

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { API } from 'aws-amplify';

const Home = () => {
  const [allPosts, setAllPost] = useState(null);

  useEffect(() => {
    const onLoad = async () => {
      try {
        const posts = await API.get('posts', '/');
        setAllPost(posts);
      } catch (e) {}
    };

    onLoad();
  }, []);

  const hasPosts = allPosts?.length > 0;

  return (
    <section className="headingMd padding1px">
      <ul className="list">
        {hasPosts &&
          allPosts?.map((post) => (
            <li className="listItem" key={post.postId.S}>
              <Link to={`/posts/${post.postId.S}`}>{post.title.S}</Link>
              <br />
              <small className="lightText">December 30, 2020</small>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default Home;

import { useEffect, useState } from 'react';
import { API } from 'aws-amplify';
import { useParams, useNavigate } from 'react-router-dom';

// import * as postsClient from 'apis/posts.api';
// import Date from 'components/date';
import ReasonsList from '../ReasonList';
// import affiliateMap from 'helpers/affiliateMap';

import './post.styles.css';

// const replaceItemAtIndex = (arr, index, newValue) => {
//   return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
// };

const Post = () => {
  const { postId } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState(null);
  // const [reasonsState, setReasonsState] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // TODO: We dont have reasons right now.
      // const postReasons = await postsClient.getReasonsByPostId(postId);
      const post = await API.get('posts', `/posts/${postId}`);
      setPost(post);
      console.log(JSON.stringify(post, null, 2));
      console.log('Getting post by id');
      // const post = await postsClient.getPostById(postId);
      // setPost(post);
      // setReasonsState(postReasons);
    };

    fetchData();
  }, [postId]);

  // const handleVote = useCallback(async (voteValue, reasonId) => {
  //   const updatedReason = await postsClient.updateReasonById(
  //     reasonId,
  //     (prevState) => ({
  //       ...prevState,
  //       votes: (prevState.votes += voteValue),
  //     })
  //   );

  //   setReasonsState((prevState) => {
  //     const reasonIdx = prevState.findIndex((r) => r.id === updatedReason.id);
  //     const newState = replaceItemAtIndex(prevState, reasonIdx, updatedReason);

  //     return newState;
  //   });
  // }, []);

  // const handleClick = (label) => {
  //   gtag.event({
  //     label,
  //     action: 'click',
  //     category: 'ab-testing',
  //   });
  // };

  // const hasReasons = reasonsState?.length > 0;
  // const sortedReasons = reasonsState?.sort((a, b) => b.votes - a.votes);

  // const { renderer, disclaimer } = affiliateMap[post?.id] || {};

  const renderLloading = () => !post?.postId && <>Loading...</>;

  return (
    renderLloading() || (
      <>
        <article>
          <h1 className="headingMd">{post.title.S}</h1>
          <div className="lightText">December 30, 2020</div>
          {/* {renderer} */}
          {/* {disclaimer} */}
          <ReasonsList />
        </article>
        <div className="actionsRoot">
          <button
            // onClick={() => handleClick('show more')}
            className="textButton"
          >
            Show more
          </button>
          <button
            onClick={() => navigate(`/reasons/create/${postId}`)}
            className="addReason"
          >
            Add Reason
          </button>
        </div>
        {/* {renderer} */}
      </>
    )
  );
};

export default Post;

// import { useState } from 'react';

import VoteButton from '../VoteButton';
// import { debounce } from 'components/reason/reason.helpers';

import './reasons.styles.css';

const mockReasons = [
  {
    id: 'random-id',
    votes: 2,
    title: 'It gives you hope',
    description: 'Because something',
  },
];

const ReasonsList = ({ onVote, sortedReasonsV2 = mockReasons }) => {
  // const [castedVotes, setCastedVotes] = useState({});

  // const handleVote = (initialVotes, voteValue, reasonId) => {
  //   const reasonVotes = castedVotes[reasonId];
  //   if (reasonVotes) {
  //     const canVoteUp = reasonVotes.vote !== voteValue;
  //     if (canVoteUp) {
  //       onVote(voteValue, reasonId);
  //       setCastedVotes((prevState) => ({
  //         ...prevState,
  //         [reasonId]: {
  //           ...reasonVotes,
  //           vote: reasonVotes.vote + voteValue,
  //         },
  //       }));
  //     }
  //   }

  //   if (!reasonVotes) {
  //     onVote(voteValue, reasonId);
  //     setCastedVotes((prevState) => ({
  //       ...prevState,
  //       [reasonId]: { vote: voteValue, initialVotes },
  //     }));
  //   }
  // };

  const hasReasons = sortedReasonsV2.length > 0;

  return (
    <ol>
      {hasReasons &&
        sortedReasonsV2.map((reason, idx) => {
          const { id, votes, description } = reason;
          // const reasonCastedVotes = castedVotes[id]?.vote;

          // const voteButtonProps = (voteValue) => ({
          //   voteValue,
          //   isActive: reasonCastedVotes === voteValue,
          //   // onClick: debounce(() => handleVote(votes, voteValue, id), 300),
          // });

          return (
            <li key={id} className="reasonRoot">
              <div className="votingRoot">
                <VoteButton />
                <div className="label">
                  <span>{votes}</span>
                  <span>votes</span>
                </div>
                <VoteButton voteValue={-1} />
              </div>
              <div>
                <p
                  className={
                    description ? 'reasonTitleV2' : 'reasonDescription'
                  }
                >{`${idx + 1}. ${reason?.title}`}</p>
                <p className="reasonDescription">{description}</p>
              </div>
            </li>
          );
        })}
    </ol>
  );
};

export default ReasonsList;

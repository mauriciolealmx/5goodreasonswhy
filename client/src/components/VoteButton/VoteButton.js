import UpTriange from '../../svgs/upTriange.svg';

const VoteButton = ({ voteValue, isActive, onClick }) => {
  const highlightVote = isActive ? 'voted' : '';

  const isDownVote = voteValue === -1;
  const voteDownClasses = isDownVote ? 'rotated' : '';
  const buttonClasses = `textButton ${voteDownClasses}`;

  return (
    <button className={buttonClasses} onClick={onClick}>
      <UpTriange className={`btVote ${highlightVote}`} />
    </button>
  );
};

export default VoteButton;

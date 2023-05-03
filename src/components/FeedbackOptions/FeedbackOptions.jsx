import React from 'react';
import PropTypes from 'prop-types';
import Section from 'components/Section/Section';
import css from './FeedbackOptions.module.css'

const FeedbackOptions = ({
  onUpdateGoodFeedback,
  onUpdateBadFeedback,
  onUpdateNeutralFeedback,
}) => (
  <Section title="Please leave feedback">
    <button
      type="button"
      onClick={onUpdateGoodFeedback}
      className={css.feedbackButton}
    >Good</button>
    <button
      type="button"
      onClick={onUpdateBadFeedback}
      className={css.feedbackButton}
    >Bad</button>
    <button
      type="button"
      onClick={onUpdateNeutralFeedback}
      className={css.feedbackButton}
    >Neutral</button>
  </Section>
);

FeedbackOptions.propTypes = {
  onUpdateGoodFeedback: PropTypes.func.isRequired,
  onUpdateBadFeedback: PropTypes.func.isRequired,
  onUpdateNeutralFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

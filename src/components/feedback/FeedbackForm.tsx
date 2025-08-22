const FeedbackForm = () => {
  return (
    <form className="form">
      <textarea placeholder="type text here" id="feedback-textarea" />
      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to # your company
      </label>

      <div>
        <p className="u-italic">150</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
};

export default FeedbackForm;

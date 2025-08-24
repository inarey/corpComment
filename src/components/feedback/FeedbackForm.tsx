import { useState } from "react";
import { MaxChars } from "../../lib/constants";

const FeedbackForm = () => {
  const [text, setText] = useState("");

  const charCount = MaxChars - text.length;
  return (
    <form className="form">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="type text here"
        id="feedback-textarea"
        spellCheck={false}
        maxLength={MaxChars}
      />
      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to # your company
      </label>

      <div>
        <p className="u-italic">{charCount}</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
};

export default FeedbackForm;

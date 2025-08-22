import { TriangleUpIcon } from "@radix-ui/react-icons";

const FeedbackList = () => {
  return (
    <ol className="feedback-list">
      <li className="feedback">
        <button>
          <TriangleUpIcon />
          <span>593</span>
        </button>

        <div>B</div>

        <div>
          <p>ByteGrad</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis, voluptatem molestias? Beatae architecto aliquid soluta.
          </p>
        </div>

        <p>4D</p>
      </li>
    </ol>
  );
};

export default FeedbackList;

export function Question(props) {
  const handleAnswerButtonClick = (answer,index) => {
    if (answer.correct === true) {
		
    }
  };

  if (props.question) {
    return (
      <div className="max-w-xl rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <h1 className="mb-2 text-2xl text-yellow-700">
            {props.currentQuestionIndex}) {props.question.question}
          </h1>
        </div>
        <div className="px-6 pt-4 pb-2">
          <ul>
            <li className="p-2">
              <p
                className="text-gray-700 text-base cursor-pointer"
                onClick={props.handleAnswerButtonClick(
                  props.question.answers[0]
                )}
              >
                a) {props.question.answers[0].answer}
              </p>
            </li>
            <li className="p-2">
              <p
                className="text-gray-700 text-base cursor-pointer"
                onClick={props.handleAnswerButtonClick(
                  props.question.answers[1]
                )}
              >
                b) {props.question.answers[1].answer}
              </p>
            </li>
            <li className="p-2">
              <p
                className="text-gray-700 text-base cursor-pointer"
                onClick={props.handleAnswerButtonClick(
                  props.question.answers[2]
                )}
              >
                c) {props.question.answers[2].answer}
              </p>
            </li>
            <li className="p-2">
              <p
                className="text-gray-700 text-base cursor-pointer"
                onClick={props.handleAnswerButtonClick(
                  props.question.answers[3]
                )}
              >
                d) {props.question.answers[3].answer}
              </p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

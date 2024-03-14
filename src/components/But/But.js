import "/Users/mymac/Desktop/rep project/my-react-app/src/components/But/But.css";

function But({ text, fun }) {
  return (
    <>
      <div className="ran-but" onClick={fun}>
        {text}
      </div>
    </>
  );
}

export default But;

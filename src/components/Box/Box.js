import "/Users/mymac/Desktop/rep project/my-react-app/src/components/Box/Box.css";
import InputBox from "../InputBox/InputBox";

export default function Box({ input }) {
  return (
    <>
      <div className="box , h-align">
        <div className="v-align">
          <InputBox Input={{ input }} />
        </div>
      </div>
    </>
  );
}

import "./Box.css";
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

import Box from "../Box/Box";
import "./Main.css";

export default function Main({ input }) {
  return (
    <>
      <div className="h-align">
        <Box input={{ input }} />
      </div>
    </>
  );
}

import {
  IncommingFile,
  IncommingMessage,
  OutgoingFile,
  OutgoingMessage,
} from "./Message";
import { Message } from "@hecate-org/blingaton-types/build";

const Messages = (props) => {
  console.log(props);
  return (
    <div className="h-full py-4">
      <IncommingMessage text="Heel lekkere text enz"></IncommingMessage>
      <OutgoingMessage text="Heel lekkere text enz"></OutgoingMessage>
      <IncommingFile text="Heel lekkere text enz"></IncommingFile>
      <OutgoingFile text="Heel lekkere text enz"></OutgoingFile>
      {props.messages.map((message: Message) => {
        console.log(message)
        // return <OutgoingMessage text={message.content}></OutgoingMessage>;
      })}
    </div>
  );
};

export default Messages;

import { useRouter } from "next/router";
import Card from "../ui/Card";
import classes from "./MeetupDetail.module.css";

function MeetupDetails(props) {
  const router = useRouter();
  function showEditHandler() {
    router.push(props.id + "/editDetail");
  }
  return (
    <section className={classes.detail}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <h1>{props.title}</h1>
        <address>{props.address}</address>
        <p>{props.description}</p>
        <div className={classes.actions}>
          <button onClick={showEditHandler}>Edit Meetup</button>
        </div>
      </Card>
    </section>
  );
}

export default MeetupDetails;

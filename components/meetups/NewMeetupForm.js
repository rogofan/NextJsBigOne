import { useRef } from "react";
import { useRouter } from "next/router";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();
  const router = useRouter();
  const currentUrl = router.asPath;

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    const meetupDatas = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
      id: props.initialData?.id ?? "",
    };

    // props.onAddMeetup(meetupData);

    if (props.initialData) {
      // Editing mode
      props.onEditMeetup(meetupDatas);
      // console.log("onEditMeetup was called in newMeetUpForm");
    } else {
      // Creating mode
      props.onAddMeetup(meetupData);
      // console.log("onAddMeetup was called in newMeetUpForm");
    }
  }

  //change text button
  const isFound = currentUrl.includes("edit");
  const textButton = !isFound ? "Add meetup" : "Edit meetup";

  //?? operator set to empty input, when Add new meetup
  const existingMeetupData = {
    title: props.initialData?.title ?? "",
    image: props.initialData?.image ?? "",
    address: props.initialData?.address ?? "",
    description: props.initialData?.description ?? "",
    id: props.initialData?.id ?? "",
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input
            type="text"
            required
            id="title"
            ref={titleInputRef}
            defaultValue={existingMeetupData.title}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image (link)</label>
          <input
            type="url"
            required
            id="image"
            ref={imageInputRef}
            defaultValue={existingMeetupData.image}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            required
            id="address"
            ref={addressInputRef}
            defaultValue={existingMeetupData.address}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
            defaultValue={existingMeetupData.description}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>{textButton}</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;

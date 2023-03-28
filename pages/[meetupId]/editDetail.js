import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

function editDetail(props) {
  const router = useRouter();
  const [data, setData] = useState({});
  //Getting data from LS and send them to NewMeetupForm via props
  useEffect(() => {
    const storedData = localStorage.getItem("myData");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  async function editMeetupHandler(enteredMeetupData) {
    const response = await fetch(`/api/edit-meetup`, {
      method: "PUT",
      body: JSON.stringify({ ...enteredMeetupData, id: data.id }),
      headers: {
        "content-type": "application/json",
      },
    });

    if (!response.ok) {
      const text = await response.text();
      console.error("Error response:", text);
      throw new Error("Failed to update meetup");
    }

    const res = await response.json();

    console.log(res);

    router.push("/");
  }

  const existingMeetupData = {
    title: data.title,
    image: data.image,
    address: data.address,
    description: data.description,
    id: data.id,
  };
  console.log(existingMeetupData.id + " editDetail");

  return (
    <NewMeetupForm
      onEditMeetup={editMeetupHandler}
      initialData={existingMeetupData}
    />
  );
}

export default editDetail;

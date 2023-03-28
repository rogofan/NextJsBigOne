import MeetupDetails from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";
import { Fragment, useEffect } from "react";
import Head from "next/head";

function MeetupDetail(props) {
  const data = {
    image: props.meetupData.image,
    title: props.meetupData.title,
    address: props.meetupData.address,
    description: props.meetupData.description,
    id: props.meetupData.id,
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("myData", JSON.stringify(data));
    }
  }, []);

  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="Description" content={props.meetupData.description} />
      </Head>
      <MeetupDetails
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
        id={props.meetupData.id}
      />
    </Fragment>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://Karel:Karel@cluster0.kmbqjcq.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();
  return {
    //Fallback defines way, which is IDs preloaded from BE
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://Karel:Karel@cluster0.kmbqjcq.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const obId = new ObjectId(meetupId);
  const selectedMeetups = await meetupsCollection.findOne({
    _id: obId,
    // _id: ObjectId(meetupId),
  });

  client.close();
  // fetch data for single meetup
  return {
    props: {
      meetupData: {
        id: selectedMeetups._id.toString(),
        title: selectedMeetups.title,
        address: selectedMeetups.address,
        image: selectedMeetups.image,
        description: selectedMeetups.description,
      },
    },
  };
}

export default MeetupDetail;

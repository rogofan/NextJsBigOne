import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";
// Next js use import according to if they are run
// on server side, or client side during build process

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Next.Js Meetup app</title>
        <meta
          name="Description"
          content="Browse this awesome page, which allows you to make meetups"
        />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </Fragment>
  );
}

//Works only in page components files
//getStaticProps is reserved name for Next.js
export async function getStaticProps() {
  //Here can be run any code, which is normally run on serverSide
  //Run during build process
  const client = await MongoClient.connect(
    "mongodb+srv://Karel:Karel@cluster0.kmbqjcq.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();
  return {
    props: {
      meetups: meetups.map((meet) => ({
        title: meet.title,
        address: meet.address,
        image: meet.image,
        description: meet.description,
        id: meet._id.toString(),
      })),
    },
    // Revalidate set time when page is reloaded from server side
    revalidate: 1,
  };
}

// //getServerSideProps => USE WHEN: data change frequently
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export default HomePage;

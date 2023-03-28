// pages/api/editMeetup.js
import { MongoClient, ObjectId } from "mongodb";

async function handler(req, res) {
  if (req.method === "PUT") {
    try {
      const { id, title, image, address, description } = req.body;

      const client = await MongoClient.connect(
        "mongodb+srv://Karel:Karel@cluster0.kmbqjcq.mongodb.net/meetups?retryWrites=true&w=majority"
      );

      const database = client.db("meetups");
      const collection = database.collection("meetups");
      const result = await collection.updateOne(
        { _id: new ObjectId(id) },
        {
          $set: {
            title,
            image,
            address,
            description,
          },
        },
        { upsert: true }
      );

      console.log(result);

      // Close the connection and send the response
      client.close();
      res.status(200).json({ message: "Meetup updated.   " + title });
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: "Server error", error: e.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed." });
  }
}

export default handler;

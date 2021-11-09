import { Router } from "express";
import fetch from "node-fetch";
// import admin from "firebase-admin";

const router = Router().post("/sendToAll", (req, res) => {
  // admin.messaging().sendToDevice(
  //   fcm_tokens, // ['token_1', 'token_2', ...]
  //   {
  //     data: {
  //       owner: "Me",
  //       user: "ye shi Me",
  //       // picture: JSON.stringify(picture),
  //     },
  //   },
  //   {
  //     // Required for background/quit data-only messages on iOS
  //     contentAvailable: true,
  //     // Required for background/quit data-only messages on Android
  //     priority: "high",
  //   }
  // );

  // let notification = {
  //   title: "FCM REMOTE MESSAGE",
  //   body: "THIS IS A REMOTE MESSAGE",
  //   imageUrl:
  //     "https://th.bing.com/th/id/OIP.nB_5_2DxTN07e3aWCoCYtQHaFj?pid=ImgDet&rs=1",
  // };
  let fcm_tokens = [
    "eXc3rcXhre4:APA91bH8kJSuZg-W_j1ALWd4q_edkAl_tnMeCAHIPhAHfFnItqfmjhxtSjFMCyc_n69v5WG2VwBQZzwErDavYQnV3TeyywENQRmaDcAaeUT4tw3JjsJPKYqrGv732crCf8uhIYv9nEmV",
  ];
  let notification_body = {
    // notification: notification,
    data: {
      threadId: "THREADID-123456789",
      message: "THIS IS A REMOTE MESSAGE",
      type: "bonafide-type",
    },
    registration_ids: fcm_tokens,
  };

  fetch("https://fcm.googleapis.com/fcm/send", {
    method: "POST",
    headers: {
      Authorization:
        "key=AAAAvDzblqA:APA91bHy24adA1ibT8tTqudOlRDq1uE4BpTvWKZPmti-jy1NK2Kog-kCUCOX8xIR0k6ymam4AYLw3wDJgYf8bFf4a17QfXIVUvQCWooE3sFJw1lIYmr4qf4V_dPs3qKGuHktHWOYVbbf",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(notification_body),
  })
    .then(() => {
      res.status(200).send("Notification send successfully");
    })
    .catch((err) => {
      res.status(400).send("Something went wrong!");
      console.log(err);
    });
});

export default router;

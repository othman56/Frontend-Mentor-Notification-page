import AvatarMark from "/public/images/avatar-angela-gray.webp";
import AvatarAngela from "/public/images/avatar-angela-gray.webp";
import AvatarJacob from "/public/images/avatar-jacob-thompson.webp";
import AvatarRizky from "/public/images/avatar-rizky-hasanuddin.webp";
import AvatarKimberly from "/public/images/avatar-kimberly-smith.webp";
import AvatarNathan from "/public/images/avatar-nathan-peterson.webp";
import AvatarAnna from "/public/images/avatar-anna-kim.webp";
import CommentedPicture from "/public/images/image-chess.webp";

export const notificationsData = [
  {
    id: 1,
    name: "Mark Webber",
    text: "reacted to your recent post",
    post: "My first tournament today!",
    read: false,
    time: "1m ago",
    image: AvatarMark,
  },
  {
    id: 2,
    name: "Angela Gray",
    text: "",
    post: "followed you",
    read: false,
    time: "5m ago",
    image: AvatarAngela,
  },
  {
    id: 3,
    name: "jacob Thompson",
    text: " has joined your group",
    post: "Chess Club",
    read: false,
    time: "1 day ago",
    image: AvatarJacob,
  },
  {
    id: 4,
    name: "Rizky Hassanuddin",
    text: "sent you a private message",
    post: "",
    msgContent:
      " Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    read: true,
    time: "5 days ago ",
    image: AvatarRizky,
  },
  {
    id: 5,
    name: "Kimberly Smith",
    text: "",
    post: " commented on your picture",
    read: true,
    time: "1 week ago",
    image: AvatarKimberly,
    sideImg: CommentedPicture,
  },
  {
    id: 6,
    name: "Nathan Peterson",
    text: "reacted to your recent Post",
    post: "5 end-game strategies to increase your win rate",
    read: true,
    time: "2 weeks ago",
    image: AvatarNathan,
  },
  {
    id: 7,
    name: "Anna Kim",
    text: "left the group",
    post: "Chess Club",
    read: false,
    time: "2 weeks ago",
    image: AvatarAnna,
  },
];

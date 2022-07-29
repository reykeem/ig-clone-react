import React, { useEffect, useState } from "react";
import Post from "./Post";

function GetImages() {
  //Captions array
  const textArr = [
    "Believe it!",
    "I fear not the man who has practiced 10,000 kicks once, but the man who has practiced one kick 10,000 times.",
    "The moment you give up, is the moment you let someone else win.",
    "Be SAVAGE not AVERAGE",
    "To create reality, focus beyond the outcome, as if it has already happened.",
    "It's time to go to war with yourself",
    "It isnt the mountains ahead to climb that wear you out; it's the pebble in your shoe",
    "You can't ever win if youre always on the defensive, to win you have to attack",
    "The greatest oak was once a little nut who held its ground",
    "Don't make a havit of choosing what feels good over what's actually good for you",
    "The larger the island of knowledge the logner the shoreline of wonder",
    "You have two choices: to control your mind or let your mind control you",
    "You have the gift of perseverance, and that's what makes you a genius too",
    "Great things come from hard work and perseverance. No excuses.",
    "OVO XO your girl at my next show",
    "while(!(succeed = try()))",
    "If you have a wish don't go back to the past and redo everything. If you want to change yourself, don't change the past but change who you are now.",
    "Money buys many things... The best of which is freedom",
    "All a matter of perspective. You see a loading screen, I see a Crown Royale.",
    "We must live together as brothers or perish together as fools.",
    "Everyone should know how to program a computer, because it teaches you how to think.",
    "You will not be puished for you anger, you will be punished by your anger.",
    "The future belongs to those who prepare for it today",
    "The bigger the mountain, the better the view.",
    "For a man to conquer himself is the first and noblest of victories.",
    "Many men go fishing all their lives without knowing that it is not fish they are after.",
    "The merit in action lies in finishing to then end.",
    "There will be roadblocks but we will overcome them.",
    "The devil whsipered in my ear: you can't outrun the storm. I replied: i got bounce pads.",
    "Work hard, play harder.",
    "Felt cute might delete",
    "Happy International DragonFly Yeti Appreciation Earth Day",
    "Summer 2022!",
    "I love coding...jk",
    "Why did the programmer quit? Because he didnt get arrays.",
  ];

  //array of avatars for pfps

  const avatars = [
    "https://img.seadn.io/files/edbc0b3003833f03db7e9ce21e992e1e.png?fit=max&w=600",
    "https://img.seadn.io/files/765ecd2bbac181c2f3b525e1ccb8dbf0.png?fit=max&w=600",
    "https://img.seadn.io/files/e715f990e10371db3be948534743f794.png?fit=max&w=600",
    "https://img.seadn.io/files/01cb4cb3c83660aace33d7da6bb93b35.png?fit=max&w=600",
    "https://img.seadn.io/files/edbc0b3003833f03db7e9ce21e992e1e.png?fit=max&w=600",
    "https://img.seadn.io/files/dae43979de61c856837136de2f0fa7ff.png?fit=max&w=600",
    "https://img.seadn.io/files/fda20958601c36274425bf80593c92e5.png?auto=format&fit=max&w=384",
    "https://img.seadn.io/files/3ef615af62aee675e001b4d174f90921.png?auto=format&fit=max&w=384",
    "https://img.seadn.io/files/c1e57873559bdc38385a89af89197c58.png?auto=format&fit=max&w=384",
    "https://img.seadn.io/files/ded2d02cafb22210ca5bda683d94c398.png?auto=format&fit=max&w=384",
    "https://img.seadn.io/files/40dd9773f0af35eff0873817eb1bcf08.png?auto=format&fit=max&w=384",
    "https://img.seadn.io/files/cd42d7d2097a260af735cff8a9593b98.png?auto=format&fit=max&w=384",
    "https://img.seadn.io/files/9248c1689b466ccfa785fa24e8e8275e.png?auto=format&fit=max&w=384",
    "https://img.seadn.io/files/8d126aa743b09d1b07abf43933a5a933.png?auto=format&fit=max&w=384",
    "https://img.seadn.io/files/b6f594010c5495fa1322009ee8e3e26f.png?auto=format&fit=max&w=384",
    "https://img.seadn.io/files/74b237fc6bd2d5ffb48f1c3acaf23bb3.png?auto=format&fit=max&w=384",
    "https://img.seadn.io/files/7c5661d4a7ed4da6360b6caeae2287fb.png?auto=format&fit=max&w=384",
    "https://img.seadn.io/files/eff478e7644c71f95a13e94e43422f95.png?auto=format&fit=max&w=384",
    "https://img.seadn.io/files/a0098912079e5a8d46f5526b7cf20ecb.png?auto=format&fit=max&w=384",
    "https://img.seadn.io/files/c6a115baa37f8b74c221d8cb102de0bd.png?auto=format&fit=max&w=384",
    "https://img.seadn.io/files/9eba65138104052cdd79005df9e49d84.png?auto=format&fit=max&w=384",
    "https://img.seadn.io/files/f862140a6e8cbaca770a211b6ad55871.png?auto=format&fit=max&w=384",
    "https://img.seadn.io/files/d6ec13093edbc3d50b9e28ca07277bb3.png?auto=format&fit=max&w=384",
    "https://img.seadn.io/files/349a06f15b0c20d1ec90b9db2c45d7e4.png?auto=format&fit=max&w=384",
    "https://img.seadn.io/files/80b9a59b5a4cd32539e0ab41200df5b8.png?auto=format&fit=max&w=384",
    "https://img.seadn.io/files/fc0888da7be8567593946757a0c70967.png?auto=format&fit=max&w=384",
    "https://img.seadn.io/files/c38c94bf8fa22fa28417e732aeb9ae0a.png?auto=format&fit=max&w=384",
    "https://img.seadn.io/files/d0436c5651fda70ba89eaf779735e104.png?auto=format&fit=max&w=384",
    "https://img.seadn.io/files/2ba7462d8ae72024bacb8bbd5994cb8e.png?auto=format&fit=max&w=384",
    "https://img.seadn.io/files/251ffd8b3479ec40c67135fda4152943.png?auto=format&fit=max&w=384",
    "https://img.seadn.io/files/f7213be12878413b836e854477c7b4b8.png?auto=format&fit=max&w=384",
    "https://img.seadn.io/files/030a5d3a4bb092423f1cb31aa7caa9e3.png?auto=format&fit=max&w=384",
    "https://img.seadn.io/files/c23fbd33774e9497e29d5221ce85b176.png?auto=format&fit=max&w=384",
    "https://img.seadn.io/files/a8f558b2e2196c57ad17c9ef085a7729.png?auto=format&fit=max&w=384",
    "https://img.seadn.io/files/50fcd1b92eac99ccb6c3a5550e30369e.png?auto=format&fit=max&w=384",
  ];

  // destructure to useState vars
  const [imgArr, setImgArr] = useState([]);

  //useEffect to fetch data and set the setImgArr to the new filtered and tagged elements
  useEffect(() => {
    fetch(
      "https://us-central1-codesmith-curriculum-server.cloudfunctions.net/app/images"
    )
      .then((res) => {
        return res.json();
      })
      .catch((error) => {
        throw Error;
      })
      .then((data) => {
        const filtered = data.filter((url) => {
          if (!url.includes("fake")) {
            return url;
          }
        });
        return filtered;
      })
      .then((filtered) => {
        let objArr = [];
        let id = 0;
        filtered.forEach((el) => {
          const obj = {
            url: el,
            id: id,
            username: "user" + id.toString(),
            userpfp: avatars[id],
            liked: false,
            description: textArr[id],
            comments: [],
          };
          objArr.push(obj);
          id++;
          setImgArr(objArr);
        });
      });
  }, []);

  const toggleLike = (id) => {
    //map the arr
    const updatedImgArr = imgArr.map((obj) => {
      //if obj has same id as the edited obj
      if (id === obj.id) {
        // use object spread to make new object whose liked prop has been inverted
        return { ...obj, liked: !obj.liked };
      }
      return obj;
    });
    //set imgArr to be the updatedImgArr with the new changes to liked
    setImgArr(updatedImgArr);
  };

  return (
    <div>
      {imgArr.map((el) => (
        <div key={el.id}>
          <Post
            src={el.url}
            id={el.id}
            username={el.username}
            userpfp={el.userpfp}
            liked={el.liked}
            description={el.description}
            comments={el.comments}
            toggleLike={toggleLike}
          />
        </div>
      ))}
    </div>
  );
}

export default GetImages;

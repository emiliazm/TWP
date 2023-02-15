var fs = require("fs");

for (let i = 0; i < 10000; i++) {
  const jsonData = {
    description:
      "Hero Key by Hedge Heroes | This Specially Crafted, Handmade Hero Key will Give the Holder Visibility into the Hedge Heroes Token Gated Community. Holding a Single Hero Key Grants Access to Exclusive Documentation, Hedge Pay and Hedge World Plans, Future Drops, Project Collaborations, Giveaways and More! You may want to keep hold of one throughout this heroic journey…",
    external_url: "https://hedgeheroes.io/",
    image: "ipfs://QmQ1BVnr1NAejaCquJHZMgtaL41zR8EfcRaisz8zrQpvjL",
    name: "Hero Key #" + i + " | Hedge Heroes",
    attributes: [],
  };

  fs.writeFile("metadata/" + i, JSON.stringify(jsonData), function (err) {
    if (err) {
      console.log(err);
    }
  });
}

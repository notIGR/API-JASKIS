// JASKIS
// paste the MongoDB commands you use underneath each prompt

// GETTING STARTED
// 1. Create a database called jaskis
use jaskis

// 2. Create a collection called bounties
debugger.createCollection("bounties")

show collections
// ADD THE ANIMAL BOUNTIES
// 1. Insert the given "Thanoceros" bounty object
db.bounties.insertOne( {
    name: "Thanoceros",
    species: "Rhinoceros",
    loaction: "Grasslands",
    wantedFor: "Eating too much grass",
    client: "Songbird",
  reward: 10000,
  captured: false } )

// 2. Query for all bounties in the bounties collection
db.bounties.find()

// 3. Insert many bounties at once using the given objects
db.bounties.insertMany(
    [
      {
        "name": "Lokinkajou",
        "species": "Kinkajou",
        "location": "Tropical rainforest",
        "wantedFor": "Partying too late at night",
        "client": "White tiger",
        "reward": 1000,
        "captured": false
      },
      {
        "name": "Nebullama",
        "species": "Llama",
        "location": "Grasslands",
        "wantedFor": "Drinking all the water from the ocean",
        "client": "Songbird",
        "reward": 2500,
        "captured": false
      },
      {
        "name": "Polarwind",
        "species": "Polar Bear",
        "location": "Arctic",
        "wantedFor": "Not hibernating",
        "client": "Sabertooth",
        "reward": 4000,
        "captured": false
      },
      {
        "name": "Wrecking Crows",
        "species": "Crow",
        "location": "Grasslands",
        "wantedFor": "Cawing too loudly",
        "client": "Red wolf",
        "reward": 40000,
        "captured": false
      },
      {
        "name": "Grandhog",
        "species": "Groundhog",
        "location": "Woodlands",
        "wantedFor": "Not coming out of the hole on time and prolonging winter",
        "client": "Songbird",
        "reward": 50000,
        "captured": false
      },
      {
        "name": "Grim Panda",
        "species": "Giant Panda",
        "location": "Temperate forest",
        "wantedFor": "Eating all the bamboo",
        "client": "Red wolf",
        "reward": 5000,
        "captured": false
      }
    ]  )

// MANAGE THE DATABASE
// Queries

// 1. Query for all bounties in the Grasslands
b.bounties.find({location: "Grasslands"}) //bounties available in the grassland


// 2. Query for all bounties with a reward worth 10000 or more
b.bounties.find({reward: { $gte: 10000} }) //bounties greater than or equal too $10000

// 3. Query for all bounties, but exclude the client attribute from being shown
db.bounties.find( {client: 0} ) //find all except client name NO

// 4. Query for a Groundhog in the Woodlands
db.bounties.find({ species: "Groundhog", location: "Woodlands"})) // find via location and woodlands name of bounty

// Update and Delete
// 1. Update the reward for Polarwind to 10000
db.bounties.updateMany({"reward": 4000}, {$set: { "reward": 10000}})

// 2. Remove Lokinkajou
db.bounties.deleteOne({name: "Lokinkajou"})

// 3. Delete all bounties sent by Songbird
db.bounties.deleteMany({ "client": "Songbird"})

// 4. Update all captured statuses to true

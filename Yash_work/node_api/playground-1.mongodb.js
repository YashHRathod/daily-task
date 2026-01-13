/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// const database = 'NEW_DATABASE_NAME';
// const collection = 'NEW_COLLECTION_NAME';

// // Create a new database.
// use(database);

// // Create a new collection.
// db.createCollection(collection);

// The prototype form to create a collection:
/* db.createCollection( <name>,
  {
    capped: <boolean>,
    autoIndexId: <boolean>,
    size: <number>,
    max: <number>,
    storageEngine: <document>,
    validator: <document>,
    validationLevel: <string>,
    validationAction: <string>,
    indexOptionDefaults: <document>,
    viewOn: <string>,
    pipeline: <pipeline>,
    collation: <document>,
    writeConcern: <document>,
    timeseries: { // Added in MongoDB 5.0
      timeField: <string>, // required for time series collections
      metaField: <string>,
      granularity: <string>,
      bucketMaxSpanSeconds: <number>, // Added in MongoDB 6.3
      bucketRoundingSeconds: <number>, // Added in MongoDB 6.3
    },
    expireAfterSeconds: <number>,
    clusteredIndex: <document>, // Added in MongoDB 5.3
  }
)*/

// More information on the `createCollection` command can be found at:
// https://www.mongodb.com/docs/manual/reference/method/db.createCollection/
/*************************************************
 * DATABASE
 *************************************************/
use("training_db");

// db.posts.aggregate([
//   { $match: { likes: { $gte: 1 } } },
//   {
//     $group: {
//       _id: "$category",
//       totalLikes: { $sum: "$likes" },
//     },
//   },
// ]);

// db.posts.aggregate([
//   { $match: { likes: { $gte: 2 } } },
//   {
//     $group: {
//       _id: "$category",
//       totalLikes: { $sum: "$likes" },
//     },
//   },
//   { $sort: { totalLikes: -1 } },
// ]);

// db.posts.aggregate([
//   {
//     $addFields: {
//       isPopular: { $cond: [{ $gte: ["$likes", 5] }, true, false] },
//     },
//   },
// ]);
// db.posts.aggregate([
//   {
//     $lookup: {
//       from: "users",
//       localField: "userId",
//       foreignField: "_id",
//       as: "userInfo",
//     },
//   },
//   { $unwind: "$userInfo" },
//   {
//     $addFields: { isPopular: { $cond: [{ $gte: [(likes: 5)] }, true, false] } },
//   },
// ]);



// db.posts.aggregate([
//   {
//     $group: {
//       _id: "$category",
//       totalposts: { $sum: 1 },
//       totallikes: { $sum: "$likes" },
//       averagelike: { $avg: "$likes" },
//     },
//   },
//   { $match: { averagelike: { $gte: 4 } } },
// ]);




// db.posts.aggregate([
//   { $match: { likes: { $ne: 0 } } },
//   { $group: { _id: "$category", totallikes: { $sum: "$likes" } } },
// ]);




// db.posts.aggregate([
//   {
//     $lookup: {
//       from: "users",
//       localField: "userId",
//       foreignField: "_id",
//       as: "userInfo",
//     },
//   },
//   { $unwind: "$userInfo" },
//   {
//     $addFields: {
//       isPopular: {
//         $cond: [{ $gte: ["$likes", 5] }, true, false],
//       },
//     },
//   },
//   {
//     $project: {
//       title: 1,
//       "userInfo.name": 1,
//       likes: 1,
//       isPopular: 1,
//     },
//   },
// ]);

// db.posts.aggregate([
//   {
//     $lookup: {
//       from: "users",
//       localField: "userId",
//       foreignField: "_id",
//       as: "userInfo",
//     },
//   },
//   { $unwind: "$userInfo" },
//   {
//     $group: {
//       _id: "$userInfo.name",
//       totalLikes: { $sum: "$likes" },
//     },
//   },
//   {
//     $project: {
//       _id: 0,
//       username: "$_id",
//       totalLikes: 1,
//     },
//   },
// ]);

// db.posts.createIndex({ category: 1 });

// db.posts.createIndex({ category: 1, likes: -1 });

// db.posts.getIndexes();

// db.posts.find({ category: "frontend" }).explain("executionStats");

// db.posts.createIndex({ createdAt: 1 }, { expireAfterSeconds: 10 });

// db.posts.insertOne({
//   title: "temp post",
//   createdAt: new Date(),
// });

db.serverStatus().metrics.ttl;

// db.posts.getIndexes();

// db.posts.find({ title: "temp post" });


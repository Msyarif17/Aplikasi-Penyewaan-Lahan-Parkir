db.createCollection('tiket');

db.createCollection('parkir_masuk');

db.createCollection('parkir_keluar');

db.createCollection('lahan');

db.lahan.insertOne(
    {
        _id: 1,
        isBlank:1,
        code: "LP-1100021",
        price: 2000
    }
);
db.tiket.insertMany([
    {
        _id: 1,
        lahan_id: 1,
        code: "tiket-0000001"
    },
    {
        _id: 2,
        lahan_id: 1,
        code: "tiket-0000002"
    },
]);
db.tiket.insertOne(
    {
        _id: new ObjectId(),
        code: new NumberLong(2000),
        items: [
            {
                tiket_id: 1,
                price: new NumberLong(2000),
            },
            {
                tiket_id: 2,
                price: new NumberLong(2000),
            }
        ]
    }
);

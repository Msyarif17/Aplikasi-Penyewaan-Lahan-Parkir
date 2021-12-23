db.createCollection('tiket');

db.createCollection('lahan');

db.createCollection('kendaraan');

db.lahan.insertMany([
    {
        _id: 1,
        isNull:1,
        code: "LP-1100021",
    },
    {
        _id: 2,
        isNull:2,
        code: "LP-2200022",
    },
    {
        _id: 3,
        isNull:3,
        code: "LP-3300023",
    },
    {
        _id: 4,
        isNull:4,
        code: "LP-4400024",
    },
]);
db.tiket.insertMany([
    {
        _id: 1,
        lahan_id: 1,
        code: "tiket-0000001",
        kendaraan_id:2,
        masuk: new Date("2012-11-24"),
        keluar: new Date("2012-11-24"),
        inUsed: 0,
        biaya: 2000
    },
    {
        _id: 2,
        lahan_id: 1,
        code: "tiket-0000002",
        kendaraan_id:1,
        masuk: new Date("2012-11-24"),
        keluar: new Date(),
        inUsed: 1,
        biaya: 2000
    },
    {
        _id: 3,
        lahan_id: 2,
        code: "tiket-0000003",
        kendaraan_id:1,
        masuk: new Date("2021-01-24"),
        keluar: new Date(),
        inUsed: 1,
        biaya: 2000
    },
    {
        _id: 4,
        lahan_id: 1,
        code: "tiket-0000004",
        kendaraan_id:1,
        masuk: new Date("2021-11-24"),
        keluar: new Date(),
        inUsed: 1,
        biaya: 2000
    },
    {
        _id: 5,
        lahan_id: 2,
        code: "tiket-0000005",
        kendaraan_id:1,
        masuk: new Date(),
        keluar: new Date(),
        inUsed: 0,
        biaya: 2000
    },
    {
        _id: 6,
        lahan_id: 4,
        code: "tiket-0000002",
        kendaraan_id:1,
        masuk: new Date("2021-11-24"),
        keluar: new Date("2021-11-24"),
        inUsed: 1,
        biaya: 2000
    },
    {
        _id: 7,
        lahan_id: 1,
        code: "tiket-0000007",
        kendaraan_id:1,
        masuk: new Date("2020-10-01"),
        keluar: new Date("2020-10-01"),
        inUsed: 1,
        biaya: 2000
    },
    {
        _id: 8,
        lahan_id: 1,
        code: "tiket-0000008",
        kendaraan_id:1,
        masuk: new Date("2012-11-24"),
        keluar: new Date("2012-11-24"),
        inUsed: 1,
        biaya: 2000
    },
    {
        _id: 9,
        lahan_id: 1,
        code: "tiket-0000009",
        kendaraan_id:1,
        masuk: new Date("2012-11-24"),
        keluar: new Date(),
        inUsed: 1,
        biaya: 2000
    },
    {
        _id: 2,
        lahan_id: 1,
        code: "tiket-0000002",
        kendaraan_id:1,
        masuk: new Date("2012-11-24"),
        keluar: new Date(),
        inUsed: 1,
        biaya: 2000
    },
    {
        _id: 10,
        lahan_id: 1,
        code: "tiket-0000010",
        kendaraan_id:1,
        masuk: new Date("2012-11-24"),
        keluar: new Date(),
        inUsed: 1,
        biaya: 2000
    },
]);


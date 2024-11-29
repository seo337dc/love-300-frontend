console.log("test");
console.log(require.resolve("json-server"));

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("patient-db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.get("/patients", (req, res) => {
  const queryStatuses = req.query.status ? req.query.status.split(",") : [];
  const page = parseInt(req.query._page || "1", 10);
  const limit = parseInt(req.query._limit || "10", 10);

  let patients = router.db.get("patients").value();

  // 다중 필터링
  if (queryStatuses.length) {
    patients = patients.filter((patient) =>
      queryStatuses.includes(patient.status)
    );
  }

  // 정렬
  if (req.query._sort) {
    const sortField = req.query._sort;
    const sortOrder = req.query._order === "desc" ? -1 : 1;
    patients = patients.sort((a, b) =>
      a[sortField] > b[sortField] ? sortOrder : -sortOrder
    );
  }

  // 페이징
  const start = (page - 1) * limit;
  const end = start + limit;
  const paginatedPatients = patients.slice(start, end);

  res.json({
    first: 1,
    prev: page > 1 ? page - 1 : null,
    next: end < patients.length ? page + 1 : null,
    last: Math.ceil(patients.length / limit),
    pages: Math.ceil(patients.length / limit),
    items: patients.length,
    data: paginatedPatients,
  });
});

// 전체데이터 불러오는 controller
server.get("/patients-all", (req, res) => {
  let patients = router.db.get("patients").value();

  res.json({
    total: patients.length,
    data: patients,
  });
});

// 기본 라우터
server.use(router);

server.listen(4000, () => {
  console.log("JSON Server is running on http://localhost:4000");
});

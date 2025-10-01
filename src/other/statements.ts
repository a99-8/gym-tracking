const addNormalStatement = /* sql */ `
    --
    INSERT INTO gym (id, bodyPart, date)
    VALUES (?, ?, ?)
    --
`;
const addResetStatement = /* sql */ `
    --
    DELETE FROM gym
    INSERT INTO gym (id, bodyPart, date)
    VALUES (?, ?, ?)
    --
`;

const initStatement = /* sql */ `
    --
    PRAGMA journal_mode = WAL;

    CREATE TABLE IF NOT EXISTS gym (
        id INTEGER PRIMARY KEY,
        date TEXT,
        bodyPart TEXT
    );
    --
`;

const deleteStatement = `DELETE FROM gym WHERE id = ?;`;
const getAllStatement = `SELECT * FROM gym`;
const resetStatement = `DELETE FROM gym`;

export {
  addNormalStatement,
  addResetStatement,
  deleteStatement,
  getAllStatement,
  initStatement,
  resetStatement,
};

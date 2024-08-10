const mysql = require('mysql')
const { db } = require('../../config')
const pool = mysql.createPool(db)

const query = (sql, values) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err)
                console.log('getConnection error:', err)
            } else {
                connection.query(sql, values, (err, rows) => {
                    console.log('connection query sql+values', sql, values);
                    if (err) {
                        reject(err)
                        console.log('connection query error:', err);
                    } else {
                        resolve(rows)
                        console.log('connection query result', rows);

                    }
                    connection.release()
                })
            }
        })
    })

}
module.exports = query
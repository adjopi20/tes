const { Pool } = require('pg');

// Create a new Pool instance with your PostgreSQL connection details
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Belajar JDBC',
  password: '123',
  port: 5432, // Default PostgreSQL port
});

// Example query
pool.query('select u.id,u.name,uv.name as parent_name'
           + ' from ultra_voucher u'
           + ' left join ultra_voucher uv on u.parent_id=uv.id'
           + ' order by u.id asc', (err, res) => {
  if (err) {
    console.error('Error executing query', err);
    return;
  }
  
  // Print the results
  console.log('Query results:', res.rows);
});

// Don't forget to release the client when done
pool.end();
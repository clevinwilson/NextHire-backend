require('dotenv').config();
const app = require('./app');
const { sequelize } = require('./models');

const PORT = process.env.PORT || 3000;

// catch 404 and forward to error handler
app.use((req, res, next) => {
    res.status(404).json({ message: 'Sorry, we cannot find that!' });
});

const server = app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

sequelize
    .sync({ alter: true }) // Updates table structures without deleting data
    .then(() => console.log('✅ Database & tables synchronized!'))
    .catch((err) => console.error('❌ Database sync failed:', err));

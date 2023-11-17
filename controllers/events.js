const { events, categories, ticketTypes } = require("../models")
const { Op } = require("sequelize")


module.exports = {
    getUpcomingEvents: async (req, res) => {
        try {
            const { name, limit, price, startDate, endDate, category, ...others } = req.query
            console.log('INI START DATE', startDate);
            console.log('INI END DATE', endDate);
            const result = await events.findAll({
                where: {
                    status: "Upcoming",
                    name: name ? { [Op.like]: `%${name}%` } : { [Op.ne]: null },
                    startDate: startDate ? { [Op.between]: [startDate, endDate] } : { [Op.ne]: null },
                    ...others
                },
                attributes: { exclude: ['createdAt', 'updatedAt'] },
                include: [
                    {
                        model: categories,
                        attributes: ['name'],
                        where: { name: category ? category : { [Op.ne]: null } }
                    },
                    {
                        model: ticketTypes,
                        where: { price: price ? price : { [Op.or]: [{ [Op.ne]: null }, { [Op.is]: null }] } }
                    }
                ],
                limit: parseInt(limit) || 8,
            })
            result.forEach(value => value.ticketTypes.sort((a, b) => a.price - b.price))
            return res.status(200).send(result)
        } catch (error) {
            console.log(error);
            return res.status(500).send(error)
        }
    },
    getFreeEvents: async (req, res) => {
        try {
            const result = await events.findAll({
                where: { status: "upcoming" },
                include: [
                    { model: categories },
                    {
                        model: ticketTypes,
                        where: { price: 0 }
                    }
                ],
                limit: 8,
            })
            return res.status(200).send(result)
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    },
}
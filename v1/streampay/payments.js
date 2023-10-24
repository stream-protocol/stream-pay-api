const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');
const Payment = require('../models/payment.model');

// List Payments with Filtering, Pagination, and Sorting
router.get('/', async (req, res) => {
  try {
    const { merchantId, startDate, endDate, page = 1, limit = 10, sortField = 'timestamp', sortOrder = 'asc' } = req.query;

    const filterCriteria = {};

    if (merchantId) {
      filterCriteria.merchantWalletAddress = merchantId;
    }

    if (startDate && endDate) {
      filterCriteria.timestamp = {
        [Op.between]: [new Date(startDate), new Date(endDate)],
      };
    }

    const order = [[sortField, sortOrder]];
    const offset = (page - 1) * limit;

    const { rows, count } = await Payment.findAndCountAll({
      where: filterCriteria,
      order,
      limit,
      offset,
    });

    res.json({
      payments: rows,
      totalRecords: count,
      totalPages: Math.ceil(count / limit),
      currentPage: parseInt(page),
    });
  } catch (error) {
    console.error('Error listing payments:', error);
    res.status(500).json({ error: 'Failed to list payments' });
  }
});

module.exports = router;

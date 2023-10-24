const Payment = require('../models/Payment'); // Import the Payment model

// List Payments with Filtering, Pagination, and Sorting
exports.listPayments = async (req, res) => {
  try {
    // Extract filtering criteria from query parameters
    const { merchantId, startDate, endDate, page = 1, limit = 10, sortField = 'timestamp', sortOrder = 'asc' } = req.query;

    // Create an empty object to store the filtering criteria
    const filterCriteria = {};

    // Add merchantId to the filter criteria if provided
    if (merchantId) {
      filterCriteria.merchantWalletAddress = merchantId;
    }

    // Add date filtering if startDate and endDate are provided
    if (startDate && endDate) {
      filterCriteria.timestamp = {
        [Sequelize.Op.between]: [new Date(startDate), new Date(endDate)],
      };
    }

    // Define sorting order
    const order = [[sortField, sortOrder]];

    // Calculate pagination values
    const offset = (page - 1) * limit;
    const totalRecords = await Payment.count({ where: filterCriteria });

    // Query the database with filtering, sorting, and pagination
    const payments = await Payment.findAll({
      where: filterCriteria,
      order,
      limit,
      offset,
    });

    res.json({
      payments,
      totalRecords,
      totalPages: Math.ceil(totalRecords / limit),
      currentPage: parseInt(page),
    });
  } catch (error) {
    console.error('Error listing payments:', error);
    res.status(500).json({ error: 'Failed to list payments' });
  }
};

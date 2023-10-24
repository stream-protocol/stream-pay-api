// Periodically fetch and update fee rates (example using setInterval)
setInterval(async () => {
  try {
    // Fetch updated fee rates from a Solana RPC provider or fee API
    const updatedFeeRates = await fetchFeeRates();

    // Update the feeRates lookup table with the new rates
    Object.assign(feeRates, updatedFeeRates);

    console.log('Fee rates updated successfully.');
  } catch (error) {
    console.error('Error updating fee rates:', error);
  }
}, 3600000); // Update fee rates every hour (adjust the interval as needed)

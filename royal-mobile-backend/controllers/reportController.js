const ExcelJS = require("exceljs");
const Sale = require("../models/Sale");

exports.downloadSalesReport = async (req, res) => {

  const sales = await Sale.find().populate("productId");

  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Sales");

  worksheet.columns = [
    { header: "Product", key: "product" },
    { header: "Quantity", key: "qty" },
    { header: "Total", key: "total" },
    { header: "Date", key: "date" }
  ];

  sales.forEach((s) => {

    worksheet.addRow({
      product: s.productId ? s.productId.name : "Deleted Product",
      qty: s.quantity,
      total: s.total,
      date: new Date(s.date).toLocaleString()
    });

  });

  res.setHeader(
    "Content-Type",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  );

  res.setHeader(
    "Content-Disposition",
    "attachment; filename=sales.xlsx"
  );

  await workbook.xlsx.write(res);
  res.end();
};

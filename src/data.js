export const mainTaskRow = [
  [
    "work_order",
    "24-25OA000219 R-1",
    "work_order",
    new Date(2024, 9, 1),
    new Date(2024, 9, 9),
    null,
    100,
    null,
  ],
];

// Related tasks
export const relatedRows = [
  [
    "marketing",
    "Marketing",
    "marketing",
    new Date(2024, 9, 1),
    new Date(2024, 9, 3),
    null,
    100,
    null,
  ],
  [
    "sjo_assign",
    "SJO Assign",
    "sjo_assign",
    new Date(2024, 9, 3),
    new Date(2024, 9, 4),
    null,
    100,
    "marketing",
  ],
  [
    "automation",
    "Automation",
    "automation",
    new Date(2024, 9, 4),
    new Date(2024, 9, 5),
    null,
    100,
    "sjo_assign",
  ],
  [
    "design",
    "Design",
    "design",
    new Date(2024, 9, 4),
    new Date(2024, 9, 5),
    null,
    100,
    "sjo_assign",
  ],
  [
    "electrical",
    "Electrical",
    "electrical",
    new Date(2024, 9, 4),
    new Date(2024, 9, 6),
    null,
    100,
    "sjo_assign",
  ],
  [
    "production_adr",
    "Production ADR",
    "production_adr",
    new Date(2024, 9, 4),
    new Date(2024, 9, 4),
    null,
    100,
    "sjo_assign",
  ],
  [
    "erp",
    "ERP",
    "erp",
    new Date(2024, 9, 5),
    new Date(2024, 9, 9),
    null,
    100,
    "production_adr,electrical,design,automation",
  ],
];

export const mainTaskRow1 = [
  [
    "work_order",
    "24-25OA000252 R-1",
    "work_order",
    new Date(2024, 8, 7), // Adjusted month (September is 8 in zero-based indexing)
    new Date(2024, 8, 11),
    null,
    100,
    null,
  ],
];

export const relatedRows1 = [
  [
    "marketing",
    "Marketing",
    "marketing",
    new Date(2024, 8, 7), // 07-09-2024
    new Date(2024, 8, 7), // 07-09-2024
    null,
    100,
    null,
  ],
  [
    "sjo_assign",
    "SJO Assign",
    "sjo_assign",
    new Date(2024, 8, 7), // 07-09-2024
    new Date(2024, 8, 9), // 09-09-2024
    null,
    100,
    "marketing",
  ],
  [
    "automation",
    "Automation",
    "automation",
    new Date(2024, 8, 9), // 10-09-2024 (Note: fixed incorrect order from provided date)
    new Date(2024, 8, 9), // 09-09-2024
    null,
    100,
    "sjo_assign",
  ],
  [
    "design",
    "Design",
    "design",
    new Date(2024, 8, 9), // 09-09-2024
    new Date(2024, 8, 9), // 09-09-2024
    null,
    100,
    "sjo_assign",
  ],
  [
    "electrical",
    "Electrical",
    "electrical",
    new Date(2024, 8, 9), // 09-09-2024
    new Date(2024, 8, 9), // 09-09-2024
    null,
    100,
    "sjo_assign",
  ],
  [
    "production_adr",
    "Production ADR",
    "production_adr",
    new Date(2024, 8, 9), // 09-09-2024
    new Date(2024, 8, 10), // 10-09-2024
    null,
    100,
    "sjo_assign",
  ],
  [
    "erp",
    "ERP",
    "erp",
    new Date(2024, 8, 9), // 09-09-2024
    new Date(2024, 8, 11), // 11-09-2024
    null,
    100,
    "production_adr,electrical,design,automation",
  ],
];

export const mainTaskRow2 = [
  [
    "work_order",
    "24-25OA000180",
    "work_order",
    new Date(2024, 6, 8), // 08-07-2024 (July is 6 in zero-based indexing)
    new Date(2024, 6, 29), // 09-07-2024
    null,
    100,
    null,
  ],
];

export const relatedRows2 = [
  [
    "marketing",
    "Marketing",
    "marketing",
    new Date(2024, 6, 8), // 08-07-2024
    new Date(2024, 6, 9), // 09-07-2024
    null,
    100,
    null,
  ],
  [
    "sjo_assign",
    "SJO Assign",
    "sjo_assign",
    new Date(2024, 6, 9), // 09-07-2024
    new Date(2024, 6, 25), // 25-07-2024
    null,
    100,
    "marketing",
  ],
  [
    "automation",
    "Automation",
    "automation",
    new Date(2024, 6, 25), // 25-07-2024
    new Date(2024, 6, 29), // 29-07-2024
    null,
    100,
    "sjo_assign",
  ],
  [
    "design",
    "Design",
    "design",
    new Date(2024, 6, 25), // 25-07-2024
    new Date(2024, 6, 26), // 26-07-2024
    null,
    100,
    "sjo_assign",
  ],
  [
    "electrical",
    "Electrical",
    "electrical",
    new Date(2024, 6, 25), // 25-07-2024
    new Date(2024, 6, 27), // 27-07-2024
    null,
    100,
    "sjo_assign",
  ],
  [
    "production_adr",
    "Production ADR",
    "production_adr",
    new Date(2024, 6, 25), // 25-07-2024
    new Date(2024, 6, 26), // 26-07-2024
    null,
    100,
    "sjo_assign",
  ],
  [
    "erp",
    "ERP",
    "erp",
    new Date(2024, 6, 29), // 29-07-2024
    new Date(2024, 6, 29), // 29-07-2024
    null,
    100,
    "production_adr,electrical,design,automation",
  ],
];

export const mainTaskRow3 = [
  [
    "work_order",
    "24-25OA000314", // Main work order task
    "work_order",
    new Date(2024, 9, 17), // 17-10-2024 (October is 9 in zero-based indexing)
    new Date(),
    null,
    100, // Percent complete
    null, // No dependencies for the main task
  ],
];

export const relatedRows3 = [
  [
    "marketing",
    "Marketing", // Related task: Marketing
    "marketing",
    new Date(2024, 9, 17), // 17-10-2024
    new Date(2024, 9, 17), // 17-10-2024
    null,
    100,
    null, // No dependencies
  ],
  [
    "sjo_assign",
    "SJO Assign", // Related task: SJO Assign
    "sjo_assign",
    new Date(2024, 9, 17), // 17-10-2024
    new Date(2024, 9, 17), // 17-10-2024
    null,
    100,
    "marketing", // Depends on Marketing
  ],
  [
    "automation",
    "Automation", // Related task: Automation
    "automation",
    new Date(2024, 9, 17), // 17-10-2024
    null, // End date is null
    null,
    0, // Assume not complete, since no end date
    "sjo_assign", // Depends on SJO Assign
  ],
  [
    "design",
    "Design", // Related task: Design
    "design",
    new Date(2024, 9, 17), // 17-10-2024
    null, // End date is null
    null,
    0, // Assume not complete, since no end date
    "sjo_assign", // Depends on SJO Assign
  ],
  [
    "electrical",
    "Electrical", // Related task: Electrical
    "electrical",
    new Date(2024, 9, 17), // 17-10-2024
    null, // End date is null
    null,
    0, // Assume not complete, since no end date
    "sjo_assign", // Depends on SJO Assign
  ],
  [
    "production",
    "Production", // Related task: Production
    "production",
    new Date(2024, 9, 17), // 17-10-2024
    new Date(2024, 9, 18), // 18-10-2024
    null,
    100,
    "sjo_assign", // Depends on SJO Assign
  ],
  [
    "erp",
    "ERP", // Related task: ERP
    "erp",
    new Date(2024, 9, 18), // 18-10-2024
    new Date(2024, 9, 18), // 18-10-2024
    null,
    100,
    "production,electrical,design,automation", // Depends on multiple tasks
  ],
];

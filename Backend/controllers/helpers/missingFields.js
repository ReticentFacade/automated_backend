const missingFields = (...fields) => {
  for (const field of fields) {
    if (!field) {
      return { error: "Missing field: " + fields.join(", ") };
    }
  }

  return null;
};

export { missingFields };

const handleFilter = (items: any, e: string) => {
  const lowerCaseValue = e.toLowerCase();
  const filteredResults: any = [];

  items.filter((item: any) => {
    if (item.area.toLowerCase().includes(lowerCaseValue)) {
      filteredResults.push(item);
    }
  });

  return filteredResults;
};

const handleSearch = (items: any, value: string) => {
  const lowerCaseValue = value.toLowerCase();
  const searchResults: any = [];

  items.filter((item: any) => {
    if (
      item.name.toLowerCase().includes(lowerCaseValue) ||
      item.area.toLowerCase().includes(lowerCaseValue) ||
      item.address.toLowerCase().includes(lowerCaseValue) ||
      item.contact.toLowerCase().includes(lowerCaseValue)
    ) {
      searchResults.push(item);
    }
  });

  return searchResults;
};

const capatalize = (value: string) => {
  return value && value.charAt(0).toUpperCase() + value.slice(1);
}

export { handleFilter, handleSearch, capatalize };

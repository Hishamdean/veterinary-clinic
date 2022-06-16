import { Clinic } from "../lib/types";

const handleFilter = (items: Clinic[], e: string) => {
  const lowerCaseValue = e.toLowerCase();
  const filteredResults: Clinic[] = [];

  items.filter((item: Clinic) => {
    if (item.area.toLowerCase().includes(lowerCaseValue)) {
      filteredResults.push(item);
    }
  });

  return filteredResults;
};

const handleSearch = (items: Clinic[], value: string) => {
  const lowerCaseValue = value.toLowerCase();
  const searchResults: Clinic[] = [];

  items.filter((item: Clinic) => {
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

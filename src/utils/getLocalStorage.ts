export const getLocalStorage = (itemName: string) => {
  const getLocaStorageUser = localStorage.getItem(itemName);

  const object = JSON.parse(getLocaStorageUser as string);
  return object;
};

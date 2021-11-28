const hasUid: () => boolean = () => {
  const cookies = document.cookie;
  if (cookies !== undefined && cookies !== null) {
    // @ts-ignore
    const uid = cookies.split('; ')
      .find((row) => row.startsWith('uid'))
      .split('=')[1];
    return uid !== undefined && uid !== null && uid !== '';
  }
  return false;
};

const setUid: () => boolean = () => {
  document.cookie;
  return false;
};

export default { hasUid };

export const getAnimeResponse = async (resource, query) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`);
    const anime = await response.json();
    return anime;
};

export const getVouchers = async (category) => {
  let query = '';
  if (category) {
    query = `?category=${category}`;
  }
  const response = await fetch(`http://localhost:4000/vouchersunclaim${query}`);
  const data = await response.json();
  return data.vouchers || [];
};

export const getVouchersClaimeds = async (category) => {
    let query = '';
    if (category) {
      query = `?category=${category}`;
    }
    const response = await fetch(`http://localhost:4000/vouchersclaim${query}`);
    const data = await response.json();
    return data.vouchers || [];
  };


export const getNestedAnimeResponse = async (resource, objectProperty) => {
    const response = await getAnimeResponse(resource);

    if (!Array.isArray(response.data)) {
        throw new Error("Expected response.data to be an array");
    }

    return response.data.flatMap(item => item[objectProperty]);
};

export const reproduce = (data, gap) => {
    const first = ~~(Math.random() * (data.length - gap) + 1) 
    const last = first + gap

    const response = {
        data: data.slice(first, last)
    }
    return response
}

import axios from "axios";

export const fetchFilteredBiodatas = async ({ ageRange, biodataType, division }) => {
  try {
    const queryParams = new URLSearchParams();

    if (biodataType) queryParams.append("biodataType", biodataType);
    if (division) queryParams.append("division", division);
    if (ageRange?.length === 2) {
      queryParams.append("ageRange", `${ageRange[0]}-${ageRange[1]}`);
    }

    const response = await axios.get(`${import.meta.env.VITE_URL}/biodatas?${queryParams}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch biodatas:", error);
    throw error;
  }
};

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelectedStack } from "../../../context/SelectedStackContext"; // import your context hook

const useCityData = () => {
  const { city } = useParams();
  const navigate = useNavigate();
  const { setSelectedStack } = useSelectedStack();
  const [cityData, setCityData] = useState(null);
  const [selectedStackId, setSelectedStackId] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState("BACKLOG");

  useEffect(() => {
    const fetchCityData = async () => {
      try {
        const response = await fetch(`/data/${city}.json`);
        if (!response.ok) throw new Error("City data not found");
        const data = await response.json();
        setCityData(data);

        if (data?.stacks?.length > 0) {
          const firstStack = data.stacks[0];
          setSelectedStackId(firstStack.stackId);
          setSelectedStack(firstStack);
        }
      } catch (error) {
        console.error("Error loading city data:", error);
        navigate("/");
      }
    };

    fetchCityData();
  }, [city, navigate, setSelectedStack]);

  const filteredStacks =
    cityData?.stacks?.filter((s) => s.stackStatus === selectedStatus) || [];

  return {
    cityData,
    selectedStatus,
    setSelectedStatus,
    selectedStackId,
    setSelectedStackId,
    filteredStacks,
  };
};

export default useCityData;

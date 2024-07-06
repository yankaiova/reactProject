import { useParams } from "react-router-dom";
export const DetailPage = () => {
  const { id } = useParams();
  return <div>Детали единицы информации по {id}</div>;
};

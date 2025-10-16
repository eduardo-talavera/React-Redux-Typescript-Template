import { useParams } from "react-router-dom";

export const DetailView = () => {
  const { id } = useParams()
  return (
    <div>
      <h1>Detail View with id: { id } </h1>
    </div>
  )
}

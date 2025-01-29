import { useGetDBInfoQuery } from "@/pages/Lab1/api/dbInfo/dbInfo.ts";
import InfoCard from "@/pages/Lab1/ui/InfoCard/InfoCard.tsx";

export default function Lab1() {
  const { data, error, isLoading } = useGetDBInfoQuery();

  return (
    <>
      <InfoCard data={data} error={error} isLoading={isLoading} />
    </>
  );
}

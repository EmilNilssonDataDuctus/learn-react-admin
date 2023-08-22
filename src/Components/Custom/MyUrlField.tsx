import { useRecordContext } from "react-admin";

export const MyUrlField = ({ source }: { source: string }) => {
  const record = useRecordContext();
  if (!record) return null;
  return <a href={record[source]}>{record[source]}</a>;
};

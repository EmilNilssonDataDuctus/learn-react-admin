import LaunchIcon from "@mui/icons-material/Launch";
import { Link } from "@mui/material";
import { useRecordContext } from "react-admin";

export const MyUrlField = ({ source }: { source: string }) => {
  const record = useRecordContext();
  if (!record) return null;
  return (
    <Link href={record[source]} sx={{ textDecoration: "none" }}>
      {record[source]}
      <LaunchIcon sx={{ fontSize: 15, ml: 1 }} />
    </Link>
  );
};

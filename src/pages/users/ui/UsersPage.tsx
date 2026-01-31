import React, { useEffect } from "react";
import { Typography } from "antd";
import { useUsersQuery } from "@/entities";

export function UsersPage() {
  const { data: users } = useUsersQuery();

  useEffect(() => {
    if (users) {
      // eslint-disable-next-line no-console
      console.log(users);
    }
  }, [users]);

  return (
    <div>
      <Typography.Title level={2}>Users</Typography.Title>
    </div>
  );
}


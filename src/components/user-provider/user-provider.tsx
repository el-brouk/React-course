import { useState } from 'react';
import { UserContext } from './index';
import React from 'react';

type User = 'unknown' | 'isAuthorized';

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>('unknown');

  return <UserContext value={{ value: user, setUser }}>{children}</UserContext>;
};

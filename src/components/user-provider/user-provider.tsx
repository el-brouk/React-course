import { useState } from 'react';
import { UserContext } from './index';
import React from 'react';
import type { User } from './index';

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  return <UserContext value={{ value: user, setUser }}>{children}</UserContext>;
};

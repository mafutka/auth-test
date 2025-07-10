type User = { email: string; password: string };

export const fakeDb: User[] = [];

export function registerUser(
  email: string,
  password: string
): { success: boolean; error?: string } {
  const userExist = fakeDb.find((user) => user.email === email);

  if (userExist) {
    return { success: false, error: 'user alredy exists' };
  }
  fakeDb.push({ email, password });
  return { success: true };
}

export function loginUser(email: string, password: string): { success: boolean; error?: string } {
  const user = fakeDb.find((user) => user.email === email && user.password === password);

  if (!user) {
    return { success: false, error: 'no user exists' };
  }
  return { success: true };
}

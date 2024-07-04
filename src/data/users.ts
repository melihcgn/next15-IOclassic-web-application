export const users = [
    {
      email: "atapas@email.com",
      password: "password",
      id: 1
    },
    {
      email: "alex@email.com",
      password: "password",
      id: 2
    },
    {
      email: "bob@email.com",
      password: "password",
      id: 3
    }
  ]
  
  export const getUserByEmail = (email: any) => {
    const found = users.find(user => user.email === email);
    return found;
  }

  export const getUserById = (id: number) => {
    return users.find(user => user.id === id);
  };
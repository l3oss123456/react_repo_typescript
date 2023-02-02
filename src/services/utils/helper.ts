export const useGetTheme = () => {
  return `useGetTheme`;
};
// has number
export const hasNumber = (number: string) => new RegExp(/[0-9]/).test(number);

// has mix of small and capitals
export const hasMixed = (number: string) =>
  new RegExp(/[a-z]/).test(number) && new RegExp(/[A-Z]/).test(number);

// has special chars
export const hasSpecial = (number: string) =>
  new RegExp(/[!#@$%^&*)(+=._-]/).test(number);

export const passwordFormat = (pwd: string, pwdLength: number = 5) => {
  const info = [];

  if (pwd.length < pwdLength) {
    info.push({
      label: "",
      message: `password should have at least ${pwdLength} word`,
    });
  }
  if (!hasNumber(pwd)) {
    info.push({
      label: "",
      message: `password should be have number`,
    });
  }
  if (!hasMixed(pwd)) {
    info.push({
      label: "",
      message: `password should be mixed between text and number`,
    });
  }
  if (!hasSpecial(pwd)) {
    info.push({
      label: "",
      message: `password should be have special letter`,
    });
  }

  return info;
};
// export const strengthColor = (count: number) => {
//   if (count < 2) return { label: "Poor", color: "error.main" };
//   if (count < 3) return { label: "Weak", color: "warning.main" };
//   if (count < 4) return { label: "Normal", color: "warning.dark" };
//   if (count < 5) return { label: "Good", color: "success.main" };
//   if (count < 6) return { label: "Strong", color: "success.dark" };
//   return { label: "Poor", color: "error.main" };
// };

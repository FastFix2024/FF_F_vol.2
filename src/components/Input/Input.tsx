import { useState } from "react";
import { InputComponentContainer, InputComponentLabel, InputComponentWrapper, InputComponent, ToggleButton, ErrorMessage } from "./styles";
import { InputProps } from "./types";
import { HidePassword, ShowPassword } from "../../assets";

function Input({ name, type = "text", placeholder, onInputChange, label, value, checked, error }: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <InputComponentContainer>
      <InputComponentLabel>{label}</InputComponentLabel>
      <InputComponentWrapper>
        <InputComponent
          name={name}
          type={showPassword && type === "password" ? "text" : type}
          placeholder={placeholder}
          onChange={onInputChange}
          value={value}
          checked={checked}
        />
        {type === "password" && <ToggleButton src={showPassword ? HidePassword : ShowPassword} onClick={togglePasswordVisibility} />}
      </InputComponentWrapper>
      <ErrorMessage>{error}</ErrorMessage>
    </InputComponentContainer>
  );
}

export default Input;

